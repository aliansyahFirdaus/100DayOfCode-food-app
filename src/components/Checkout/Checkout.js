import React from "react";
import styles from "./Checkout.module.css";

export default function Checkout(props) {
  return (
    <form>
      <div className={styles.control}>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" placeholder="First Name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" placeholder="Last Name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="First Name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal-code">Postal Code</label>
        <input type="text" id="postal-code" placeholder="Postal Code" />
      </div>

      <div className={styles.actions}>
        <button className={styles["button--cancel"]} onClick={props.onClose}>
          Close
        </button>
        <button
          type="submit"
          className={styles["button--payment"]}
          onClick={(e) => {
            e.preventDefault;
          }}
        >
          Payment
        </button>
      </div>
    </form>
  );
}
