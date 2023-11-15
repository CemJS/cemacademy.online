import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}


front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('sale__active');
    }, 100);
}

front.func.close = function () {
    Ref.sale.classList.remove('sale__active');
    setTimeout(() => {
        Fn.clearData()
    }, 500)
}
front.loader = () => {
    return
}

front.display = () => {
    return (
        <Navigation />
    )
}

export { front }