import React from 'react'
import PropTypes from 'prop-types';
const Profile = (props) => {
    const handleName = () => {
        
          alert (`my name is ${props.fullName}`)

      }
  return (
    <div>
        {props.children} 
       <h1 color='red'>{props.fullName}</h1> 
       <h1>{props.bio}</h1>
       <h1>{props.profession}</h1>

       
    
<button onClick={handleName}>full name</button>
    </div>
  )
}

export default Profile
Profile.defaultProps={bio :"full stack javascrip"}
Profile.propTypes={bio:PropTypes.string}