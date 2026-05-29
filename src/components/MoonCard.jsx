import moon from '../assets/moon.png'

export default function MoonCard() {
  return (
    <div className="moon-card">

      <img
        src={moon}
        alt="moon"
        className="moon-image"
      />

      <h1 className="moon-title">
        YOUR NAME
      </h1>

    </div>
  )
}