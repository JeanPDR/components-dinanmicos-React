import React from "react";

function ProfileCard(name: string, role: string) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default ProfileCard;
