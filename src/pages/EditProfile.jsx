import React from "react";

function EditProfile() {
  return (
    <div>
      <h3>Edit Profile</h3>
      <form>
        <label>First Name:</label>
        <input type="text" />
        <label>Last Name:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
      </form>
    </div>
  );
}

export default EditProfile;
