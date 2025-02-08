import React from "react";
import Button from "../ Button";
import './styles.scss'

class Form extends React.Component{
  render() {
    return (
      <form className="novaTarefa" >
        <div className="inputContainer">
          <label htmlFor="task">ADD NEW STUDY</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What do you want study?"
            required
          />
        </div>
      
        <div className="inputContainer">
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
        <Button/>
      </form>
    )
  }
}

export default Form;