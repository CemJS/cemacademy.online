import { Cemjsx } from "cemjs-all"
import logo from '@images/logo.png'


export default function () {
  return (
    <div class="header_inner">
      <a href="#" class="header_logo">
        <img src={logo} alt="Academy Crypto Emergency" />
      </a>
      <nav class="header_nav">
        <ul class="header_navList">
          <li>
            <a class="header_navList__item" href="#">Программа</a>
          </li>
          <li>
            <a class="header_navList__item" href="#">Эксперты</a>
          </li>
          <li>
            <a class="header_navList__item" href="#">Тарифы</a>
          </li>
          <li>
            <a class="header_navList__item" href="#">Результаты</a>
          </li>
        </ul>
      </nav>
      <a
        class="btn btn__green"
        href="https://t.me/dmitriibelov"
        target="_blank"
      >
        Записаться
      </a>
    </div>
  )
}