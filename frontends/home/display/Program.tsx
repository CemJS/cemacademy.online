import { Cemjsx } from "cemjs-all"
import program from 'json/program.json'

export default function () {
  return (
    <section class="section">
      <h2 class="title-section">Программа</h2>
      <div class="program">
        {
          program.map(item => {
            return (
              <div class="program_item">
                <div class="program_item__title">
                  <h3>{item.title}</h3>
                </div>
                <div class="program_item-info">
                  <div class="program_item-content">
                    <div>
                      <span class="program_item-info__subtitle">Содержание</span>
                      {
                        item.content.map((el) => {
                          return (
                            <p class="program_item__text">{el}</p>
                          )
                        })
                      }
                    </div>

                    <p class="text">Эксперт <span class="bold">Игорь Еньшин</span></p>

                    <div class="program_item-details">
                      <div class="program_item-details__circle program_item-details__circle-green">
                        <span>6</span>
                        <span>недель</span>
                      </div>
                      <div class="program_item-details__circle program_item-details__circle-fiolet">
                        <span>24</span>
                        <span>часа</span>
                      </div>
                      <div class="program_item-details__rect">
                        <span>презентация</span>
                        <span>вебинаров</span>
                      </div>
                    </div>

                  </div>
                  <div class="program_item-result">
                    <span class="program_item-info__subtitle">Результат</span>
                    {
                      item.result.map(el => {
                        return (
                          <div>
                            {
                              el?.text ?
                                <div>
                                  {
                                    el.text.map((p) => {
                                      return (
                                        <p class="program_item__text">{p}</p>
                                      )
                                    })
                                  }
                                </div> : null
                            }

                            {
                              el?.list ?
                                <div>
                                  {
                                    el.list.map(list => {
                                      return (
                                        <div>
                                          <p class="text">{list.title}</p>
                                          <ul>
                                            {
                                              list.items.map((li) => {
                                                return (
                                                  <li class="program_item__text">{`- ${li}`}</li>
                                                )
                                              })
                                            }
                                          </ul>
                                        </div>

                                      )
                                    })
                                  }

                                </div> : null
                            }


                          </div>
                        )
                      })
                    }
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}