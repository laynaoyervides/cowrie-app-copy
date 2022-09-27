import React from "react"
import AboutContainer from "./About_Container"
import { Typography } from "@mui/material"

function About () {
    return (
        <div>
              <Typography variant="secondary">
            Cowrie is an app that teachers can use to teach students about NFTs and the Blockchain.
            </Typography>
            <AboutContainer />
        </div>
    )
}
export default About