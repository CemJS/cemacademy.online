import { Cemjsx } from "cemjs-all"
import email from '@svg/icons/email.svg'
import phone from '@svg/icons/phone.svg'
import user from '@svg/icons/user.svg'
import telegram from '@svg/icons/telegram.svg'

export default function () {
    return (
        <main class="modal_main modal_form">
            <div class="modal_form-row">
                <div class={[
                    "field",
                    this.Static.form.fullName.value.length ? "field__valid" : null,
                    this.Static.form.fullName.error ? "field__error" : null,
                    this.Static.form.fullName.valid ? "field__success" : null
                ]}>
                    <input
                        type="text"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            this.Static.form.fullName.value = e.target.value;
                            this.Services.functions.formFullName(this.Static.form.fullName)
                            this.fn("checkForm")
                        }} />
                    <div class="field_labelLine field_labelLine__necessarily">
                        <img src={user}></img>
                        <span>{this.Static.form.fullName.placeholder}</span>
                    </div>
                    <p class="field-status">{this.Static.form.fullName.error}</p>
                </div>
                <div class={[
                    "field",
                    this.Static.form.phone.value.length ? "field__valid" : null,
                    this.Static.form.phone.error ? "field__error" : null,
                    this.Static.form.phone.valid ? "field__success" : null
                ]}>
                    <input
                        type="text"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            this.Static.form.phone.value = e.target.value;
                            this.Services.functions.formPhone(this.Static.form.phone)
                            this.fn("checkForm")
                        }} />
                    <div class="field_labelLine">
                        <img src={phone}></img>
                        <span>{this.Static.form.phone.placeholder}</span>
                    </div>
                    <p class="field-status">{this.Static.form.phone.error}</p>
                </div>
            </div>
            <div class="modal_form-row">
                <div class={[
                    "field",
                    "field_necessarily",
                    this.Static.form.email.value.length ? "field__valid" : null,
                    this.Static.form.email.error ? "field__error" : null,
                    this.Static.form.email.valid ? "field__success" : null
                ]}>
                    <input
                        type="email"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            this.Static.form.email.value = e.target.value;
                            this.Services.functions.formEmail(this.Static.form.email)
                            this.fn("checkForm")
                        }} />
                    <div class="field_labelLine field_labelLine__necessarily">
                        <img src={email}></img>
                        <span>{this.Static.form.email.placeholder}</span>
                    </div>
                    <p class="field-status">{this.Static.form.email.error}</p>
                </div>
                <div class={[
                    "field",
                    this.Static.form.telegram.value.length ? "field__valid field__success" : null,
                ]}>
                    <input
                        type="text"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            this.Static.form.telegram.value = e.target.value;
                            this.Services.functions.formTelegram(this.Static.form.telegram)
                            this.fn("checkForm")
                        }} />
                    <div class="field_labelLine">
                        <img src={telegram}></img>
                        <span>{this.Static.form.telegram.placeholder}</span>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="mb_1">{this.Static.form.comment.placeholder}</h3>
                <div class={[
                    "field field-textarea",
                    this.Static.form.comment.error ? "field-textarea__error" : null,
                ]}>
                    <textarea
                        ref="modalComment"
                        rows="3"
                        oninput={(e: any) => {
                            this.Static.form.comment.value = e.target.value;
                            this.Services.functions.formComment(this.Static.form.telegram)
                            this.fn("checkForm")
                        }} ></textarea>
                    <div class="field-textarea_text">
                        <p class="field-textarea_status">{this.Static.form.comment.error}</p>
                        <p class="field-textarea__limit" ref="resultComment">{this.Static.form.comment.value.length} / {this.Static.limitComment}</p>
                    </div>

                </div>
            </div>

        </main>
    )
}