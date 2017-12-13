// import React, { Component } from 'react';
// import './Profile.css';

// class Profile extends Component {
//   login() {
//     this.props.auth.login();
//   }
//   componentWillMount() {
//     this.setState({ profile: {} });
//     const { userProfile, getProfile } = this.props.auth;
//     if (!userProfile) {
//       getProfile((err, profile) => {
//         this.setState({ profile });
//       });
//     } else {
//       this.setState({ profile: userProfile });
//     }
//   }
//   render() {
//     const { profile } = this.state;
//     return (
//       <div className="profile-area">
//         <h1>{profile.name}</h1>
//         <Panel header="Profile">
//           <img src={profile.picture} alt="profile" />
//           <div>
//             <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
//             <h3>{profile.nickname}</h3>
//           </div>
//           <pre>{JSON.stringify(profile, null, 2)}</pre>
//         </Panel>
//       </div>
//     );
//   }
// }

// export default Profile;


// // CSS 
// .profile-area img {
//   max-width: 150px;
//   margin-bottom: 20px;
// }

// .panel-body h3 {
//   margin-top: 0;
// }