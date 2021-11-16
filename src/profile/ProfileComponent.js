import React from "react";


const ProfileComponent = (user, handleName) =>{
    return(
        <div className="user-profile">
            <div className="bg-color">
                <img src={user.img} alt="imageInSrc.jpg"/>
            </div>
            <div className="user-info">
                <h2>{user.fullName}</h2>
                <div>
                    <p><b>Bio: </b>{user.bio}</p>
                    <p><b>Profession: </b>{user.profession}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;