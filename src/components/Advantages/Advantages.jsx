import AdvantageCard from '../AdvantageCard/AdvantageCard'
import './Advantages.css'

function Advantages() {
  return (
    <section className="container">
      <div className="advantages">
        <AdvantageCard />
        <AdvantageCard />
        <AdvantageCard />
      </div>
    </section>
  )
}

export default Advantages
