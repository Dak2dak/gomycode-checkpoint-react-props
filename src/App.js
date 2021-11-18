import React from "react";
import ProfileComponent from './profile/ProfileComponent.js';
import myImage from './imageInSrc.jpg';
import './Style.css';


const userProfile = {
    img: myImage,
    fullName: 'Linda Walles',
    bio: 'Very hardworking',
    profession: 'Front-end developer'
};

const handleName = (fullName) => alert(`The user's name is: ${fullName}.`) 

function App() {
  return (
    <div className="App">
      <ProfileComponent user = {userProfile} handleName = {handleName} />
    </div>
  );
}

export default App;
