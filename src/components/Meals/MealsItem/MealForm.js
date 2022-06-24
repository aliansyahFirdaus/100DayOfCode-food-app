import React from "react";
import Input from "../../UI/Input";

import styles from "./MealForm.module.css";

export default function MealForm(props) {
  return (
    <form className={styles.form}>
      <Input
        label="Mount"
        input={{
          id: "mount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: "3",
        }}
      />
      <button>+ add</button>
    </form>
  );
}
