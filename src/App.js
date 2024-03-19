import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageSlider from "./ImageSlider";
import Navbar from './Navbar';
import Footer from './Footer';
import Box from './Box';
import Suits from './Suits'; // Import the Suits component


const App = () => {
  const slides = [
    { url: "http://localhost:3000/civil-1.jpg", title: "civil-1" },
    { url: "http://localhost:3000/civil-2.jpg", title: "civil-2" },
    { url: "http://localhost:3000/civil-3.jpg", title: "civil-3" },
    { url: "http://localhost:3000/civil-4.jpg", title: "civil-4" },
    { url: "http://localhost:3000/civil-5.jpg", title: "civil-5" },
  ];

  const containerStyles = {
    maxWidth: "2100px",
    margin: "0 auto",
    position: 'relative',
  };

  const boxContainerStyles = {
    textAlign: 'center',
    marginTop: '150px',
    marginBottom: '20px',
  };

  const headingStyles = {
    fontWeight: 'bold',
    fontSize: '24px',
    marginTop: '-250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const uniqueHeadingStyles = {
    ...headingStyles,
    marginTop: '-200px',
    marginBottom: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Router>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <Navbar />
        {/* <div style={{ ...containerStyles, height: "calc(100vh - 200px)", overflowY: "hidden" }}> */}
          <Routes>
            <Route path="/" element={
              <div style={{ ...containerStyles, height: "calc(100vh - 200px)", overflowY: "hidden" }}>
               <ImageSlider slides={slides} />
               <h1 style={headingStyles}>What makes us unique</h1>
        <div style={boxContainerStyles}>
          <Box
            text={
              <>
                Unique Selling Price <br />
                This is a software that brings many functionalities into table with a low pricing
              </>
            }
            imageUrl="/features.png"
          />
          <Box
            text={
              "This is a software that brings many functionalities into table with a low pricing"
            }
            imageUrl="/sellingprice.png"
          />
          <Box
            text={
              "Box 3 Text - Something unique about Box 3. This is a software that brings many functionalities into table with a low pricing."
            }
            imageUrl="/valueproposition.png"
          />
        </div>
               </div>
              } />
            <Route path="/Suits" element={
              <div style={{ ...containerStyles, height: "calc(100vh - 200px)", overflowY: "hidden" }}>
            <Suits />
            <h1 style={headingStyles}>What makes us unique</h1>
        <div style={boxContainerStyles}>
          <Box
            text={
              <>
                Unique Selling Price <br />
                This is a software that brings many functionalities into table with a low pricing
              </>
            }
            imageUrl="/features.png"
          />
          <Box
            text={
              "This is a software that brings many functionalities into table with a low pricing"
            }
            imageUrl="/sellingprice.png"
          />
          <Box
            text={
              "Box 3 Text - Something unique about Box 3. This is a software that brings many functionalities into table with a low pricing."
            }
            imageUrl="/valueproposition.png"
          />
        </div>
            </div>
            } /> {/* Route for the Suits page */}
          </Routes>
        {/* </div> */}
        
        <Footer />
      </div>
    </Router>
  );
 
};

export default App;
