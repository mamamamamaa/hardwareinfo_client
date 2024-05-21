import { Card, CardContent, CardMedia, List, Stack, Typography, useTheme } from "@mui/material";
import { DEVELOPERS } from "../../constants.tsx";

export const DevelopersPage = () => {
  const { palette } = useTheme();

  return (
    <Stack
      spacing={3}
      alignItems="center"
      justifyContent="center"
      sx={{
        color: palette.primary.main,
        mt: 10,
      }}>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          flexWrap: "wrap",
          justifyContent: "center",
          padding: 0,
        }}>
        {DEVELOPERS.map((dev) => (
          <Card
            key={dev.name}
            sx={{
              width: 300,
              display: "flex",
              flexDirection: "column",
              borderRadius: 5,
            }}>
            <CardMedia src={dev.image} component="img" sx={{ height: 200 }} />
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="h5">{dev.name}</Typography>
              <Typography variant="body1" fontSize={17}>
                Role: {dev.role}
              </Typography>
              <Stack>
                {dev.github && (
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: palette.primary.main, fontSize: 18, textDecoration: "none" }}>
                    GitHub
                  </a>
                )}
                {dev.linkedin && (
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: palette.primary.main, fontSize: 18, textDecoration: "none" }}>
                    LinkedIn
                  </a>
                )}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </List>
    </Stack>
  );
};
