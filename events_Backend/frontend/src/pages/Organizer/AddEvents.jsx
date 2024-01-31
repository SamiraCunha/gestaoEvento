import React, {useState} from 'react';
import Sidenav from '../../componentes/compOrganizer/Sidenav';
import NavBar from '../../componentes/compOrganizer/NavBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import dayjs from 'dayjs';




const yesterday = dayjs().subtract(1, 'day');


export default function AddEvents() {
  const styles = {
    container: {
      
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
  };
  
  return (
    <>
    <NavBar />
    <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box height={30} />
        <Container sx={styles.container} component="main" maxWidth="xs"> 
        <Typography variant="h4" gutterBottom>
       Novo evento
      </Typography>
      <Box height={20} />
        <TextField
        required
        id="outlined-required"
        label="Título do evento" variant="outlined" fullWidth 
        placeholder="Coloque o título do evento"
        />
       
         <Box height={20} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker']}>
              <DateTimePicker label="Data e hora de início" 
               defaultValue={yesterday.toDate()}
               disablePast
               views={['year', 'month', 'day', 'hours', 'minutes']}
              />
          </DemoContainer>
        </LocalizationProvider>
        <Box height={10} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker']}>
              <DateTimePicker label="Data e hora de termino" 
                defaultValue={yesterday.toDate()}
                disablePast
                views={['year', 'month', 'day', 'hours', 'minutes']}
                />
          </DemoContainer>
        </LocalizationProvider>
        <Box height={10} />
        <TextField id="standard-basic"
        label="Local" 
        variant="standard" fullWidth
        placeholder="Digite onde acontecerá o evento" 
        />
        <Box height={20} />
        <TextField
        id="outlined-required"
        label="Moderador" variant="outlined" fullWidth
        placeholder="Digite quem será o moderador"
         />
         <Box height={20} />
         <TextField
        id="outlined-required"
        label="Orador" variant="outlined" fullWidth 
        placeholder="Digite quem será o orador"
      
        />
         <Box height={20} />
        <TextField
          id="outlined-textarea"
          label="Descrição"
          placeholder="Descreva o evento"
          multiline
          fullWidth
        />
         <Box height={40} />
         <Button variant="contained" endIcon={<CreateIcon />}>
          Criar evento
          </Button>
        </Container>
         </Box>
      </Box>
      
    </>
    
  )
}

