import React from "react";
import ProfileComponent from './profile/ProfileComponent.js';
import myImage from './imageInSrc.jpg';
import './Style.css';


const userProfile = {
    fullName: 'Didier Dakoury',
    bio: 'Easy to get along with, very kind and hardworking',
    profession: 'Front-end developer',
    img: {myImage},
}

function App() {
  return (
    <div className="App">
      <ProfileComponent user = {userProfile}/>

    </div>
  );
}

export default App;
