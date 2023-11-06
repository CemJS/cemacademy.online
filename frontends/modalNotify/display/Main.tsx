import { Cemjsx } from "cemjs-all"


export default function () {
    return (
        <div class="notice_content">
            <div class="notice_icon">
                <img src={this.Static.icon} alt="Успей записаться на курс от Academy Crypto Emergency!" />
            </div>
            <div class="notice_message">
                <span>{this.Static.title}</span>
                <span>{this.Static.text}</span>
            </div>
        </div>
    )
}