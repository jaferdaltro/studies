import React from "react";
import styles from  "./styles.module.scss"
class Button extends React.Component<{children: React.ReactNode}>{
  render() {
    return (
      <button className={styles.button}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;