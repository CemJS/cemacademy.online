import { Cemjsx } from "cemjs-all"
import tap from '@svg/icons/tap.svg'

export default function () {
    return (
        <div
            class="sale_content"
            onclick={() => this.Fn.initOne({
                name: "modalOrder",
                data: { title: `Записаться на курс! Скидка ${this.Variable.bonusProc}%` }
            })}
        >
            <p class="sale_text">Приобрети курс со скидкой <span class="sale_text__accent">{this.Variable.bonusProc}%</span></p>
            <button class="btn btn__white">

                Купить сейчас
                <img src={tap} alt="Успей приобрести курс от Academy Crypto Emergency!" />
            </button>

        </div>
    )
}