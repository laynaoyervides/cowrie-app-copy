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
            fetch(`/tutorials`)
            .then((resp)=> resp.json())
            .then((tutorials)=>setTutorials(tutorials))
        },[]
    );
//Add a new Tutorial - CREATE -
        const addNewTutorial = (tutorial) => {
            setTutorials([...tutorials, tutorial]);
        }
//Handle the Edit - UPDATE -
        function handleUpdateTutorial(updatedTutorial) 
        {
            const updatedTutorials = tutorials.map((tutorial) =>{
                if (tutorial.id === updatedTutorial.id) {
                    return updatedTutorial;
                }
                else {
                    return tutorial;
                }
            });
            setTutorials(updatedTutorials);
        }
//delete a tutorial - DELETE -
        function deleteTutorial (id) {
            const updatedTutorials = tutorials.filter((tutorial)=>
            tutorial.id !== id);
            setTutorials(updatedTutorials);
        }

    return (
        <div>
            <Typography 
                    variant="h2" 
                    color="black">
                        View Tutorials
                </Typography>
            {
                tutorials.map((tutorial) => (
                    <ViewTutorials 
                        key={tutorial.id} 
                        username={tutorial.username}
                        password={tutorial.password_digest}
                        deleteTutorial={deleteTutorial}
                        onUpdateTutorial={handleUpdateTutorial}
                        tutorials={tutorials}
                        tutorial={tutorial}
                        />
                ))
            }
            <CreateTutorials addNewTutorial={addNewTutorial} tutorials={tutorials}/>

        </div>
    )
}
export default Tutorials