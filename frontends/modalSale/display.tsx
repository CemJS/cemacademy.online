import { Cemjsx } from "cemjs-all"
import Navigation from "./navigation"

export const display = function () {
  return (
    <div class="sale wrapper" ref="sale" init={this.func.show}>

      <Navigation />
      <span class="sale_close" onclick={this.func.close}>x</span>

    </div>

  )
}