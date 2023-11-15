import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import Presa from "./Presa"
import Advantages from "./Advantages"
import Experts from "./Experts"
import Program from "./Program"
import Results from "./Results"
import Rates from "./Rates"
import ScrollTop from "./ScrollTop"
import Question from "./Question"
import Webinar from "./Webinar"

export default function () {
  return (
    <main class="wrapper">
      <Presa />
      <Webinar />
      <Advantages />
      <Experts />
      <Program />
      <Results />
      <Rates />
      <ScrollTop />
      <Question />
    </main>
  )
}