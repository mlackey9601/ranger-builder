import { PromiseProvider } from 'mongoose';
import React from 'react';

const ProfilePage = (props) => {
  return (
    <div>
      <h3>Name: {props.user.firstName} {props.user.lastName}</h3>
      <p>It is located at src/pages/ProfilePage/ProfilePage.jsx</p>
      <p>If you can view this page, it is likely that you have successfully signed a user in!</p>
      <p>You could use this page as a base to start working from or delete it for a fresh start. Happy building!</p>
    </div>
  )
}
 
export default ProfilePage;
