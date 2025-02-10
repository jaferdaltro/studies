import React from "react";
import Button from "../ Button";
import styles from './styles.module.scss'

class Form extends React.Component{
  render() {
    return (
      <form className={styles.newTask} >
        <div className={styles.inputContainer}>
          <label htmlFor="task">ADD NEW STUDY</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What do you want study?"
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="time">TIME</label>
          <input className="inputContainer"
            type="time"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>
          Click!
        </Button>
      </form>
    )
  }
}

export default Form;