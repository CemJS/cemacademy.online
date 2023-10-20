import { Cemjsx } from "cemjs-all"
import rates from 'json/rates.json'

export default function () {
  return (
    <section class="section">
      <h2 class="title-section">Тарифы</h2>
      <div class="rates">
        {
          rates.map(item => {
            return(
              <div class={["rates_item", `rates_item__${item.color}`]}>
                <div>
                  <h3 class="rates_item-title">{item.title}</h3>
                  <ul class="rates_item-list">
                    {
                      item.about.map(el => {
                        return(
                          <li class="rates_item-list__item">{el}</li>
                        )
                      })
                    }
                  </ul>
                </div>
                
                {
                  item?.bonus ? 
                  <div class="rates_item-bonus">
                    <span>{item.bonus}</span>
                  </div> : null
                }

                <span class={["rates_item-price", `rates_item-price__${item.color}`]}>{item.price}</span>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}