import React, { useState } from "react"
import {Typography, Box, TextField, Button } from "@mui/material"

function MakeCollections ({addNewCollection}) {
    const [collectionTitle, setCollectionTitle] =useState("")
    const [collectionDescription, setCollectionDescription] =useState("")

    const NewCollection ={
        collectionTitle,
        collectionDescription
    }

    const configObj= {
        method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    body:JSON.stringify(NewCollection),
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/collections`, configObj)
        .then((resp) => resp.json())
        .then((collection) => {addNewCollection(collection)});
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
                        CREATE A COLLECTION
                </Typography>
                <label htmlFor="tutorialtitle">Title of Collection</label>
                    <TextField
                        id="collectiontitle"
                        type="text"
                        placeholder="Title of Collection"
                        name="collectiontitle"
                        value={collectionTitle}
                        onChange ={(e)=> setCollectionTitle(e.target.value)}
                        margin="normal"
                        />
                <label htmlFor="tutorialtopic">Description of Tutorial</label>
                    <TextField 
                        id="collectionDescription"
                        type="text"
                        placeholder="Description of Collection"
                        name="collectionDescription"
                        value={collectionDescription}
                        onChange={(e)=>setCollectionDescription(e.target.value)}
                        margin="normal"
                   />
                   <Button 
                    type="submit" 
                    variant="contained" 
                    color="warning"
                    sx={{ marginTop:3, borderRadius: 3}}
                    >
                        Create Collection
                </Button>
            </Box>
            </form>


        </div>
    )
}
export default MakeCollections