import React from "react";
import './Profile.css';
import KidsProfileNetflix from "../../../assets/KidsProfileNetflix.jpeg";

const Profile = () => {
    return (
        <div className="profile-container">
            <div>
                <h1 className="profile-heading">Who is Watching ?</h1>
            </div>
            <div className="Profile-list">
                <ul className="profiles-list-items">
                    <li className="profile-item">
                        <img src="profile1.png" alt="User 1" />
                        <span className="profile-name">User 1</span>
                    </li>
                    <li className="profile-item">
                        <img src="profile2.png" alt="User 2" />
                        <span className="profile-name">User 2</span>
                    </li>
                    <li className="profile-item">
                        <img src="profile3.png" alt="User 3" />
                        <span className="profile-name">User 3</span>
                    </li>
                    <li className="profile-item">
                        <img src="profile4.png" alt="User 4" />
                        <span className="profile-name">User 4</span>
                    </li>
                    <li className="profile-item">
                        <img src={KidsProfileNetflix} alt="Kids" />
                        <span className="profile-name">kids</span>
                    </li>
                    <li className="profile-item">
                        <div className="add-profile-button">
                            <link rel="stylesheet"
                                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
                            <button className="circle-button">
                                <i className="fa fa-plus"></i>
                            </button>
                            <span className="add-profile-text">Add Profile</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="profile-manage">
                <button>
                    Manage Profiles
                </button>
            </div>
        </div>)
};

export default Profile;