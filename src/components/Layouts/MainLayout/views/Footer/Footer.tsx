import { Box, Container, Grid, Typography } from "@mui/material";
import { APP_TITLE } from "../../../../../constants.ts";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        borderTop: "1px solid #eaeaea",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position: "fixed",
        bottom: 0,
      }}>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              {APP_TITLE}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Dima | Yura | Sasha | Mama`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
