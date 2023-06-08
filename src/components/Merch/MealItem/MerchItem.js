import classes from "./MerchItem.module.css";
import MerchItemForm from "./MerchItemForm";


const MerchItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.merch}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MerchItemForm/>
      </div>
    </li>
  );
};

export default MerchItem;
