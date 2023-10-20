import { Cemjsx } from "cemjs-all"
import Presa from "./Presa"
import Advantages from "./Advantages"
import Experts from "./Experts"
import Program from "./Program"
import Results from "./Results"
import Rates from "./Rates"

export default function () {
  return (
    <main class="wrapper">
      <Presa />
      <Advantages />
      <Experts />
      <Program />
      <Results />
      <Rates />
    </main>
  )
}