import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { columns as baseColumns, rows } from "../../constants.ts";
import { ChangeEvent, useState } from "react";

type Props = {
  data: typeof rows;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
  handleAdd: (newCard: any) => void;
};

export const GraphicCardsAdminTable = ({ data, handleEdit, handleDelete, handleAdd }: Props) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [newCard, setNewCard] = useState({
    id: (rows[rows.length - 1]?.id || 0) + 1,
    imageUrl: "",
    modelName: "",
    itemDescription: "",
    vendor: "",
    dieSize: "",
    architecture: "",
    gpuModel: "",
    tdp: "",
    vramType: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewCard({
      id: (rows[rows.length - 1]?.id || 0) + 1,
      imageUrl: "",
      modelName: "",
      itemDescription: "",
      vendor: "",
      dieSize: "",
      architecture: "",
      gpuModel: "",
      tdp: "",
      vramType: "",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  const handleSave = () => {
    handleAdd(newCard);
    handleClose();
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result);
          setNewCard((prevCard) => ({
            ...prevCard,
            imageUrl: event.target?.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const columns = [
    ...baseColumns,
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params: any) => (
        <Stack direction="row" spacing={1}>
          <IconButton color="primary" aria-label="edit" onClick={() => handleEdit(params.row.id)}>
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="delete"
            onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Stack sx={{ py: 5 }} width="100%" height={712}>
      <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mb: 2 }}>
        Add New Graphic Card
      </Button>

      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 5]}
        checkboxSelection={false}
        disableRowSelectionOnClick
      />

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>Add New Graphic Card</DialogTitle>
        <DialogContent>
          <Stack spacing={2} pt={2}>
            <Box display="flex" alignItems="center" flexDirection="column">
              {image && (
                <img
                  alt="image"
                  src={image as string}
                  style={{ width: "auto", height: 400, marginBottom: 10 }}
                />
              )}
              <Button variant="contained" component="label">
                Upload Image
                <input type="file" hidden onChange={handleImageUpload} />
              </Button>
            </Box>
            <TextField
              name="modelName"
              label="Model Name"
              variant="outlined"
              value={newCard.modelName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="itemDescription"
              label="Item Description"
              variant="outlined"
              value={newCard.itemDescription}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="vendor"
              label="Vendor"
              variant="outlined"
              value={newCard.vendor}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="dieSize"
              label="Die Size"
              variant="outlined"
              value={newCard.dieSize}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="architecture"
              label="Architecture"
              variant="outlined"
              value={newCard.architecture}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="gpuModel"
              label="GPU Model"
              variant="outlined"
              value={newCard.gpuModel}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="tdp"
              label="TDP"
              variant="outlined"
              value={newCard.tdp}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="vramType"
              label="VRAM Type"
              variant="outlined"
              value={newCard.vramType}
              onChange={handleChange}
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};
