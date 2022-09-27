import React, {useState, useEffect} from "react"

import MakeArt from "./Make_Art"
import MakeCollections from "./Make_Collections"

function Art () {
    // set Collections in state
    const [collections, setCollections] = useState([]);
    //get a list of Collections
    useEffect (
        () => {
            fetch(`/collections`)
            .then((resp)=> resp.json())
            .then((collections)=>setCollections(collections))
        },[]
    )
// Add a new Collection - Create -
        const addNewCollection = (collection) => {
            setCollections([...collections, collection]);
        }

    return (
        <div>
            <MakeArt />
            <MakeCollections addNewCollection={addNewCollection} collections={collections}/>
        </div>
    )
}
export default Art