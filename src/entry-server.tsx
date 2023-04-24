import ReactDOMServer, { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { WrappedApp } from './app/App';
import store from './store';
import React from 'react';

const render = function (url: string, options?: RenderToPipeableStreamOptions): PipeableStream {
  const stream = ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <WrappedApp />
      </StaticRouter>
    </Provider>,
    options
  );
  return stream;
};

export default render;
