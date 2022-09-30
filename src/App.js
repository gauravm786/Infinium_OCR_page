// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
// import './App.css';

// import {Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material"
// import CircleIcon from '@mui/icons-material/Circle';
// import OCR from "./OCR.png"

import Secondway from "./Secondway";



function App() {
  return (
    <>
    {/* <Paper elevation={3} style={{height:"84%",width:"85.6%",marginLeft:"6.5%",marginTop:"4%",position:"absolute"}} className="root" xs={12} sm={12} md={12} lg={12} xl={12}> 

    <Grid container sx={{display:"grid",gridTemplateColumns:"49.9% 0.1% 50%"}} className="maingrid" >
      
      <Grid item container className="grid1"> 

        <Grid item sx={{height:"17%",width:"7%",marginTop:"3.5%",marginLeft:"41%",position:"absolute"}} 
        >
          <img src={OCR} height="100%" width="100%" alt="OCR" />
        </Grid>

        <Grid item sx={{height:"18%",width:"20%",textAlign:"end",marginTop:"13%",marginLeft:"27.3%",position:"absolute"}}>
          <Typography  variant="h5" >
            Optical Character Recognition with Nanonets
            </Typography>
        </Grid>
      </Grid>

      <Grid item container className="grid2" >
        <Grid item sx={{height:"90%",width:"0.1%",backgroundColor:"#85C1E9",marginTop:"2%",position:"absolute"}}></Grid>
      </Grid>

      <Grid item container className="grid3" sx={{color:"#000080",height:"50%",position:"absolute",width:"50%",
      height:"100%",marginLeft:"50%"}} >

      <Grid item sx={{marginTop:"7%",marginLeft:"3%",height:"12%",position:"absolute"}}>
      <Typography variant='h7'>
          We proposed an optical character Recognition(OCR) based Passport Data
          Recognition system to completely automate their process and remove any
          humnan intervention.
      </Typography>
      </Grid> 

      <Grid item sx={{marginLeft:"3%",marginTop:"22%",height:"5%",position:"absolute"}} >
        <Typography variant='h7'>
          We Provided a unique solution that :
        </Typography>
      </Grid>

      <Grid item container sx={{marginLeft:"3%",marginTop:"28%",height:"32%",position:"absolute"}}>
        <List sx={{height:"91%",position:"absolute"}}>

          <Grid item sx={{display:"flex",marginLeft:"2%"}}>
          <ListItemIcon><CircleIcon sx={{fontSize:"0.25rem",color:"black"}}></CircleIcon></ListItemIcon>
          <ListItemText sx={{marginTop:"-1.65%",marginLeft:"-7.5%"}}
          primary={<Typography variant="h7">Can leverage the existing data to provide a quick ready to use solution</Typography>}
          ></ListItemText>
          </Grid>

          <Grid item sx={{display:"flex",marginLeft:"2%",marginTop:"3%"}}>
          <ListItemIcon><CircleIcon sx={{fontSize:"0.25rem",color:"black"}}></CircleIcon></ListItemIcon>
          <ListItemText sx={{marginTop:"-1.65%",marginLeft:"-7.5%"}}
          primary={<Typography variant="h7">Can identify the orientation of the image and automatically correct it</Typography>}
          ></ListItemText>
          </Grid>

          <Grid item sx={{display:"flex",marginLeft:"2%",marginTop:"3%"}}>
          <ListItemIcon><CircleIcon sx={{fontSize:"0.25rem",color:"black"}}></CircleIcon></ListItemIcon>
          <ListItemText sx={{marginTop:"-1.65%",marginLeft:"-7.5%"}}
          primary={<Typography variant="h7">Can identify the page of interest from numerous passport pages, and then capture information only from the area of interest</Typography>}
          ></ListItemText>
          </Grid>
          
          <Grid item sx={{display:"flex",marginLeft:"2%",marginTop:"3%"}}>
          <ListItemIcon><CircleIcon sx={{fontSize:"0.25rem",color:"black"}}></CircleIcon></ListItemIcon>
          <ListItemText sx={{marginTop:"-1.65%",marginLeft:"-7.5%"}}
          primary={<Typography variant="h7">Can be integrated seamlessly with their existing database</Typography>}
          ></ListItemText>
          </Grid>

          <Grid item sx={{display:"flex",marginLeft:"2%",marginTop:"3%"}}>
          <ListItemIcon><CircleIcon sx={{fontSize:"0.25rem",color:"black"}}></CircleIcon></ListItemIcon>
          <ListItemText sx={{marginTop:"-1.65%",marginLeft:"-7.5%"}}
          primary={<Typography variant="h7">Can be deployed on premise with docker,flexible to work on local private network and highly secure</Typography>}
          ></ListItemText>

          </Grid>
        </List>
      </Grid>

        <Grid item sx={{marginLeft:"3%",marginTop:"66%",height:"17%",position:"relative"}}>
        <Typography variant='h7'>
          The holistic solution allowed the user to upload a PDF / image file, and a combination of multiple maching learning models were deployed in real time to tackle the challenges in the large variety of data.No humnan effort was required and machine learning was applied for automation. 
        </Typography>
        </Grid>

      </Grid>

    </Grid>

    </Paper> */}




<Secondway />

    </>
  );
}

export default App;
