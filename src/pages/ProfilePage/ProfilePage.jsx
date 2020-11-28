import './ProfilePage.css'
import React from 'react';

const ProfilePage = (props) => {
  let nick = props.user.nickName ? <p>NickName: {props.user.nickName}<br/></p> : "";
  console.log(props.user)
  return (
    <div className="ProfilePage">
      <header className="profile-heading">User Profile</header>
      &nbsp;&nbsp;&nbsp;
      <div className="profile">
        <img alt="ranger" src="https://i.imgur.com/vLo3KAi.png" className="avatar"></img>
        &nbsp;&nbsp;&nbsp;
        <div className="details">
          <p>
            Name: {props.user.firstName} {props.user.lastName}<br/>
            {nick}
            Email: {props.user.email}
          </p>
        </div>
      </div>
    </div>
  )
}
 
export default ProfilePage;
