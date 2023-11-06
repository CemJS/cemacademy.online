import { Cemjsx } from "cemjs-all"
import question from '@svg/icons/question.svg'

export default function () {
  return (
    <div
      class="question"
      ref="question"
      onclick={() => this.Fn.initOne({
        name: "modalOrder",
        data: { title: "Задавайте свои вопросы Academy Crypto Emergency" }
      })}
    >
      <img src={question} alt="Academy Crypto Emergency" />
    </div>
  )
}