import React from "react";
import PropTypes from "prop-types";


const ProfileComponent = (props) =>{
    return(
    <div onClick={() =>props.handleName(props.user.fullName)}
     style={{display: 'flex', justifyContent: 'center',
     border: '3px solid #000', borderBottomLeftRadius: '10px',
      borderTopLeftRadius: '10px', fontSize: '20px', backgroundImage: 'url(/visit4.jpg)',
       gap: '1rem', width: '410px'}}>

            <div style={{borderBottomLeftRadius: '8px', borderTopLeftRadius: '10px', marginTop: '8px'}}>

                <img src={props.user.img} style={{width: '160px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px',
                 borderBottomRightRadius: '10px'}} alt="imageInSrc.jpg"/>
            </div>
            <div>
                <h2 style={{color: '#fff', fontFamily: 'Estonia', fontSize: '30px'}}><b>Full name: </b>{props.user.fullName}</h2>
                <div>
                    <h3 style={{color: '#fff', fontFamily: 'Estonia', fontSize: '30px'}}><b>Profession: </b>{props.user.profession}</h3>
                    <h3 style={{color: '#fff', fontFamily: 'Estonia', fontSize: '30px'}}><b>Bio: </b>{props.user.bio}</h3>
                </div>
            </div>
    </div>
    );
}

ProfileComponent.defaultProps = {
    user: 0
  };

ProfileComponent.propTypes = {
    img: PropTypes.object,
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string
};

export default ProfileComponent;