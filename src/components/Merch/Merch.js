import MerchSummary from "./MerchSummary";
import AvailableMerch from "./AvailableMerch";
import { Fragment, useState } from "react";

const Merch = () => {
    return(
        <Fragment>
            <MerchSummary/>
            <AvailableMerch/>
        </Fragment>
    ); 
};

export default Merch;