import React from "react";
import PropTypes from "prop-types";


const ProfileComponent = (props) =>{
    return(
        <div onClick={() =>props.handleName(props.user.fullName)} className="user-profile">
            <div className="bg-color">
                <img src={props.user.img} alt="imageInSrc.jpg"/>
            </div>
            <div className="user-info">
                <h2><b>Full Name: </b>{props.user.fullName}</h2>
                <div>
                    <p><b>Profession: </b>{props.user.profession}</p>
                    <p><b>Bio: </b>{props.user.bio}</p>
                </div>
            </div>
        </div>
    );
}

ProfileComponent.propTypes = {
    img: PropTypes.object,
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string
};

export default ProfileComponent;