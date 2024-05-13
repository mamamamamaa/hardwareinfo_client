import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();

  return (
    <Stack
      spacing={3}
      alignItems="center"
      justifyContent="center"
      height="90vh"
      style={{
        color: palette.primary.main,
      }}>
      <Typography variant="h2" align="center">
        Welcome to HardwareInfo
      </Typography>
      <Typography variant="h5" align="center" color="black">
        Explore detailed characteristics of video cards, including performance benchmarks,
        specifications, and compatibility information, all in one place. Whether you're a gamer,
        developer, or hardware enthusiast, HardwareInfo has you covered.
      </Typography>
      <Button variant="outlined" onClick={() => navigate("/cards")}>
        Get Started
      </Button>
    </Stack>
  );
};
