import './ProfilePage.css'
import React from 'react';

const ProfilePage = (props) => {
  let nick = props.user.nickName ? 
    <tr>
      <td className="details-title">Nickname </td>
      <td className="details-item">{props.user.nickName}</td>
    </tr>
    : "";

  return (
    <div className="ProfilePage">
      <header className="profile-heading">User Profile</header>
      &nbsp;&nbsp;&nbsp;
      <div className="profile-card">
        <img alt="ranger" src="https://i.imgur.com/vLo3KAi.png" className="avatar"></img>
        <table>
          <tbody className="details-table">
            <tr>
              <td className="details-title">Name </td>
              <td className="details-item">{props.user.firstName} {props.user.lastName}</td>
            </tr>
            {nick}
            <tr>
              <td className="details-title">Email </td>
              <td className="details-item">{props.user.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
 
export default ProfilePage;
