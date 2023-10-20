import { Cemjsx } from "cemjs-all"
import advantages from 'json/advantages.json'


export default function () {
  return (
    <section class="section advantages_section">
      <h2 class="title-section">Преимущества обучения в академии Crypto Emergency</h2>
      <ul class="advantages">
        {
          advantages.map((item, index) => {
            return (
              <li class="advantages_item">
                <span class="advantages_item__title">{`${index + 1}. ${item.title}`}</span>
                <p class="text">{item.text}</p>
              </li>
            )
          })
        }
      </ul>
      <a href="https://t.me/dmitriibelov" class="btn btn__fiolet">Вступить уже сейчас!</a>
      <div class="circle"></div>
    </section>
  )
}