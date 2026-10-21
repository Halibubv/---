import leafIcon from '../../assets/icons/leaf.svg'
import './AdvantageCard.css'

function AdvantageCard() {
  return (
    <div className="advantage">
      <img src={leafIcon} alt="" width="26" height="26" />
      <div className="advantage__info">
        <h3 className="advantage__title">Ближе к природе</h3>
        <p className="advantage__text">Натуральные материалы и спокойные цвета</p>
      </div>
    </div>
  )
}

export default AdvantageCard
