import React from "react";
import "./ProfileSocial.css";

const ProfileSocial = (props) => {
  return (
    <div className="profile__social">
      <div className="profsocial profile__social-followers">
        <div>Total Groups</div>
        <div>10</div>
      </div>
      <div className="profsocial profile__social-followers">
        <div>Following</div>
        <div>5</div>
      </div>
      <ul className="profsocial profile__social-links">
        <li className="profile__social-link">
          <i className="fab fa-instagram"></i>
        </li>
        <li className="profile__social-link">
          <i className="fab fa-linkedin"></i>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSocial;
