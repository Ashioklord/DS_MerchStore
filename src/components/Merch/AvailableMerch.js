import classes from "./AvailableMerch.module.css";
import Card from "../UI/Card";
import MerchItem from "./MealItem/MerchItem";

const DUMMY_MERCH = [
  {
    id: "m1",
    name: "Tanjiro plushie",
    description: "A plushie of Tanjiro Kamado in his classic green haori",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Nezuko plushie",
    description: "A plushie of Nezuko Kamado in her baby form",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Zenitsu plushie",
    description: "A plushie of a crying Agatsuma Zenitsu",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Innosuke plushie",
    description: "A plushie of classic Hashibara Innosuke",
    price: 18.99,
  },
];

const AvailableMerch = () => {
  const merchlist = DUMMY_MERCH.map((Item) => (
    <MerchItem
      key={Item.id}
      id={Item.id}
      name={Item.name}
      description={Item.description}
      price={Item.price}
    />
  ));
  return (
    <section className={classes.merch}>
      <Card>
        <ul>{merchlist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMerch;
