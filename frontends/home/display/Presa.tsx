import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import logoBig from '@images/arrow.png'
import logoCem from '@svg/cryptoEmergency.svg'
import counterBg from '@images/counterBg.png'

export default function () {
  return (
    <section class="presa section" ref="mainSection">
      <div class="presa-banner">
        <div class="presa-banner_desc">
          <h1 class="title-main">
            <span>Как сохранить и<br/>приумножить капитал<br/>на криптовалютном рынке. Крипто-Поток 2.0</span>
          </h1>
          <div class="presa_counter">
            <p class="presa_counter-title">ДО ВТОРОГО ПОТОКА ОСТАЛОСЬ</p>
            <div class="presa_counter-cover">
              <div class="presa_counter-wrapper">
                <div class="presa_counter-time">{Static.timer.days}</div>
                <p class="presa_counter-text">Дней</p>
              </div>
              <div class="presa_counter-wrapper">
                <div class="presa_counter-time">{Static.timer.hours}</div>
                <p class="presa_counter-text">Часов</p>
              </div>
              <div class="presa_counter-wrapper">
                <div class="presa_counter-time">{Static.timer.minutes}</div>
                <p class="presa_counter-text">Минут</p>
              </div>
              <div class="presa_counter-wrapper">
                <div class="presa_counter-time">{Static.timer.seconds + 1}</div>
                <p class="presa_counter-text">Секунд</p>
              </div>
            </div>
            <img src={counterBg} alt="Второй поток" class="presa_counter-bg" />
          </div>
          <p class="text">Разработано опытной командой <span class="bold">Crypto Emergency</span>
            {/* <img class="presa_icon" src={logoCem} alt="Crypto Emergency" /></p> */}</p>
        </div>
        <img class="presa-banner__image" src={logoBig} alt="Academy Crypto Emergency" />
      </div>
      <div class="presa-academy">
        <div class="presa-academy_item">
          <h3 class="presa-academy_item-title">Академия Crypto Emergency</h3>
          <p class="text">Образовательное учреждение, созданное компанией Crypto Emergency, ведущим игроком в сфере криптовалют и блокчейн технологий. Наша академия предлагает широкий спектр обучающих программ и курсов, разработанных опытными специалистами в области криптовалют и блокчейн.</p>
        </div>
        <div class="presa-academy_item">
          <h3 class="presa-academy_item-title">Почему стоит выбрать академию Crypto Emergency? </h3>
          <p class="text">Мы предлагаем качественное образование, основанное
            на опыте и экспертизе в сфере криптовалют
            и блокчейн. Наша академия поможет вам получить необходимые знания и навыки для успешной карьеры
            в этой быстро развивающейся области. Присоединяйтесь
            к нам и начните свой путь к успеху в мире криптовалют
            и блокчейн технологий!</p>
        </div>
      </div>
    </section>
  )
}