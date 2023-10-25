import { Cemjsx } from "cemjs-all"
import logoAcademy from '@images/academy.png'
import logoCEM from '@images/CryptoEmergency.png'

import socials from 'json/socials.json'

export default function () {
  return (
    <div class="footer_inner">
      <div class="footer_main">
        <a href="/" class="footer_logo">
          <img src={logoAcademy} alt="Academy Crypto Emergency" />
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
                <a href={item.link} class="footer_socials__item">
                  <img src={item.img} alt={item.name} />
                </a>
              )
            })
          }
        </div>
      </div>
      <div class="footer_down">
        <a href="#" class="footer_link">Договор оферты</a>
        <a href="#" class="footer_link">Политика конфиденциальности</a>
        <span>Разработано командой Crypto Emergency</span>
      </div>
    </div>
  )
}