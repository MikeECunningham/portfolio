import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { useState } from "react";
import Menu from "./Menu";

interface Skill {
  title: string,
  description: string[]
}

const skills: Skill[] = [
  {
    title: "Typescript",
    description: [
      "Can create responsive single page applications in Angular and React.",
      "Can create node.js programs with express.js for web API's."
    ]
  },
  {
    title: "Rust",
    description: [
      "Can create reliable cross-platform applications that are highly efficient and memory safe.",
      "Can create procedural macros to perform complex metaprogramming, simplifying the development process."
    ]
  },
  {
    title: "Javascript",
    description: [
      "Can create node.js programs with express.js for web API's.",
      "Can maintain older SPAs made with Angular.js, React, or other pure JS libraries.",
    ]
  },
  // {
  //   title: "",
  //   description: [
  //     "",
  //   ]
  // }
]

const Skills = () => {
  let [skillsState, setSkillsState] = useState(0);

  return (
    <Stack spacing={10} style={{padding:50}}>
      <h1 style={{textAlign: "center", fontSize: "xxx-large",}}>My Skills</h1>
      <Divider></Divider>
      <div>
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
          { skills.map( skill =>
            <Grid key={skill.title} item xs={1} sm={1} md={1}>
              <Card elevation={10} style={{display:"flex", flexDirection:"column", textAlign:"center", height:"100%"}}>
                <CardHeader title={skill.title} />
                <CardContent>
                  <List sx = {{ listStyleType: 'disc', pl: 5, }} >
                    { skill.description.map( taskpoint => <ListItem sx = {{display: "list-item"}} style={{padding:0,}}><ListItemText primary={taskpoint} /></ListItem> ) }
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ) }
        </Grid>
      </div>
    </Stack>
  );
}

export default Skills