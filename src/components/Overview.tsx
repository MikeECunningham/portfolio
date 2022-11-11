import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CardHeader from "@mui/material/CardHeader";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import Menu from "./Menu";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";

interface Highlight {
  title: string,
  description: string,
}

const highlights: Highlight[] = [
  {
    title: 'Systems-Level Software',
    description: 'Optimization is a way of life. I can code for fast computation, low latency, stability, and lock-free parallelism.'
  },
  {
    title: 'Full Stack Development',
    description: 'I have experience building full stack applications across a variety of languages, libraries, and frameworks. If you can describe it to me, I can get it done.'
  },
  {
    title: 'Cross-Platform Development',
    description: 'I am able to create applications that work seamlessly across mobile and desktop platforms with ease. Say goodbye to separate codebases for iOS and Android.'
  }
]

interface IconLink {
  link: string,
  icon: JSX.Element
}

const iconLinks: IconLink[] = [
  {
    link: "mailto:mikeecunningham@hotmail.com",
    icon: <EmailIcon style={{fontSize:"50", margin: "20"}}/>
  },
  {
    link: "https://github.com/MikeECunningham",
    icon: <GitHubIcon style={{fontSize:"50", margin: "20"}}/>
  },
  {
    link: "https://www.linkedin.com/in/michael-cunningham-39b563168/",
    icon: <LinkedInIcon style={{fontSize:"50", margin: "20"}}/>
  }
]

const Overview = () => {
  let [overviewState, setOverviewState] = useState(0);

  return (
      <Stack spacing={10} style={{padding:50}}>
        <div>
          <h1 style={{textAlign: "center", width: "100%", fontSize: "xxx-large"}}>Hi, I'm Michael Cunningham</h1>
          <div style={{textAlign: "center", width: "100%"}}>
            I make responsive apps and reliable backends.
          </div>
          <br></br>
        </div>
        <div style={{margin: "auto"}}>
          { iconLinks.map( iconLink => <Link href={iconLink.link}>{iconLink.icon}</Link> ) }
        </div>
        <Divider></Divider>
        <div>
          <Grid container spacing={{ xs: 2, md: 8 }} columns={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
            { highlights.map( highlight =>
              <Grid key={highlight.title} item xs={1} sm={1} md={1}>
                <Card elevation={10} style={{display:"flex", justifyContent:"space-between", flexDirection:"column", textAlign:"center", height:"100%"}}>
                  <CardHeader title={highlight.title} style={{padding:10,}} />
                  <CardContent style={{padding:15,}}>
                    {highlight.description}
                  </CardContent>
                </Card>
              </Grid> ) }

          </Grid>
        </div>
      </Stack>
  );
}

export default Overview