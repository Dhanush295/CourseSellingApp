import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const defaultTheme = createTheme();

function CreateCourses() {

  const [ title , setTitle ] = React.useState('');
  const [ description, setDescription ] = React.useState('');
  const [link, setLink ] = React.useState('');
  const [ price, setPrice ] = React.useState('');
  const [published, setPublished ] = React.useState(false);


    const handleSubmit = async()=> {
      const response = await axios.post('http://localhost:3000/admin/createcourses', {title, description,price,link,published},{
        headers: {
            'Content-Type':'application/json'
        }})
       console.log(response.data);
    }
    
    return(
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                
              </Avatar>
              <Typography component="h1" variant="h5">
                Create Courses
              </Typography>
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Title"
                  label="Title"
                  name="Title"
                  onChange={(e)=>{ setTitle(e.target.value)}}
                  autoComplete="Title"
                  autoFocus
                  
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="description"
                  label="description"
                  type="description"
                  id="description"
                  onChange={(e)=>{ setDescription(e.target.value)}}
                  autoComplete="current-description"
                />
                <TextField
                  margin="link"
                  required
                  fullWidth
                  name="link"
                  label="Link"
                  type="link"
                  onChange={(e)=>{setLink(e.target.value)}}
                  id="link"
                  autoComplete="current-link"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  type="price"
                  id="price"
                  onChange={(e)=>{setPrice(e.target.value)}}
                  autoComplete="current-price"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit} 
                >
                  Create Course
                </Button>
                <FormControlLabel
                  control={<Checkbox
                  value="remember" 
                  color="primary" 
                  onChange={(e) => { setPublished(e.target.checked) }} />}
                  label="Publish Course"
                />
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
}

export default CreateCourses;