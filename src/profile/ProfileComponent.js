import React from "react";
import PropTypes from "prop-types";


const ProfileComponent = (props) =>{
    return(
    <div onClick={() =>props.handleName(props.user.fullName)}
     style={{display: 'flex', justifyContent: 'center',
     border: '3px solid rgb(11, 150, 52)', borderBottomLeftRadius: '10',
      borderTopLeftRadius: '10', fontSize: '20px', backgroundColor: 'rgb(243, 8, 8, 0.514)',
       gap: '1rem', width: '520px'}}>

            <div style={{borderBottomLeftRadius: '8px', borderTopLeftRadius: '10px'}}>

                <img src={props.user.img} style={{width: '150px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px',
                 borderBottomRightRadius: '10px'}} alt="imageInSrc.jpg"/>
            </div>
            <div>
                <h2><b>Full name: </b>{props.user.fullName}</h2>
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