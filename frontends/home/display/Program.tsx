import { Cemjsx } from "cemjs-all"
import program from 'json/program.json'

export default function () {
  return (
    <section class="section" id="program">
      <h2 class="title-section">Программа</h2>
      <div class="program">
        {
          program.map(item => {
            return (
              <div class="program_item">
                <div class="program_item__title">
                  {item.title ? <h3>{item?.title}</h3> : null}
                </div>

                <div class="program_item-info">
                  <h4 class="program_item-info__subtitle">Тема: {item.thema}</h4>
                  <p class="text">Эксперт <span class="bold">{item.expert}</span></p>
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
                              <div
                                class={[el.list.length >= 2 ? "program_item-list" : null]}
                              >
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
                <div class="program-circle program-circle__orange"></div>
                <div class="program-circle program-circle__green"></div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}