import Button from "../ Button";
import style from "./Chronometer.module.scss"
import Clock from "./Clock"

export default function Chronometer() {
  return (
    <div className={style.chronometer}>
      <p className={style.title}> Choose one card and start the chronometer </p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>
        Start
      </Button>
    </div>
  )
}