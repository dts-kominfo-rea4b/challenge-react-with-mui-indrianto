// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card


import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';



import Divider from '@mui/material/Divider';
import { Button, FormControl, TextField } from '@mui/material';


const style = {
  width: '100%',
  bgcolor: 'background.paper',
  padding: '0px',
};


const ContactForm = ({handleClick}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [photo,setPhoto]=useState('');
    const [contacts, setContacts] = useState([]);

    const newContact=[...contacts];

    return (
        <div className="contact-form"> 
        <List sx={style} component="nav" aria-label='Contact Form'>
            <ListItem>
                <FormControl fullWidth sx={{ m:0 }}>
                <TextField value={name} label="Name *" variant='outlined' onChange={e=>setName(e.target.value)} />
                </FormControl>
                
            </ListItem>
            <Divider />
            <ListItem>
            <FormControl fullWidth sx={{ m:0 }}>
                <TextField value={phone} label="Phone *" variant='outlined' onChange={e=>setPhone(e.target.value)} />
                </FormControl>
               
            </ListItem>
            <Divider />
            <ListItem>
            <FormControl fullWidth sx={{ m:0 }}>
                <TextField value={email} label="E-Mail *" variant='outlined' onChange={e=>setEmail(e.target.value)} />
                </FormControl>
            </ListItem>
            <Divider />
            <ListItem>
            <FormControl fullWidth sx={{ m:0 }}>
                <TextField value={photo} label="Photo URL *" variant='outlined' onChange={e=>setPhoto(e.target.value)}/>
                </FormControl>
            </ListItem>
            <Divider />
            <ListItem >
                <Button id="btnadd" onClick={()=>{
                    newContact.push({name:name,phone:phone,email:email,photo:photo});                     
                    handleClick(newContact);
                    setContacts([]);

                }}>Add New</Button>                
            </ListItem>
        </List>                        
        </div>
    );
}

export default ContactForm;