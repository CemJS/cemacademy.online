import { Cemjsx, Fn } from "cemjs-all"
import logoAcademy from '@images/academy.png'
import logoCEM from '@images/CryptoEmergency.png'
import logoCEMmini from '@svg/cryptoEmergency.svg'
import telegram from '@svg/telegram.svg'

import socials from 'json/socials.json'

export default function () {
  return (
    <div class="footer_inner">
      <div class="footer_main">
        <a href="/" class="footer_logo">
          <img src={logoAcademy} alt="Academy Crypto Emergency" />
        </a>

        <a href="https://t.me/cemcryptoacademy" target="_blank" class="footer_link">
          <img src={telegram} alt="Academy Crypto Emergency" />
        </a>

        <a
          target="_blank"
          class="footer_logo"
          href="https://crypto-emergency.com/"
        >
          <img src={logoCEM} alt="Ecosystem Crypto Emergency" />
        </a>

        <div class="footer_socials">
          {
            socials.map(item => {
              return (
                <a href={item.link} class="footer_socials__item" onclick={Fn.link}>
                  <img src={item.img} alt={item.name} />
                </a>
              )
            })
          }
        </div>
      </div>
      <div class="footer_down">
        <p class="text">
          Разработано командой
          <span class="bold"> Crypto Emergency</span>
        </p>
        <img class="footer_down__icon" src={logoCEMmini} alt="Crypto Emergency" />
      </div>
    </div>
  )
}