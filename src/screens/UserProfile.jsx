import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { handleSignOut } from "../services/Auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
const EditableUserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    imageUrl: "https://picsum.photos/200",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform API call or update function to save changes to database
  };

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogout = () => {
    handleSignOut().then(() => {
      navigate("/");
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Avatar
        sx={{ width: 150, height: 150 }}
        src={userDetails.imageUrl}
        alt="User Profile Picture"
      />
      {isEditing ? (
        <>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            value={userDetails.name}
            onChange={handleInputChange}
            sx={{ mt: 3 }}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            value={userDetails.email}
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          />
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" onClick={handleSave} sx={{ mr: 2 }}>
              Save
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h5" component="div" gutterBottom>
              {userDetails.name}
            </Typography>
            <Typography variant="subtitle1" component="div" gutterBottom>
              {userDetails.email}
            </Typography>
          </Box>
          <Button variant="outlined" onClick={handleEdit} sx={{ mt: 3 }}>
            Edit Profile
          </Button>
          <Button variant="outlined" onClick={handleLogout} sx={{ mt: 3 }}>
            Logout
          </Button>
        </>
      )}
    </Box>
  );
};
export default EditableUserProfile;
