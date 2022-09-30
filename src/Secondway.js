import React from 'react'
import {Box, Container, Grid, List, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material"
import CircleIcon from '@mui/icons-material/Circle';
import OCR from "./OCR.png"  

const Secondway = () => {
  return (
    <>
      <Paper elevation={0} 
      sx={{height:"100%",minHeight:"84vh",width:"85.6%",marginLeft:"6.5%",marginTop:"4%"}}
      xs={12} sm={12} md={12} lg={12} xl={12}>  
  
      {/* <Paper elevation={3} 
      sx={{height:"100%",width:"100%"}}
      xs={12} sm={12} md={12} lg={12} xl={12}>   */}

      
      <Grid container  className='main' direction="row" > 

      <Grid  item className='left' 
      sx={{height:"100%",minHeight:"10vh",display:"grid",gridTemplateRows:"25% 72%",gridGap:"0.5rem"}}  
      xs={12} sm={12} md={6} lg={6} xl={6} order={{xs:1,sm:1}}>

        <Grid item   
        // border="1px solid black"
        // marginTop="7%" 
        marginTop={{xs:"2%",sm:"6%",md:"7%",lg:"7%",xl:"7%"}}
        height="6rem" 
        width="100%"  
        xs={12} sm={12} md={12} lg={12} xl={12}>

        {/* <Box sx={{height:"92%",width:"13.6%",marginLeft:"88%"}} > */}
        <Box 
        // sx={{height:"92%",width:"13.6%",marginLeft:"88%"}} 

        height={{lg:"92%",md:"4rem",xs:"5rem",sm:"8rem",xl:"92%"}}
        width={{lg:"15%",md:"18%",xs:"25%",sm:"25%",xl:"15%"}}
        margin={{lg:"0% 81%",md:"0% 79.6%",xs:"0% 38%",xl:"0% 81%"}}
        >
        <img src={OCR} alt="OCR" height="100%" width="100%" ></img>
        </Box>  

        </Grid>

        <Grid item
        height={{lg:"64%",md:"30%"}}
         sx={{marginLeft:"42.6%",width:"0.01%",backgroundColor:"#85C1E9",marginTop:"1.8%",position:"absolute",display:{xs:"none",sm:"none",md:"block"}}}
         xs={12} sm={12} md={12} lg={12} xl={12}>
        </Grid>

        <Grid item 
        marginTop={{lg:"10%",md:"1%",xs:"8%",xl:"10%"}} 
        // border="1px solid black" 
        height={{lg:"16vh",xl:"16vh",md:"16vh",sm:"16vh",xs:"13vh"}}
        // xs={12} sm={12} md={12} lg={12} xl={12} 
        // border="1px solid black"
        // justifyContent="center"
        > 

        <Typography   
        // border="1px solid black" 
        margin={{xs:"auto auto",lg:"0% 47.3%",md:"0% 47.4%",xl:"0% 47.3%"}} 
        textAlign={{xl:"end",lg:"end",md:"end",sm:"center",xs:"center"}}
        sx={{width:"48%",marginLeft:"49%",
        fontSize:{lg:"24px",md:"20px",sm:"30px",xs:"18px",xl:"24px"}}}
        lineHeight={{xs:"20px",sm:"30px"}}>
            Optical Character Recognition with Nanonets
        </Typography>

        </Grid> 
      </Grid>

      <Grid container item className='right' color="#000080"

      sx={{height:"100%",minHeight:"84vh"}}  
       xs={12} sm={12} md={6} lg={6} xl={6} order={{xs:2,sm:2}} >

        <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}   marginRight="4%" > 

        <Box  marginLeft="3%" 
        marginTop={{lg:"8.5%",md:"8.5%",sm:"-6%",xs:"-16%",xl:"8.5%"}}>
        <Typography 
        lineHeight={{lg:"18px",md:"13.6px"}} 
        fontSize={{lg:"16px",md:"12px",sm:"18px",xs:"13.6px",xl:"16px"}}
        // sx={{wordWrap:"break-word",overflowWrap:"break-word",wordBreak:"break-word"}}
        >  
          We proposed an optical character Recognition(OCR) based Passport Data
          Recognition system to completely automate their process and remove any
          human intervention.
        </Typography>
        </Box>  
      
        {/* </Grid> */}
          {/* <Box marginLeft="3%" marginTop="4%">
          <Typography variant='h7'>
          We Provided a unique solution that :
         </Typography>
          </Box>   */}

        {/* <Grid item border="1px solid black" xs={12} sm={12} md={12} lg={12} xl={12} > */}

        {/* <Box sx={{marginTop:"1%"}}>
           <Container  sx={{marginTop:"2%"}}>
            
          <List >
        <Grid xs={12} sm={12} md={12} lg={12} xl={12} > 
          <Box  sx={{display:"flex",marginLeft:"0.5%",marginTop:"2%",lineHeight:"15px"}}>
          <ListItemIcon><CircleIcon sx={{fontSize:"0.3rem",color:"black"}}></CircleIcon></ListItemIcon>
          <ListItemText sx={{marginTop:"-1.65%",marginLeft:"-7.2%"}}
          primary={<Typography variant='h7'  >Can leverage the existing data to provide a quick ready to use solution</Typography>}>
          </ListItemText>
          </Box>  

          <Box sx={{display:"flex",marginLeft:"0.5%",marginTop:"2%",lineHeight:"15px"}}>
            <ListItemIcon><CircleIcon sx={{fontSize:"0.3rem",color:"black"}}></CircleIcon></ListItemIcon>
          <ListItemText sx={{marginTop:"-1.65%",marginLeft:"-7.2%"}}
          primary={<Typography variant='h7'>Can identify the orientation of the image and automatically correct it </Typography>}>
          </ListItemText>
          </Box>  

          <Box sx={{display:"flex",marginLeft:"0.5%",marginTop:"2%",lineHeight:"15px"}}>
            <ListItemIcon><CircleIcon sx={{fontSize:"0.3rem",color:"black"}}></CircleIcon></ListItemIcon>
          <ListItemText sx={{marginTop:"-1.65%",marginLeft:"-7.2%"}}
          primary={<Typography variant='h7' lineHeight="1px">Can identify the page of interest from numerous passport pages, and then capture information only from the area of interest</Typography>}>
          </ListItemText>
          </Box>  

          <Box sx={{display:"flex",marginLeft:"0.5%",marginTop:"2%",lineHeight:"15px"}}>
          <ListItemIcon><CircleIcon sx={{fontSize:"0.3rem",color:"black"}}></CircleIcon></ListItemIcon>
          <ListItemText sx={{marginTop:"-1.65%",marginLeft:"-7.2%"}}
          primary={<Typography variant='h7' lineHeight="1px">Can be integrated seamlessly with their existing database</Typography>}>
          </ListItemText>
          </Box>  

          <Box sx={{display:"flex",marginLeft:"0.5%",marginTop:"2%",lineHeight:"15px"}}>
          <ListItemIcon><CircleIcon sx={{fontSize:"0.3rem",color:"black"}}></CircleIcon></ListItemIcon>
          <ListItemText sx={{marginTop:"-1.65%",marginLeft:"-7.2%"}}
          primary={<Typography variant='h7' lineHeight="-20px">Can be deployed on premise with docker,flexible to work on local private network and highly secure</Typography>}>
            </ListItemText>
          </Box>  

          </Grid>
          </List> 
            </Container>

        </Box >  */}

        {/* <Grid border="1px solid black"> */}
          {/* <Box border="1px solid black" display="flex">
              <CircleIcon sx={{fontSize:"0.3rem",color:"black",marginLeft:"4.5%",marginTop:"0.6rem"}}/> 
            <Typography variant='h7' marginLeft="2%" >
            Can leverage the existing data to provide a quick ready to use solution</Typography>
          </Box> */}

          <Box marginLeft="3%" 
          marginTop={{xs:"2%",sm:"4%",md:"4%",lg:"4%",xl:"4%"}}
          >
           <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} >
          <Typography  
          lineHeight={{lg:"18px",md:"13.6px"}}  
          fontSize={{lg:"16px",md:"12px",sm:"18px",xs:"13.6px",xl:"16px"}}
          >
          We Provided a unique solution that :
         </Typography>
            </Grid> 
          </Box> 

          <Grid sx={{display:"grid",gridGap:"0.5rem",marginTop:{xs:"2%",sm:"3%",md:"3%",lg:"3%",xl:"2%"}}} >

          <Grid 
          fontSize={{lg:"16px",md:"12px",sm:"18px",xs:"13.6px",xl:"16px"}}>
          <Box  display="flex" >
              <CircleIcon sx={{fontSize:"0.3rem",color:"black",marginLeft:"4.5%",marginTop:"0.4rem"}}/> 
              <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} >
            <Typography  
            fontSize={{lg:"16px",md:"12px",sm:"18px",xs:"13.6px",xl:"16px"}}
            lineHeight={{lg:"18px",md:"13.6px",xs:"16px"}} 
             marginLeft="2%">
            Can leverage the existing data to provide a quick ready to use solution</Typography>
              </Grid>
          </Box>
          </Grid>  

          <Grid>

          <Box  display="flex" >
              <CircleIcon sx={{fontSize:"0.3rem",color:"black",marginLeft:"4.5%",marginTop:"0.4rem"}}/> 
              <Grid  xs={12} sm={12} md={12} lg={12} xl={12} >
            <Typography  
            fontSize={{lg:"16px",md:"12px",sm:"18px",xs:"13.6px",xl:"16px"}}
              lineHeight={{lg:"18px",md:"13.6px",xs:"1rem"}}
              marginLeft="2%"> 
            Can identify the orientation of the image and automatically correct it</Typography>
              </Grid>
          </Box>
          </Grid>

          <Grid>
          <Box  display="flex" >
              <CircleIcon sx={{fontSize:"0.3rem",color:"black",marginLeft:"4.5%",marginTop:"0.4rem"}}/> 
            {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12} > */}
            <Typography 
            fontSize={{lg:"16px",md:"12px",sm:"18px",xs:"13.6px",xl:"16px"}}
            lineHeight={{lg:"18px",md:"13.6px",xs:"1rem"}} 
            marginLeft="2%">
            Can identify the page of interest from numerous passport pages, and then capture information only from the area of interest</Typography>
            {/* </Grid>   */}
          </Box>
          </Grid>

          <Grid>
          <Box  display="flex">
              <CircleIcon sx={{fontSize:"0.3rem",color:"black",marginLeft:"4.5%",marginTop:"0.4rem"}}/> 
              <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} >
            <Typography 
            fontSize={{lg:"16px",md:"12px",sm:"18px",xs:"13.6px",xl:"16px"}}
            lineHeight={{lg:"18px",md:"13.6px",xs:"1rem"}} 
             marginLeft="2%">
            Can be integrated seamlessly with their existing database</Typography>
              </Grid>
          </Box>
          </Grid>

          <Grid>

          <Box  display="flex" >
              <CircleIcon sx={{fontSize:"0.3rem",color:"black",marginLeft:"4.5%",marginTop:"0.4rem"}}/> 
              <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} >
            <Typography 
            fontSize={{lg:"16px",md:"12px",sm:"18px",xs:"13.6px",xl:"16px"}}
            lineHeight={{lg:"18px",md:"13.6px",xs:"1rem"}} marginLeft="2%" >
            Can be deployed on premise with docker,flexible to work on local private network and highly secure
            </Typography>
              </Grid>
          </Box>

          </Grid>
        </Grid>

          

        {/* </Grid> */}


        {/* <Grid item border="1px solid black" xs={10} sm={10} md={10} lg={10} xl={10}> */}
          
            <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} marginLeft="3%"  marginTop="2%"
            >
        <Typography
        marginTop="3%"
        fontSize={{lg:"16px",md:"12px",sm:"18px",xs:"13.6px",xl:"16px"}}
         lineHeight="20px" >
          The holistic solution allowed the user to upload a PDF / image file, and a combination of multiple maching learning models were deployed in real time to tackle the challenges in the large variety of data.No humnan effort was required and machine learning was applied for automation. 
        </Typography>
            </Grid>
          

        {/* </Grid> */}
      </Grid>

        </Grid>

      </Grid>
      {/* </Paper> */}
      </Paper>
    </>
  )
}

export default Secondway