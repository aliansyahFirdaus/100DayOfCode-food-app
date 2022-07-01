import React, { useRef, useState } from "react";
import styles from "./Checkout.module.css";

//fungtion helper validation
const isEmpty = (str) => str.trim() === "";
const isNotEmail = (mail) =>
  [...mail].some((char) => char !== "@") &&
  [...mail].some((char) => char !== ".");
const isPostalCode = (code) => code.trim().length === 5;

export default function Checkout(props) {
  const [formValidity, setFormValidity] = useState({
    firstName: true,
    lastName: true,
    email: true,
    postalCode: true,
  });

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const postalCodeRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const firstNameVal = firstNameRef.current.value;
    const lastNameVal = lastNameRef.current.value;
    const emailVal = emailRef.current.value;
    const postalCodeVal = postalCodeRef.current.value;

    const firstNameValid = !isEmpty(firstNameVal);
    const lastNameValid = !isEmpty(lastNameVal);
    const emailValid = isNotEmail(emailVal);
    const postalCodeValid = isPostalCode(postalCodeVal);

    setFormValidity({
      firstName: firstNameValid,
      lastName: lastNameValid,
      email: emailValid,
      postalCode: postalCodeValid,
    });

    const formIsValid =
      firstNameValid && lastNameValid && emailValid && postalCodeValid;

    if (!formIsValid) return;

    props.onSubmitOrder({
        fistName: firstNameVal,
        lastName: lastNameVal,
        email: emailVal,
        postalCode: postalCodeVal,
        meals: props.coData
    })
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.control}>
        <label htmlFor="first-name">First Name</label>
        <input
          ref={firstNameRef}
          type="text"
          id="first-name"
          placeholder="First Name"
        />
        {!formValidity.firstName && <p>Firstname must not empty</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="last-name">Last Name</label>
        <input
          ref={lastNameRef}
          type="text"
          id="last-name"
          placeholder="Last Name"
        />
        {!formValidity.lastName && <p>Lastname must not empty</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="text" id="email" placeholder="First Name" />
        {!formValidity.email && <p>Email format must valid and not empty</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="postal-code">Postal Code</label>
        <input
          ref={postalCodeRef}
          type="text"
          id="postal-code"
          placeholder="Postal Code"
        />
        {!formValidity.postalCode && <p>Postal Code must be 5 character</p>}
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
