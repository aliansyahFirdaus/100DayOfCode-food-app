import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import styles from "./MealForm.module.css";

export default function MealForm(props) {
  const [valid, setValid] = useState(true);
  const amountTotal = useRef();

  const submitAddHandler = (event) => {
    event.preventDefault();
    const currentAmount = amountTotal.current.value;
    const amountNumber = +currentAmount;

    if (
      currentAmount.length <= 0 ||
      amountNumber < 1 ||
      amountNumber > 5 ||
      isNaN(currentAmount)
    ) {
      setValid(false);
      return;
    }
    props.addItems(amountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitAddHandler}>
      <Input
        label="Mount"
        ref={amountTotal}
        input={{
          id: props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: "1",
        }}
      />
      <button type="submit">+ add</button>
      {!valid && <p>Input is Invalid!</p>}
    </form>
  );
}
