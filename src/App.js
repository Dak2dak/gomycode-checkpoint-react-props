import React from "react";
import ProfileComponent from './profile/ProfileComponent.js';
import myImage from './didierDak.jpg';

function App() {
  return (
    <div className="App">

      {/* passing fullName, bio, profession as props */}

      <ProfileComponent 
        fullName='Didier Dakoury' 
        bio='I am easy to get along with, very kind and hardworking.' 
        profession='I am a front-end developer'
      />


      {/* passing image as children props */}

      <ProfileComponent img={myImage}/>
    </div>
  );
}

export default App;
