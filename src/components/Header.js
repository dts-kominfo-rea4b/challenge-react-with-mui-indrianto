// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import './header.css';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div>
    <p id="title">CALL A FRIEND</p>

    <hr /><p id="subtitle">Your friendly contact app</p>
    </div>

  );
};

export default Header;
