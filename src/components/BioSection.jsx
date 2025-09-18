// BioSection.jsx - Hero Section with Magic UI Highlighter
import React from 'react';
import Highlighter from './ui/Highlighter.jsx'; // Import from local file

const BioSection = () => {
  return (
    <>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: '700', 
        color: '#0A3044',
        lineHeight: '1.5',
        textAlign: 'center',
        marginRight: '3rem'
      }}>
        I develop{" "}
        <Highlighter action="box" color="#20b2aa" animationDuration={1800}>
          custom software solutions
        </Highlighter>{" "}
        that help businesses grow
        and{" "}
        <Highlighter action="underline" color="#F48F71" animationDuration={1400}>
         communities thrive
         </Highlighter>{" "}

      </h2>
      
     
    </>
  );
};

export default BioSection;