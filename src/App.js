import React, {useState} from "react";
import classes from './App.module.css';
import Header from "./components/Header";
import home from './img/home.svg';
import cart from './img/cart.svg';
import megaphone from './img/megaphone.svg';
import Breadcrumbs from "./components/Breadcrumbs";
import logo from './img/logo-work5.svg';
import sprite from './img/sprite.svg';

function App() {

  const [navList, setNavList] = useState([
      {
          id: 1,
          image: {
              src: sprite + '#home'
          },
          link: {
              link: "?page=1",
              text: "Главная"
          },
          active: false
      },
      {
          id: 2,
          image: {
              src: sprite + '#cart'
          },
          link: {
              link: "?page=2",
              text: "Мои магазины"
          },
          active: true
      },
      {
          id: 3,
          image: {
              src: sprite + "#megaphone"
          },
          link: {
              link: "?page=3",
              text: "Промоматериалы"
          },
          active: false
      },
      {
          id: 4,
          image: {
              src: sprite + "#diagram"
          },
          link: {
              link: "?page=3",
              text: "Статистика"
          },
          active: false
      },
      {
          id: 5,
          image: {
              src: sprite + "#wallet"
          },
          link: {
              link: "?page=3",
              text: "Баланс"
          },
          active: false
      },
      {
          id: 6,
          image: {
              src: sprite + "#avatar"
          },
          link: {
              link: "?page=3",
              text: "Персональные данные"
          },
          active: false
      },
      {
          id: 7,
          image: {
              src: sprite + "#question"
          },
          link: {
              link: "?page=3",
              text: "FAQ"
          },
          active: false
      },
      {
          id: 8,
          image: {
              src: sprite + "#headset"
          },
          link: {
              link: "?page=3",
              text: "Техподдержка"
          },
          active: false
      },
      {
          id: 9,
          image: {
              src: sprite + "#exit"
          },
          link: {
              link: "?page=3",
              text: "Выход"
          },
          active: false
      },
  ]);

  const [breadcrumbs, setBreadcrumbs] = useState([
      {id: 1, text: 'Главная', link: '#'},
      {id: 2, text: 'Мои магазины', link: '#'}
  ])

  return (
    <div className="App">
      <Header logo={logo} listItem={navList}/>
      <main className={classes.main}>
          <Breadcrumbs data={breadcrumbs}/>
      </main>
    </div>
  );
}

export default App;
