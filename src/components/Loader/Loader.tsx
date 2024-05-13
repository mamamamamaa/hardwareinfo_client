import { CircularProgress, Modal } from "@mui/material";

export const Loader = () => (
  <Modal
    open
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
    }}>
    <CircularProgress size={75} />
  </Modal>
);
