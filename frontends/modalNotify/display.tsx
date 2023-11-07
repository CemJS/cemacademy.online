import { Cemjsx } from "cemjs-all"
import Navigation from "./navigation"

export const display = function () {
  return (
    <div
      class="notice"
      ref="notice"
      init={this.func.show}
    >
      <Navigation />
      <span class="notice_close" onclick={this.func.close}>x</span>
    </div>

  )
}