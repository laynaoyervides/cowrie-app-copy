import React from "react"

import PendingTransactions from "./Pending_Transactions"
import CreateTransactions from "./Create_Transactions"

function Exchange () {
    return (
        <div>
            <PendingTransactions />
            <CreateTransactions  />
        </div>
    )
}
export default Exchange