import React from "react"

import ViewBalance from "./View_Balance"
import Exchange from "./Exchange"
import ViewPurchases from "./View_Purchases"

function Wallet () {
    return (
        <div>
            <ViewBalance />
            <Exchange />
            <ViewPurchases />

        </div>
    )
}
export default Wallet