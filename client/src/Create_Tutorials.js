import { Button } from "@mui/material";
import React from "react"


function CreateTutorials ({tutorials, addNewTutorial }) {
   const [tutorialTitle, setTutorialTitle]=useState("");
   const [tutorialDescription, setTutorialDescription]=useState("");
   const [tutorialTopic, setTutorialTopic]=useState("");

   const newTutorial = {
        tutorialTitle,
        tutorialTopic,
        tutorialDescription,
        user_id: user,
   }
   
   const configObj ={
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    body:JSON.stringify(newTutorial),
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/tutorials`, configObj)
        .then((resp) => resp.json())
        .then((tutorial) => {addNewTutorial(tutorial)});
    };

   
    return (
        <div>
            <br></br>
            <br/>

            <h1>Create a Tutorial</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tutorialtitle">Tutorial Title</label>
                    <input
                        id="tutorialtitle"
                        type="text"
                        placeholder="Title of Tutorial"
                        name="tutorialtitle"
                        value={tutorialTitle}
                        onChange ={(e)=> setTutorialTitle(e.target.value)}
                        />
                <label htmlFor="tutorialtopic">Tutorial Topic</label>
                    <input 
                        id="tutorialTopic"
                        type="text"
                        placeholder="Topic of Tutorial"
                        name="tutorialTopic"
                        value={tutorialTopic}
                        onChange={(e)=>setTutorialTopic(e.target.value)}
                    />
                <label htmlFor="tutorialdescription">Tutorial Description</label>
                    <input 
                        id="tutorialDescription"  
                        type="text"
                        placeholder="Description of Tutorial"
                        name="tutorialDescription"  
                        value={tutorialDescription}
                        onChange={(e)=>setTutorialDescription(e.target.value)}
                    />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="warning">
                        Create tutorial
                </Button>
            </form>
        </div>
    )
}
export default CreateTutorials;