import { Cemjsx } from "cemjs-all"
import Navigation from "./navigation"
import success from '@svg/icons/success.svg'

export const display = function () {
  return (
    <div
      class="modal"
      ref="modal"
      onclick={(e: any) => {
        if (e.target === this.Ref.modalBody) {
          this.fn("close")
        }
      }}
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
              onclick={() => {
                this.Ref.modal.classList.remove('modal__active');
                setTimeout(() => {
                  this.clearData();
                }, 500)

                this.Fn.initOne({
                  name: "modalNotify",
                  data: {
                    icon: success,
                    title: "Поздравляем!",
                    text: "Скоро с Вами свяжется наш менеджер!"
                  }
                })
              }}
            >
              Отправить
            </button>
          </footer>
        </div>
      </div>
    </div>
  )
}