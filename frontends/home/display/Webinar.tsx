import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import webinar from '@images/webinar.png'

export default function () {
  return (
    <section
      class="webinar"
      ref="webinar"
      onclick={() => Fn.initOne("modalWebinar", {
        title: "Записаться на бесплатный вебинар",
        text: "Посетить бесплатный вебинар от Academy Crypto Emergency"
      }
      )}
    >
      <img src={webinar} alt="Записывайся на бесплатный вебинар!" />
    </section>
  )
}