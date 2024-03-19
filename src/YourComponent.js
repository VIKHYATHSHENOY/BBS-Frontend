import React, { useContext } from "react";
import MyContext from "./MyContext"; // Replace with the actual path to your context file

const YourComponent = () => {
  // Assuming MyContext is your context created with createContext
  const contextValue = useContext(MyContext);

  // Check if the context value is null or undefined
  if (!contextValue) {
    // Handle the case where the context value is null or undefined
    return null; // Or render some default content or loading indicator
  }

  // Destructure properties from the context value
  const { basename } = contextValue;

  // Rest of your component logic...
};

export default YourComponent;