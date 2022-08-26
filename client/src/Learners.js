import ListLearners from "./List_Learners"
import CreateLearners from "./Create_Learners"
import ViewProgress from "./ViewProgress"
import ViewUserTransactions from "./View_User_Transactions"

function Learners () {
    return (
        <div>
            <ListLearners />
            <CreateLearners/>
            <ViewProgress />
            <ViewUserTransactions />
            
        </div>
    )
}
export default Learners