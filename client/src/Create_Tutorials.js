import { Button, Box, Typography, TextField } from "@mui/material";
import React, {useState} from "react"

//make sure to pass a prop 
function CreateTutorials ({addNewTutorial }) {
   const [tutorialTitle, setTutorialTitle]=useState("");
   const [tutorialDescription, setTutorialDescription]=useState("");
   const [tutorialTopic, setTutorialTopic]=useState("");

   const newTutorial = {
        tutorialTitle,
        tutorialTopic,
        tutorialDescription,
        // user_id: user, make sure the pass as a prop
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
           
            <form onSubmit={handleSubmit}>
                <Box display="flex"
                    color="secondary"
                    flexDirection={'column'}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={40}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{":hover": {
                        boxShadow:'10px 10px 20px #ccc'
                    }, maxwidth: 400}}
                >
                <Typography 
                    variant="h2" 
                    padding={3}
                    textAlign='center'>
                        CREATE A TUTORIAL
                </Typography>
                <label htmlFor="tutorialtitle">Title of Tutorial</label>
                    <TextField
                        id="tutorialtitle"
                        type="text"
                        placeholder="Title of Tutorial"
                        name="tutorialtitle"
                        value={tutorialTitle}
                        onChange ={(e)=> setTutorialTitle(e.target.value)}
                        margin="normal"
                        />
                <label htmlFor="tutorialtopic">Topic of Tutorial</label>
                    <TextField 
                        id="tutorialTopic"
                        type="text"
                        placeholder="Topic of Tutorial"
                        name="tutorialTopic"
                        value={tutorialTopic}
                        onChange={(e)=>setTutorialTopic(e.target.value)}
                        margin="normal"
                   />
                <label htmlFor="tutorialdescription">Description of Tutorial</label>
                    <TextField 
                        id="tutorialDescription"  
                        type="text"
                        placeholder="Description of Tutorial"
                        name="tutorialDescription"  
                        value={tutorialDescription}
                        onChange={(e)=>setTutorialDescription(e.target.value)}
                        margin="normal"
                    />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="warning"
                    sx={{ marginTop:3, borderRadius: 3}}
                    >
                        Create tutorial
                </Button>
            </Box>
            </form>
        </div>
    )
}
export default CreateTutorials;