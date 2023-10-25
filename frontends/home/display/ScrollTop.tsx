import { Cemjsx } from "cemjs-all"
import scrollTop from '@svg/scrollTop.svg'

export default function () {
  return (
    <div
      class="scrollTop"
      ref="scrollTop"
      onclick={() => {
        window.scrollTo({
          top: this.Ref.mainSection.offsetTop,
          behavior: "smooth"
        })
      }}
    >
      <img src={scrollTop} alt="Academy Crypto Emergency" />
    </div>
  )
}