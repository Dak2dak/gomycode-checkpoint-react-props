import React from "react";


const ProfileComponent = (props) =>{


    return(
        <div className="user-profile">
            <div>
                <img src={props.image}  alt="DidierDak.jpg"/>
            </div>

            <div className="user-info">
                <h2>{props.fullName}</h2>
                <div>
                    <p><b>Bio: </b>{props.bio}</p>
                    <p><b>Profession: </b>{props.profession}</p>
                </div>
            </div>
            
        </div>
    );
}

export default ProfileComponent;