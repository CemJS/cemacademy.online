import { Cemjsx } from "cemjs-all"
import tap from '@svg/icons/tap.svg'

export default function () {
    return (
        <div class="sale_content">
            <p class="sale_text">Успей приобрести курс со скидкой <span class="sale_text__accent">15%</span></p>
            <button
                class="btn btn__white"
                onclick={() => this.Fn.initOne({
                    name: "modalOrder",
                    data: { title: "Записаться на курс" }
                })}
            >

                Купить прямо сейчас
                <img src={tap} alt="Успей приобрести курс от Academy Crypto Emergency!" />
            </button>

        </div>
    )
}