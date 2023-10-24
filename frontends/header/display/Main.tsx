import { Cemjsx } from "cemjs-all"
import logoWhite from '@svg/logoWhite.svg'
import menu from 'json/menu.json'

const RenderMenu = function ({ items }) {
  return (
    <ul class="header_navList">
      {
        items.map((item) => {
          return (
            <li>
              <a href={item.link} class="header_navList__item">{item.name}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

const RenderMobileMenu = function ({ items }) {
  return (
    <ul class="header_mobile-list">
      {
        items.map((item) => {
          return (
            <li>
              <a href={item.link} class="header_mobile-list__item">{item.name}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default function () {
  return (
    <div class="header_inner">
      <a href="/" class="header_logo">
        <img src={logoWhite} alt="Academy Crypto Emergency" />
      </a>
      <nav class="header_nav">
        <RenderMenu items={menu} />
      </nav>
      <div class="header_btns">
        <a
          class="btn btn__green"
          href="https://t.me/dmitriibelov"
          target="_blank"
        >
          Записаться
        </a>
        <div
          class="header_burger"
          ref="burger"
          onclick={() => {
            this.Ref.burger.classList.toggle('header_burger__active')
            this.Ref.mobileMenu.classList.toggle('header_mobile-menu__active')
            this.init()
          }}
        >
          <span class="header_burger__item"></span>
          <span class="header_burger__item"></span>
          <span class="header_burger__item"></span>
        </div>
      </div>

      <div class="header_mobile-menu" ref="mobileMenu">
        <RenderMobileMenu items={menu} />
      </div>

    </div>
  )
}