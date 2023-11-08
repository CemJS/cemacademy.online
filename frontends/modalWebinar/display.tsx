import { Cemjsx } from "cemjs-all"
import Navigation from "./navigation"

export const display = function () {
  return (
    <div
      class="modal"
      ref="modal"
      init={this.func.show}
    >
      <div class="modal_body" ref="modalBody">
        <div class="modal_content">
          <button class="modal_button-close" onclick={this.func.close}>X</button>
          <header class="modal_header">
            <h2 class="modal_header-title">{this.Static.title}</h2>
          </header>
          <Navigation />
          <footer class="modal_footer">
            <button
              class="btn btn__green"
              onclick={async () => {
                this.Ref.modal.classList.remove('modal__active');
                setTimeout(() => {
                  this.clearData();
                }, 500)

                this.Fn.initOne({
                  name: "modalOrder",
                  data: {
                    title: "Записаться на бесплатный вебинар"
                  }
                })
              }}
            >
              Записаться
            </button>
          </footer>
        </div>
      </div>
    </div>
  )
}