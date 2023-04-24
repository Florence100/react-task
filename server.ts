// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import express, { NextFunction, Request, Response } from 'express';
// import { createServer as createViteServer } from 'vite';
// import { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// async function createServer() {
//   const app = express();
//   const cwd = process.cwd();

//   const vite = await createViteServer({
//     root: cwd,
//     server: { middlewareMode: true, hmr: true },
//     appType: 'custom',
//   });

//   app.use(vite.middlewares);

//   app.use('*', async (req: Request, res: Response, next: NextFunction) => {
//     const url = req.originalUrl;

//     try {
//       let template = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');

//       template = await vite.transformIndexHtml(url, template);
//       const html = template.split(`<!--ssr-outlet-->`);
//       const render = (await vite.ssrLoadModule('./src/entry-server.tsx')).render as (
//         url: string,
//         options?: RenderToPipeableStreamOptions
//       ) => PipeableStream;

//       const { pipe } = render(url, {
//         onShellReady() {
//           const prevHtml = html[0];
//           res.write(prevHtml);
//           pipe(res);
//         },
//         onAllReady() {
//           const resHtml = html.join('');
//           res.write(resHtml);
//           res.end();
//         },
//       });
//     } catch (e: unknown) {
//       const err = e as Error;
//       vite.ssrFixStacktrace(err);
//       next(err);
//     }
//   });

//   const port = process.env.PORT || 5177;

//   app.listen(port, () => console.log(`App is listening on http://localhost:${port}`));
// }

// createServer();

import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import renderApp from './dist/server/entry-server.js';

import { ViteDevServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isTest = process.env.VITEST;

async function createServer(root = process.cwd(), isProd = process.env.NODE_ENV === 'production') {
  const resolve = (p: string) => path.resolve(__dirname, p);

  const indexProd = isProd ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : '';

  const app = express();

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite: ViteDevServer | undefined;
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    // app.use((await import('compression')).default());
    app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      })
    );
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template;
      if (!isProd) {
        template = fs.readFileSync(resolve('index.html'), 'utf-8');
        if (vite) {
          template = await vite.transformIndexHtml(url, template);
        }

        const html = template.split(`<!--ssr-outlet-->`);

        const stream = renderApp(url, {
          onShellReady() {
            res.write(html[0]);
            stream.pipe(res);
          },
          onAllReady() {
            res.write(html[0] + html[1]);
            res.end();
          },
        });
      } else {
        template = indexProd;
        const html = template.split(`<!--ssr-outlet-->`);

        const { pipe } = renderApp(url, {
          onShellReady() {
            res.write(html[0]);
            pipe(res);
          },
          onAllReady() {
            res.write(html[0] + html[1]);
            res.end();
          },
        });
      }
    } catch (e) {
      !isProd && vite && vite.ssrFixStacktrace(e as Error);
      console.log((e as Error).stack);
      res.status(500).end((e as Error).stack);
    }
  });

  return { app, vite };
}

if (!isTest) {
  createServer(process.cwd(), process.env.NODE_ENV === 'production').then(({ app }) =>
    app.listen(5555, () => {
      console.log('http://localhost:5555');
    })
  );
}
