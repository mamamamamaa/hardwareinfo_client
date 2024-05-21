import { useParams } from "react-router-dom";
import { rows } from "../../constants.tsx";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { stringAvatar } from "../../utils";
import { useAuth } from "../../providers";

const generateRandomComments = (numComments: number) => {
  const usernames = ["Test1", "Test2", "Test3", "Test4", "Test5"];
  const avatars = [
    "https://i.playground.ru/p/rv2YGvWcdjHspVJcuvV19Q.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFg0kqatiTi3qhcBZzS6mfP74sHSPKZ7xwwyYdZWWbw&s",
    "https://www.afisha.uz/uploads/media/2024/03/24977cd96d89a4ea693b994dd0aed51c_m.jpg",
    "https://cdn.nur.kz/images/1120x630/ed18139868df1fc7.jpeg",
    "https://desu.shikimori.one/system/user_images/original/1026996/1998072.jpg",
  ];
  const commentTemplates = [
    "Great card for gaming!",
    "Had some issues with the drivers.",
    "Excellent performance and value.",
    "Not satisfied with the cooling system.",
    "Best bang for the buck!",
    "Impressed with the overclocking capabilities.",
    "Struggles with higher resolutions.",
    "Smooth gaming experience overall.",
    "Decent mid-range card.",
    "Disappointing performance in certain games.",
  ];

  const comments = Array.from({ length: numComments }, (_, i) => {
    const randomUserIndex = Math.floor(Math.random() * usernames.length);
    const randomCommentIndex = Math.floor(Math.random() * commentTemplates.length);
    return {
      id: i + 1,
      username: usernames[randomUserIndex],
      avatar: avatars[randomUserIndex],
      text: commentTemplates[randomCommentIndex],
    };
  });

  return comments;
};

export const CardDetailsPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [comments, setComments] = useState(generateRandomComments(Math.floor(Math.random() * 3)));
  const [newComment, setNewComment] = useState("");

  const card = rows.find((card) => card.id === Number(id));

  if (!card) {
    return (
      <Stack py={3} alignItems="center">
        <Typography variant="h4" color="error">
          Card not found
        </Typography>
      </Stack>
    );
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          username: user?.username || "",
          avatar: user?.avatarUrl || "",
          text: newComment.trim(),
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <Stack py={3} px={2} spacing={3}>
      <Typography variant="h4" gutterBottom>
        {card.modelName}
      </Typography>

      <Stack spacing={3} direction="row">
        <img
          src={card.imageUrl}
          alt={card.modelName}
          style={{ width: "auto", height: 600, borderRadius: 10, objectFit: "cover" }}
        />

        <Stack spacing={5} sx={{ width: "100%" }}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h6">General Information</Typography>
              <Typography variant="body1">
                <strong>Model Name:</strong> {card.modelName}
              </Typography>
              <Typography variant="body1">
                <strong>Vendor:</strong> {card.vendor}
              </Typography>
              <Typography variant="body1">
                <strong>Description:</strong> {card.itemDescription}
              </Typography>
            </Box>
          </Paper>

          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h6">Specifications</Typography>
              <Typography variant="body1">
                <strong>Die Size:</strong> {card.dieSize}
              </Typography>
              <Typography variant="body1">
                <strong>Architecture:</strong> {card.architecture}
              </Typography>
              <Typography variant="body1">
                <strong>GPU Model:</strong> {card.gpuModel}
              </Typography>
              <Typography variant="body1">
                <strong>TDP:</strong> {card.tdp}
              </Typography>
              <Typography variant="body1">
                <strong>VRAM Type:</strong> {card.vramType}
              </Typography>
            </Box>
          </Paper>
        </Stack>
      </Stack>

      <Paper elevation={3}>
        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            Comments
          </Typography>
          <List>
            {comments.map((comment) => (
              <ListItem key={comment.id} alignItems="center" sx={{ display: "flex", gap: 1 }}>
                {comment?.avatar ? (
                  <Avatar alt={comment.username} src={comment?.avatar} />
                ) : (
                  <Avatar {...stringAvatar(comment?.username || "")} />
                )}
                <ListItemText
                  primary={comment.username}
                  secondary={comment.text}
                  sx={{ fontSize: 18 }}
                />
              </ListItem>
            ))}
          </List>
          <Stack direction="row" spacing={2} mt={2}>
            <TextField
              label="Add a comment"
              variant="outlined"
              fullWidth
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleAddComment}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  );
};
