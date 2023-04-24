import * as jsxRuntime from 'react/jsx-runtime';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.mjs';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { Link, NavLink, Outlet, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import pkg from '@reduxjs/toolkit';
const { configureStore } = pkg;
import pkg1 from '@reduxjs/toolkit/dist/query/react/index.js';
const { createApi, fetchBaseQuery } = pkg1;

const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const CARDS_USER = 'CARDS_USER';
const CARD_USER = 'CARD_USER';
const SEARCH_VALUE = 'SEARCH_VALUE';
function inferLiteralFromString(arg) {
  return arg;
}
const cardsUser = () => {
  return { type: inferLiteralFromString(CARDS_USER) };
};
const cardUser = (formData) => {
  return { type: inferLiteralFromString(CARD_USER), formData };
};
const searchValue = (value) => {
  return { type: inferLiteralFromString(SEARCH_VALUE), value };
};
const API_KEY = '6285715144242bd4e87c78f80ab3cd45';
const photoApi = createApi({
  reducerPath: 'photoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.flickr.com/services/rest' }),
  endpoints: (build) => ({
    getPhotos: build.query({
      query: (search) =>
        `?method=flickr.photos.search&api_key=${API_KEY}&text=${
          search ? search : 'nature'
        }&per_page=12&page=1&format=json&nojsoncallback=1`,
    }),
    getOnePhoto: build.query({
      query: (id) =>
        `?method=flickr.photos.getAllContexts&api_key=${API_KEY}&photo_id=${id}&format=json&nojsoncallback=1`,
    }),
  }),
});
const { useGetPhotosQuery, useGetOnePhotoQuery } = photoApi;
const style$g = '';
function Searchbar(props) {
  const dispatch = useDispatch();
  const currentSearch = useSelector((state) => state.rootReducer.search);
  const [isLoading, setIsLoading] = useState(false);
  const { data = [] } = useGetPhotosQuery(currentSearch);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    props.updateFotoData(data.photos.photo);
    try {
    } finally {
      setIsLoading(false);
    }
  }
  return /* @__PURE__ */ jsx('div', {
    className: 'main__search',
    children: /* @__PURE__ */ jsxs('form', {
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsx('input', {
          type: 'text',
          value: currentSearch,
          className: 'input',
          placeholder: 'Искать...',
          onChange: (event) => {
            dispatch(searchValue(event.target.value));
          },
        }),
        /* @__PURE__ */ jsx('button', {
          className: 'button',
          type: 'submit',
          disabled: isLoading,
          children: isLoading ? 'Загружается...' : 'Поиск',
        }),
      ],
    }),
  });
}
const style$f = '';
const style$e = '';
const style$d = '';
function Modal(props) {
  if (props.active === false) {
    return null;
  }
  const title = props.modal && props.modal[0] && props.modal[0].title ? props.modal[0].title : null;
  const viewCount =
    props.modal && props.modal[0] && props.modal[0].view_count ? props.modal[0].view_count : null;
  const commentCount =
    props.modal && props.modal[0] && props.modal[0].comment_count
      ? props.modal[0].comment_count
      : null;
  if (props.modal) {
    return /* @__PURE__ */ jsx('div', {
      className: 'modal',
      onClick: props.onClose,
      children: /* @__PURE__ */ jsxs('div', {
        className: 'modal-content',
        onClick: (event) => event.stopPropagation(),
        children: [
          /* @__PURE__ */ jsx('div', { className: 'modal-close', onClick: props.onClose }),
          /* @__PURE__ */ jsx('div', {
            className: 'modal-img',
            children: /* @__PURE__ */ jsx('img', { src: props.url, alt: 'photo' }),
          }),
          /* @__PURE__ */ jsxs('div', {
            className: 'modal-info',
            children: [
              /* @__PURE__ */ jsx('div', {
                children: /* @__PURE__ */ jsx('b', { children: title ? title : null }),
              }),
              /* @__PURE__ */ jsxs('div', {
                children: [
                  'Количество просмотров: ',
                  viewCount ? viewCount : 'Информация недоступна',
                ],
              }),
              /* @__PURE__ */ jsxs('div', {
                children: [
                  'Количество комментариев: ',
                  commentCount ? commentCount : 'Информация недоступна',
                ],
              }),
            ],
          }),
        ],
      }),
    });
  } else {
    return /* @__PURE__ */ jsx('div', {
      className: 'modal',
      onClick: props.onClose,
      children: /* @__PURE__ */ jsxs('div', {
        className: 'modal-content',
        onClick: (event) => event.stopPropagation(),
        children: [
          /* @__PURE__ */ jsx('div', { className: 'modal-close', onClick: props.onClose }),
          /* @__PURE__ */ jsx('div', {
            className: 'modal-img',
            children: /* @__PURE__ */ jsx('img', { src: props.url, alt: 'photo' }),
          }),
          /* @__PURE__ */ jsx('div', {
            className: 'modal-info',
            children: 'Сожалеем, но дополнительная информация по данному изображению отсутствует',
          }),
        ],
      }),
    });
  }
}
function OneFotoCard(props) {
  const URL2 = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_n.jpg`;
  const URL_BIG = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
  const newFotoArray = [];
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState(newFotoArray);
  function closeModal() {
    setShowModal(false);
  }
  const { data = [] } = useGetOnePhotoQuery(props.id);
  const result = async function onLoading() {
    try {
      setModal(data.set);
    } catch (err) {}
  };
  return /* @__PURE__ */ jsxs('div', {
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'card',
        onClick: () => {
          setShowModal(true);
          result();
        },
        children: [
          /* @__PURE__ */ jsx('div', {
            className: 'img-wrapper',
            children: /* @__PURE__ */ jsx('img', { className: 'card__img', src: URL2, alt: 'img' }),
          }),
          /* @__PURE__ */ jsx('div', { className: 'card__title', children: props.title }),
        ],
      }),
      /* @__PURE__ */ jsx(Modal, {
        active: showModal,
        id: props.id,
        onClose: closeModal,
        modal,
        url: URL_BIG,
      }),
    ],
  });
}
function FotoCards(props) {
  const listItem = props.name.map((item) =>
    /* @__PURE__ */ jsx(
      OneFotoCard,
      {
        id: item.id,
        owner: item.owner,
        secret: item.secret,
        server: item.server,
        title: item.title,
        ispublic: item.ispublic,
        isfriend: item.isfriend,
        isfamily: item.isfamily,
      },
      item.id
    )
  );
  return /* @__PURE__ */ jsx('div', { className: 'cards', children: listItem });
}
function Home() {
  const currentSearch = useSelector((state) =>
    state.rootReducer.search ? state.rootReducer.search : ''
  );
  const { data = [] } = useGetPhotosQuery(currentSearch);
  const newFotoArray = [];
  const [fotoData, setFotoData] = useState(newFotoArray);
  function updateFotoData(newFotoArr) {
    setFotoData(newFotoArr);
  }
  const result = async function onLoading() {
    try {
      setFotoData(data.photos.photo);
    } catch (err) {}
  };
  if (fotoData.length === 0) {
    result();
  }
  return /* @__PURE__ */ jsxs('div', {
    className: 'wrapper',
    children: [
      /* @__PURE__ */ jsx(Searchbar, { updateFotoData }),
      /* @__PURE__ */ jsx(FotoCards, { name: fotoData }),
    ],
  });
}
const style$c = '';
function NotFound() {
  return /* @__PURE__ */ jsxs('div', {
    className: 'wrapper',
    children: [
      /* @__PURE__ */ jsx('h3', { className: 'title', children: 'Здесь будет страница 404' }),
      /* @__PURE__ */ jsxs('div', {
        className: 'links',
        children: [
          /* @__PURE__ */ jsx(Link, { to: '/', children: 'На главную' }),
          /* @__PURE__ */ jsx(Link, { to: '/about', children: 'О нас' }),
        ],
      }),
    ],
  });
}
function About() {
  return /* @__PURE__ */ jsx('div', {
    className: 'wrapper',
    children: /* @__PURE__ */ jsx('h3', { children: 'Здесь будет страничка о нас' }),
  });
}
const style$b = '';
const style$a = '';
function MessageErr(props) {
  return /* @__PURE__ */ jsx('div', { className: 'message-err', children: props.errorText });
}
function NameField({ register, isError }) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx('input', {
        ...register('textInput', { required: true }),
        className: 'input input_text',
        type: 'text',
      }),
      isError === true
        ? /* @__PURE__ */ jsx(MessageErr, {
            errorText: 'Пожалуйста, убедитесь, что поле заполнено',
          })
        : /* @__PURE__ */ jsx(MessageErr, {}),
    ],
  });
}
function DataField({ register, isError }) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx('input', {
        ...register('dateInput', { required: true }),
        className: 'input input_text',
        type: 'date',
      }),
      isError === true
        ? /* @__PURE__ */ jsx(MessageErr, {
            errorText: 'Пожалуйста, убедитесь, что поле заполнено',
          })
        : /* @__PURE__ */ jsx(MessageErr, {}),
    ],
  });
}
const style$9 = '';
function DropDown({ register, isError }) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsxs('select', {
        ...register('select', { required: true }),
        className: 'dropdown',
        children: [
          /* @__PURE__ */ jsx('option', { children: 'Беларусь' }),
          /* @__PURE__ */ jsx('option', { children: 'Россия' }),
          /* @__PURE__ */ jsx('option', { children: 'Украина' }),
          /* @__PURE__ */ jsx('option', { children: 'Польша' }),
        ],
      }),
      isError === true
        ? /* @__PURE__ */ jsx(MessageErr, {
            errorText: 'Пожалуйста, убедитесь, что поле заполнено',
          })
        : /* @__PURE__ */ jsx(MessageErr, {}),
    ],
  });
}
const style$8 = '';
function CheckBox({ register, isError }) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx('div', {
        className: 'checkbox',
        children: /* @__PURE__ */ jsx('p', {
          className: 'checkbox-value',
          children: /* @__PURE__ */ jsxs('label', {
            children: [
              /* @__PURE__ */ jsx('input', {
                ...register('checkbox', { required: true }),
                type: 'checkbox',
                className: 'input-checkbox',
                value: 'Согласие на обработку персональных данных',
              }),
              '* Согласие на обработку персональных данных',
            ],
          }),
        }),
      }),
      isError === true
        ? /* @__PURE__ */ jsx(MessageErr, {
            errorText: 'Необходимо согласие на обработку персональных данных',
          })
        : /* @__PURE__ */ jsx(MessageErr, {}),
    ],
  });
}
const style$7 = '';
function RadioButton({ register, isError }) {
  return /* @__PURE__ */ jsxs('div', {
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'radiobutton',
        children: [
          /* @__PURE__ */ jsxs('label', {
            children: [
              /* @__PURE__ */ jsx('input', {
                type: 'radio',
                ...register('radioInput', { required: true }),
                value: 'Мужской',
              }),
              ' ',
              'Мужской',
            ],
          }),
          /* @__PURE__ */ jsxs('label', {
            children: [
              /* @__PURE__ */ jsx('input', {
                type: 'radio',
                ...register('radioInput', { required: true }),
                value: 'Женский',
              }),
              ' ',
              'Женский',
            ],
          }),
        ],
      }),
      isError === true
        ? /* @__PURE__ */ jsx(MessageErr, {
            errorText: 'Пожалуйста, убедитесь, что поле заполнено',
          })
        : /* @__PURE__ */ jsx(MessageErr, {}),
    ],
  });
}
const style$6 = '';
function FileField({ register, isError }) {
  return /* @__PURE__ */ jsxs('div', {
    children: [
      /* @__PURE__ */ jsx('input', {
        type: 'file',
        className: 'filefield',
        accept: '.jpg, .jpeg, .png',
        ...register('fileInput', { required: true }),
      }),
      isError === true
        ? /* @__PURE__ */ jsx(MessageErr, { errorText: 'Пожалуйста, убедитесь, что файл загружен' })
        : /* @__PURE__ */ jsx(MessageErr, {}),
    ],
  });
}
const style$5 = '';
function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ reValidateMode: 'onSubmit' });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const newCard = {
      userName: data.textInput,
      userDate: data.dateInput,
      userCountry: data.select,
      userSex: data.radioInput,
      userCheckbox: data.checkbox,
      userImg: URL.createObjectURL(data.fileInput[0]),
    };
    dispatch(cardUser(newCard));
    dispatch(cardsUser());
    alert('Данные успешно сохранены');
    reset();
  };
  return /* @__PURE__ */ jsxs('form', {
    onSubmit: handleSubmit(onSubmit),
    className: 'form-questions',
    children: [
      /* @__PURE__ */ jsxs('label', {
        children: [
          /* @__PURE__ */ jsx('p', { className: 'label', children: '* Ваше имя:' }),
          /* @__PURE__ */ jsx(NameField, {
            register,
            required: true,
            isError: errors.textInput ? true : null,
          }),
        ],
      }),
      /* @__PURE__ */ jsxs('label', {
        children: [
          /* @__PURE__ */ jsx('p', { className: 'label', children: '* Пол:' }),
          /* @__PURE__ */ jsx(RadioButton, {
            register,
            required: true,
            isError: errors.radioInput ? true : null,
          }),
        ],
      }),
      /* @__PURE__ */ jsxs('label', {
        children: [
          /* @__PURE__ */ jsx('p', { className: 'label', children: '* Дата рождения:' }),
          /* @__PURE__ */ jsx(DataField, {
            register,
            required: true,
            isError: errors.dateInput ? true : null,
          }),
        ],
      }),
      /* @__PURE__ */ jsxs('label', {
        children: [
          /* @__PURE__ */ jsx('p', { className: 'label', children: '* Ваша страна:' }),
          /* @__PURE__ */ jsx(DropDown, {
            register,
            required: true,
            isError: errors.select ? true : null,
          }),
        ],
      }),
      /* @__PURE__ */ jsx('label', {
        children: /* @__PURE__ */ jsx(CheckBox, {
          register,
          required: true,
          isError: errors.checkbox ? true : null,
        }),
      }),
      /* @__PURE__ */ jsxs('label', {
        children: [
          /* @__PURE__ */ jsx('p', { className: 'label', children: '* Загрузить фото:' }),
          /* @__PURE__ */ jsx(FileField, {
            register,
            required: true,
            isError: errors.fileInput ? true : null,
          }),
        ],
      }),
      /* @__PURE__ */ jsx('p', {
        className: 'label',
        children: '* - Поля, обязательные к заполнению',
      }),
      /* @__PURE__ */ jsx('button', { className: 'button', type: 'submit', children: 'Отправить' }),
    ],
  });
}
const style$4 = '';
const style$3 = '';
const style$2 = '';
function OneUserCards(props) {
  return /* @__PURE__ */ jsxs('div', {
    className: 'user-card',
    children: [
      /* @__PURE__ */ jsxs('div', {
        children: [/* @__PURE__ */ jsx('b', { children: 'Имя:' }), ' ', props.form.userName],
      }),
      /* @__PURE__ */ jsxs('div', {
        children: [/* @__PURE__ */ jsx('b', { children: 'Пол:' }), ' ', props.form.userSex],
      }),
      /* @__PURE__ */ jsxs('div', {
        children: [
          /* @__PURE__ */ jsx('b', { children: 'Дата рождения:' }),
          ' ',
          props.form.userDate,
        ],
      }),
      /* @__PURE__ */ jsxs('div', {
        children: [/* @__PURE__ */ jsx('b', { children: 'Страна:' }), ' ', props.form.userCountry],
      }),
      /* @__PURE__ */ jsxs('div', {
        children: [
          /* @__PURE__ */ jsx('b', { children: 'Фото:' }),
          /* @__PURE__ */ jsx('div', {
            className: 'user-card__foto',
            children: /* @__PURE__ */ jsx('img', { src: props.form.userImg, alt: 'foto' }),
          }),
        ],
      }),
    ],
  });
}
function UserCards() {
  const formArray = useSelector((state) => state.rootReducer.cardsUser);
  const currentKey = function (min, max) {
    return Math.random() * (max - min) + min;
  };
  if (formArray.length === 0) {
    return /* @__PURE__ */ jsx('div', {
      className: 'user-cards',
      children: /* @__PURE__ */ jsx('h3', {
        className: 'user-cards-title',
        children: 'У вас пока еще нет карточек',
      }),
    });
  } else {
    const cards = formArray.map((form) =>
      /* @__PURE__ */ jsx(OneUserCards, { form }, currentKey(0, 100))
    );
    return /* @__PURE__ */ jsxs('div', {
      className: 'user-cards',
      children: [
        /* @__PURE__ */ jsx('h3', { className: 'user-cards-title', children: 'Карточки:' }),
        /* @__PURE__ */ jsx('div', { className: 'user-cards-box', children: cards }),
      ],
    });
  }
}
function UserData() {
  return /* @__PURE__ */ jsx('div', {
    className: 'wrapper',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'form-container',
      children: [
        /* @__PURE__ */ jsx('h3', { children: 'Пожалуйста, заполните форму' }),
        /* @__PURE__ */ jsx(Form, {}),
        /* @__PURE__ */ jsx(UserCards, {}),
      ],
    }),
  });
}
const style$1 = '';
function Navbar() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx('header', {
        className: 'header',
        children: /* @__PURE__ */ jsx('div', {
          className: 'wrapper',
          children: /* @__PURE__ */ jsxs('div', {
            className: 'header__nav',
            children: [
              /* @__PURE__ */ jsx(NavLink, {
                to: '/',
                className: ({ isActive }) => (isActive ? 'header__link-active' : 'header__link'),
                children: 'Главная',
              }),
              /* @__PURE__ */ jsx(NavLink, {
                to: 'about',
                className: ({ isActive }) => (isActive ? 'header__link-active' : 'header__link'),
                children: 'О нас',
              }),
              /* @__PURE__ */ jsx(NavLink, {
                to: 'user',
                className: ({ isActive }) => (isActive ? 'header__link-active' : 'header__link'),
                children: 'Форма',
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ jsx('main', {
        className: 'container',
        children: /* @__PURE__ */ jsx(Outlet, {}),
      }),
    ],
  });
}
const style = '';
function WrappedApp() {
  return /* @__PURE__ */ jsx(Routes, {
    children: /* @__PURE__ */ jsxs(Route, {
      path: '*',
      element: /* @__PURE__ */ jsx(Navbar, {}),
      children: [
        /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(Home, {}) }),
        /* @__PURE__ */ jsx(Route, { path: '*', element: /* @__PURE__ */ jsx(NotFound, {}) }),
        /* @__PURE__ */ jsx(Route, { path: 'about', element: /* @__PURE__ */ jsx(About, {}) }),
        /* @__PURE__ */ jsx(Route, { path: 'user', element: /* @__PURE__ */ jsx(UserData, {}) }),
      ],
    }),
  });
}
const newCardArray = [];
const newCardUser = {};
const newSearch = '';
const initialState = { cardsUser: newCardArray, cardUser: newCardUser, search: newSearch };
function rootReducer(state = initialState, action) {
  if (action.type === CARDS_USER) {
    return {
      ...state,
      cardsUser: [...state.cardsUser, ...[state.cardUser]],
    };
  }
  if (action.type === CARD_USER) {
    return {
      ...state,
      cardUser: action.formData,
    };
  }
  if (action.type === SEARCH_VALUE) {
    return {
      ...state,
      search: action.value,
    };
  }
  return state;
}
const store = configureStore({
  reducer: {
    rootReducer,
    [photoApi.reducerPath]: photoApi.reducer,
  },
  middleware: (getDefaultMiddware) => getDefaultMiddware().concat(photoApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
const render = function (url, options) {
  const stream = ReactDOMServer.renderToPipeableStream(
    /* @__PURE__ */ jsx(Provider, {
      store,
      children: /* @__PURE__ */ jsx(StaticRouter, {
        location: url,
        children: /* @__PURE__ */ jsx(WrappedApp, {}),
      }),
    }),
    options
  );
  return stream;
};
export { render as default };
