import { ChangeEvent, useState } from "react";
import { Avatar, Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useAuth } from "../../providers";
import { UserType } from "../../types.ts";
import { stringAvatar } from "../../utils";

export const ProfilePage = () => {
  const { user, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedUser, setEditedUser] = useState<UserType>(user as UserType);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
      setEditedUser({
        ...editedUser,
        avatarUrl: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
    console.log(avatarFile);
  };

  return (
    <Stack py={3} px={2} spacing={3} alignItems="center">
      <Typography variant="h4">Profile</Typography>

      <Paper elevation={3} sx={{ width: "100%", maxWidth: 600 }}>
        <Box p={2} display="flex" flexDirection="column" alignItems="center" gap={2}>
          {editedUser.avatarUrl ? (
            <Avatar
              style={{ width: 200, height: 200, fontSize: 100 }}
              alt={editedUser.username}
              src={editedUser.avatarUrl}
            />
          ) : (
            <Avatar
              style={{ width: 200, height: 200, fontSize: 100 }}
              {...stringAvatar(editedUser.username || "")}
            />
          )}
          {isEditing && (
            <Button variant="contained" component="label">
              Change Avatar
              <input type="file" hidden accept="image/*" onChange={handleAvatarChange} />
            </Button>
          )}
          {isEditing ? (
            <>
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                value={editedUser.username}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                value={editedUser.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
            </>
          ) : (
            <>
              <Typography variant="h6">{user?.username}</Typography>
              <Typography variant="body1" color="textSecondary">
                {user?.email}
              </Typography>
            </>
          )}
          <Typography variant="body1" color="textSecondary">
            {user?.role}
          </Typography>

          <Stack direction="row" spacing={2} mt={2}>
            {isEditing ? (
              <>
                <Button variant="contained" color="primary" onClick={handleSave}>
                  Save
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleEditToggle}>
                  Cancel
                </Button>
              </>
            ) : (
              <Button variant="outlined" startIcon={<EditIcon />} onClick={handleEditToggle}>
                Edit Profile
              </Button>
            )}
          </Stack>
        </Box>
      </Paper>
    </Stack>
  );
};
