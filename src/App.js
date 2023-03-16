import React, {useState} from "react";
import classes from './App.module.css';
import Header from "./components/header/Header";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import logo from './img/logo-work5.svg';
import sprite from './img/sprite.svg';
import Buttons from "./components/buttons/Buttons";
import avatar from './img/photo.png';
import Button from "./components/UI/button";
import ModalWindow from "./components/modalWindow/ModalWindow";

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

  const [modalShow, setModalShow] = useState(false);

  const closeModal = () => {
      setModalShow(false);
  }

  return (
    <div className="App">
      <Header logo={logo} listItem={navList}/>
      <main className={classes.main}>
          <Buttons avatar={avatar} username="Максим Добжанский"/>
          <div className={classes.container}>
              <div>
                  <Breadcrumbs data={breadcrumbs}/>
              </div>
              <div className={classes.buttonCreateShop}>
                  <Button onClick={() => setModalShow(true)} text="Создать свой магазин" icon={sprite + "#plus"} type="green"/>
              </div>
          </div>
      </main>
        <ModalWindow state={modalShow} close={closeModal}>11111111111</ModalWindow>
    </div>
  );
}

export default App;
