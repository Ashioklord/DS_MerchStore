import { useContext } from "react";
import classes from "./MerchItem.module.css";
import MerchItemForm from "./MerchItemForm";
import CartContext from "../../store/cart-context";


const MerchItem = (props) => {
    const cartCtx = useContext(CartContext);


    const price = `$${props.price.toFixed(2)}`;
    //console.log("price in merchitem " + price);


    const addToCartHandler = (amount) => {  
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      });
    };

  return (
    <li className={classes.merch}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MerchItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MerchItem;
