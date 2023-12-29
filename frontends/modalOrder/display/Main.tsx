import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
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
                    Static.formModal.fullName.value.length ? "field__valid" : null,
                    Static.formModal.fullName.error ? "field__error" : null,
                    Static.formModal.fullName.valid ? "field__success" : null
                ]}>
                    <input
                        type="text"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            console.log('=target=', e.target.value)
                            Static.formModal.fullName.value = e.target.value;
                            console.log('=formModal=', Static.formModal.fullName.value)
                            front.Services.functions.formFullName(Static.formModal.fullName)
                            Func.checkForm()
                        }} />
                    <div class="field_labelLine field_labelLine__necessarily">
                        <img src={user}></img>
                        <span>{Static.formModal.fullName.placeholder}</span>
                    </div>
                    <p class="field-status">{Static.formModal.fullName.error}</p>
                </div>
                <div class={[
                    "field",
                    Static.formModal.phone.value.length ? "field__valid" : null,
                    Static.formModal.phone.error ? "field__error" : null,
                    Static.formModal.phone.valid ? "field__success" : null
                ]}>
                    <input
                        type="text"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            Static.formModal.phone.value = e.target.value;
                            front.Services.functions.formPhone(Static.formModal.phone)
                            Func.checkForm()
                        }} />
                    <div class="field_labelLine">
                        <img src={phone}></img>
                        <span>{Static.formModal.phone.placeholder}</span>
                    </div>
                    <p class="field-status">{Static.formModal.phone.error}</p>
                </div>
            </div>
            <div class="modal_form-row">
                <div class={[
                    "field",
                    "field_necessarily",
                    Static.formModal.email.value.length ? "field__valid" : null,
                    Static.formModal.email.error ? "field__error" : null,
                    Static.formModal.email.valid ? "field__success" : null
                ]}>
                    <input
                        type="email"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            Static.formModal.email.value = e.target.value;
                            front.Services.functions.formEmail(Static.formModal.email)
                            Func.checkForm()
                        }} />
                    <div class="field_labelLine field_labelLine__necessarily">
                        <img src={email}></img>
                        <span>{Static.formModal.email.placeholder}</span>
                    </div>
                    <p class="field-status">{Static.formModal.email.error}</p>
                </div>
                <div class={[
                    "field",
                    Static.formModal.telegram.value.length ? "field__valid field__success" : null,
                ]}>
                    <input
                        type="text"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            Static.formModal.telegram.value = e.target.value;
                            front.Services.functions.formTelegram(Static.formModal.telegram)
                            Func.checkForm()
                        }} />
                    <div class="field_labelLine">
                        <img src={telegram}></img>
                        <span>{Static.formModal.telegram.placeholder}</span>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="mb_1">{Static.formModal.comment.placeholder}</h3>
                <div class={[
                    "field field-textarea",
                    Static.formModal.comment.error ? "field-textarea__error" : null,
                ]}>
                    <textarea
                        ref="modalComment"
                        rows="3"
                        oninput={(e: any) => {
                            Static.formModal.comment.value = e.target.value;
                            front.Services.functions.formComment(Static.formModal.comment)
                            Func.checkForm()
                        }} ></textarea>
                    <div class="field-textarea__text">
                        <p class="field-textarea_status">{Static.formModal.comment.error}</p>
                        <p class="field-textarea__limit" ref="resultComment">{Static.formModal.comment.value.length} / {Static.limitComment}</p>
                    </div>

                </div>
            </div>

        </main>
    )
}