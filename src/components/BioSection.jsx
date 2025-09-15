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
        lineHeight: '1.2',
        textAlign: 'center',
        marginRight: '3rem'
      }}>
        I develop{" "}
        <Highlighter action="highlight" color="#87CEFA" animationDuration={800}>
          custom software solutions
        </Highlighter>{" "}
        that help{" "}
        <Highlighter action="underline" color="#F48F71" animationDuration={1000}>
          businesses grow
        </Highlighter>{" "}
        and{" "}
        <Highlighter action="box" color="#20b2aa" animationDuration={1200}>
          communities thrive
        </Highlighter>
      </h2>
      
     
    </>
  );
};

export default BioSection;