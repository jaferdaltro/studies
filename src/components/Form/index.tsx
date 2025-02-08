import React from "react";
import Button from "../ Button";

class Form extends React.Component{
  render() {
    return (
      <form >
        <div>
          <label htmlFor="task">Add new study</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What do you want study?"
            required
          />
        </div>
      
        <div>
          <label htmlFor="time"></label>
          <input
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