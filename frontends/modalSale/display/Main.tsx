import { Cemjsx } from "cemjs-all"

export default function () {
    return (
        <div
            class="sale_content"
            onclick={() => this.Fn.initOne({
                name: "modalOrder",
                data: { title: `Записаться на курс! Скидка ${this.Variable.bonusProc}%` }
            })}
        >
            <p class="sale_text">Успей приобрести курс со скидкой<span class="sale_text__accent">{this.Variable.bonusProc}%</span></p>
            <button class="btn btn__white">
                Купить!
            </button>
        </div>
    )
}