// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list

import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


import { Avatar, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}

const style = {
    width: '100%',
    bgcolor: 'background.paper',
    padding: '0px',
};

const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <div>
            <List sx={style}>
              
                        <ListItem >
                            <Grid item xs={3}>
                                <Avatar alt='nama' src={data.photo} sx={{ width: 56, height: 56 }} />
                            </Grid>
                            <Grid item xs={9}>
                                <Box sx={{ typography: 'bold' }}>
                                    {data.name}
                                </Box>
                                <Box sx={{ typography: 'body1' }}>
                                    {data.phone}
                                </Box>
                                <Box sx={{ typography: 'body1' }}>
                                    {data.email}
                                </Box>
                            </Grid>
                            
                        </ListItem>                                
                        <Divider />
            </List>

        </div>
    );
};

export default Contact;
