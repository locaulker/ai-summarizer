import { logo } from "../assets/"
const Hero = () => {
  return (
    <div>
      <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
          <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

          <button
            type="button"
            onClick={() => window.open("https://github.com/locaulker")}
            className="black_btn"
          >
            GitHub
          </button>
        </nav>
      </header>
    </div>
  )
}
export default Hero
