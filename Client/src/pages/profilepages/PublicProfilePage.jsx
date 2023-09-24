import React from 'react';
// import './PublicProfile.css';

const PublicProfilePage = () => {
    
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        mobileNumber: '123-456-7890',
        photo: 'https://example.com/profile.jpg', // URL to the user's profile photo
      };
  
      return (
    <div className="public-profile">
      <h1>User Profile</h1>
      <div className="profile-info">
        <div className="profile-picture">
          <img src={user.photo} alt={`${user.name}'s Profile`} />
        </div>
        <div className="user-details">
          <h2>Name: {user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Mobile Number: {user.mobileNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default PublicProfilePage;
