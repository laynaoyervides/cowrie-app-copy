import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react"
import CreateTutorials from "./Create_Tutorials"
import ViewTutorials from "./View_Tutorials"

function Tutorials () {
   //set Tutorials in state
    const [tutorials, setTutorials] = useState([]);

    //get a list of tutorials
    useEffect (
        () => {
            fetch(`http://localhost:3000/tutorials`)
            .then((resp)=> resp.json())
            .then((tutorial)=>setTutorials(tutorial))
        }
    )
    return (
        <div>
           <Typography variant="h2" color="black">View Tutorials</Typography>
            
            <ViewTutorials tutorials={tutorials} />
            <CreateTutorials />

        </div>
    )
}
export default Tutorials