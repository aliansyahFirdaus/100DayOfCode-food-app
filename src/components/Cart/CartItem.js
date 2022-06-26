import converterCurrency from '../../helper/currencyHelper';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.meal.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{converterCurrency(props.meal.price)}</span>
          <span className={classes.amount}>x {props.meal.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.meal.onRemove}>−</button>
        <button onClick={props.meal.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
