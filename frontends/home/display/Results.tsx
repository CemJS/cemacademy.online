import { Cemjsx } from "cemjs-all"
import done from '@svg/done.svg'

export default function () {
  return (
    <section class="section results" id="results">
      <h2 class="results_title">Результаты</h2>
      <div class="results_info">
        <div class="results_info-text">
          {
            this.Static.skillsResult.map(item => {
              return (
                <p class="text">{item}</p>
              )
            })
          }
        </div>
        <div class="results_info-img">
          <img src={done} alt="Результаты прохождения курса Crypto Emergency Academy" />
        </div>
      </div>
      <div class="results_calls">
        {
          this.Static.callsResult.map((item) => {
            return (
              <p class="text">{item}</p>
            )
          })
        }
      </div>
      <a
        class="btn btn__white"
        onclick={() => this.Fn.initOne({
          name: "modalOrder",
          data: { title: "Принять участие в Academy Crypto Emergency!" }
        })}
      >Принять участие</a>
    </section>
  )
}