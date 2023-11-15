import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import experts from 'json/experts.json'

export default function () {
  return (
    <section class="section" id="experts">
      <h2 class="title-section">Эксперты</h2>
      <div class="experts">
        {
          experts.map(item => {
            return (
              <div class="experts_item" style={`background-image: url(${item.img})`}>
                <div class="experts_item__user">
                  <img src={item.img} alt={item.name} />
                </div>
                <h2 class="experts_item__name">{item.name}</h2>
                <p class="experts_item__skills">{item.skills}</p>
                <p class="experts_item__desc">{item.desc}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}