import React from "react";
import styles from "./styles.module.scss";

class Button extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
}> {
  render() {
    const { type } = this.props;
    return (
      <button type={type} className={styles.button}>
      {this.props.children}
    </button>
  );
  }
}

export default Button;
