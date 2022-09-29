import './App.css';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import ContactForm from './components/ContactForm';

import Contact from './components/Contact';
import { useState } from 'react';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state

  const [contacts, setContacts]=useState([]);
  


  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
const handleClick=(contact)=>{
  setContacts([...contacts,contact]);    
  contactsJSON.push({name:contact[0].name,phone:contact[0].phone,email:contact[0].email, photo:contact[0].photo});
}
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header/>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <ContactForm handleClick={handleClick} />
          </Grid>
          <Grid item xs={6}>
            {
              contactsJSON.map((contact, i)=> <Contact key={i} data={contact} />)
            }            
          </Grid>

        </Grid>
      
      </Container>
      
    </div>
  );
};

export default App;
