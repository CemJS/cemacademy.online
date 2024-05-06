import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import thanks from "@svg/thanks.svg";

export default function () {
	return (
		<div class="error_wrap thanks">
			<img
				class="thanks__img"
				src={thanks}
				alt=""
			/>
			<p class="thanks__text">Спасибо за покупку</p>
			<a
				href="/"
				onclick={Fn.link}
				class="btn btn__green">
				На главную
			</a>
		</div>
	);
}
