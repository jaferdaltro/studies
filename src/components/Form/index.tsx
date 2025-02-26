import React from "react";
import Button from "../ Button";
import styles from "./styles.module.scss";
import { ITask } from "../../types/task";

class Form extends React.Component<{setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}> {
  state = {
    task: "",
    time: "00:00",
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('state: ', this.state);
    this.props.setTasks(oldTasks => [...oldTasks, {...this.state}])
    this.state = {
      task: '',
      time: "00:00"
    }
  }

  render() {
    return (
      <form className={styles.newTask} onSubmit={ this.addTask.bind(this)}>
        <div className={styles.inputContainer}>
          <label htmlFor="task">ADD NEW STUDY</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What do you want study?"
            value={this.state.task}
            onChange={(event) =>
              this.setState({ ...this.state, task: event.target.value })
            }
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="time">TIME</label>
          <input
            className="inputContainer"
            type="time"
            name="time"
            id="time"
            value={this.state.time}
            onChange={(event) => {
              this.setState({ ...this.state, time: event.target.value });
            }}
            min="00:00:00"
            max="01:30:00"
            pattern="\d{2}:\d{2}"
            required
          />
        </div>
        <Button>Click!</Button>
      </form>
    );
  }
}

export default Form;
