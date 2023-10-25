import { Cemjsx } from "cemjs-all"
import Presa from "./Presa"
import Advantages from "./Advantages"
import Experts from "./Experts"
import Program from "./Program"
import Results from "./Results"
import Rates from "./Rates"
import ScrollTop from "./ScrollTop"

export default function () {
  return (
    <main class="wrapper">
      <Presa />
      <Advantages />
      <Experts />
      <Program />
      <Results />
      <Rates />
      <ScrollTop />
    </main>
  )
}