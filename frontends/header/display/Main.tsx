import { Cemjsx } from "cemjs-all"
import logoWhite from '@svg/logoWhite.svg'
import menu from 'json/menu.json'

const RenderMenu = function ({ items }) {
  return (
    <ul class="header_navList">
      {
        items.map((item) => {
          return (
            <li class="navLink">
              <a
                href={item.link}
                class="header_navList-item"
                onclick={(e) => {
                  e.preventDefault()
                  window.scrollTo({
                    top: document.querySelector(item.link).offsetTop,
                    behavior: "smooth"
                  })
                }}
              >
                {item.name}
              </a>
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
              <a
                href={item.link}
                class="header_mobile-list__item"
                onclick={(e) => {
                  e.preventDefault()
                  window.scrollTo({
                    top: document.querySelector(item.link).offsetTop,
                    behavior: "smooth"
                  })
                  this.Variable.openSidebar = false;
                  this.Fn.initAll();
                }}
              >
                {item.name}
              </a>
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
          ref="burger"
          class={["header_burger", this.Variable.openSidebar ? "header_burger__active" : null]}
          onclick={() => {
            this.Variable.openSidebar = !this.Variable.openSidebar;
            this.Fn.initAll();
          }}
        >
          <span class="header_burger__item"></span>
          <span class="header_burger__item"></span>
          <span class="header_burger__item"></span>
        </div>
      </div>

      <div
        ref="mobileMenu"
        class={[
          "header_mobile-menu",
          this.Variable.openSidebar ? "header_mobile-menu__active" : null
        ]}
      >
        <RenderMobileMenu items={menu} />
      </div>

    </div>
  )
}