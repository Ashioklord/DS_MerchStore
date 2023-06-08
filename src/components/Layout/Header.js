import { Fragment } from "react";
import bannerImage from '../../assets/banner.jpg'
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Kimetsu No Yaiba Merch Store</h1>
      <HeaderCartButton clickToShowCart={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={bannerImage} alt='Description of the banner image'/>
      </div>
    </Fragment>
  );
};

export default Header;