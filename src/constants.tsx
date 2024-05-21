import { IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const APP_TITLE = "HardwareInfo";

export const STORAGE_KEY = {
  TOKEN: "TOKEN",
  USER: "USER",
};

export const DEVELOPERS = [
  {
    name: "Dima",
    role: "Backend Developer",
    github: "https://github.com/DmytroChup",
    linkedin: "",
    image: "src/assets/images/developers/dima.jpg",
  },
  {
    name: "Yura",
    role: "Backend Developer",
    github: "https://github.com/emeraldDevUA",
    linkedin: "",
    image: "src/assets/images/developers/yura.png",
  },
  {
    name: "Sasha",
    role: "Backend Developer",
    github: "https://github.com/Oleksandr-Kornieiev",
    linkedin: "",
    image: "src/assets/images/developers/sasha.jpg",
  },
  {
    name: "Max",
    role: "Frontend Developer",
    github: "https://github.com/mamamamamaa",
    linkedin: "",
    image: "src/assets/images/developers/mama.jpg",
  },
];

export const rows = [
  {
    id: 1,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-GTX-1080.jpg",
    modelName: "GTX 1080",
    itemDescription: "High-end gaming",
    vendor: "Nvidia",
    dieSize: "Medium",
    architecture: "Pascal",
    gpuModel: "GTX 1080",
    tdp: "180W",
    vramType: "GDDR5X",
  },
  {
    id: 2,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-3080.jpg",
    modelName: "RTX 3080",
    itemDescription: "Next-gen gaming",
    vendor: "Nvidia",
    dieSize: "Large",
    architecture: "Ampere",
    gpuModel: "RTX 3080",
    tdp: "320W",
    vramType: "GDDR6X",
  },
  {
    id: 3,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/AMD-RX-580.jpg",
    modelName: "RX 580",
    itemDescription: "Mid-range gaming",
    vendor: "AMD",
    dieSize: "Medium",
    architecture: "Polaris",
    gpuModel: "RX 580",
    tdp: "185W",
    vramType: "GDDR5",
  },
  {
    id: 4,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/AMD-RX-VEGA-64.jpg",
    modelName: "Vega 64",
    itemDescription: "High-end gaming",
    vendor: "AMD",
    dieSize: "Large",
    architecture: "Vega",
    gpuModel: "Vega 64",
    tdp: "295W",
    vramType: "HBM2",
  },
  {
    id: 5,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-2080-Ti.jpg",
    modelName: "RTX 2080 Ti",
    itemDescription: "Ultimate gaming",
    vendor: "Nvidia",
    dieSize: "Large",
    architecture: "Turing",
    gpuModel: "RTX 2080 Ti",
    tdp: "260W",
    vramType: "GDDR6",
  },
  {
    id: 6,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-GTX-1070-Ti.jpg",
    modelName: "GTX 1070",
    itemDescription: "High-end gaming",
    vendor: "Nvidia",
    dieSize: "Medium",
    architecture: "Pascal",
    gpuModel: "GTX 1070",
    tdp: "150W",
    vramType: "GDDR5",
  },
  {
    id: 7,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-3070.jpg",
    modelName: "RTX 3070",
    itemDescription: "Next-gen gaming",
    vendor: "Nvidia",
    dieSize: "Large",
    architecture: "Ampere",
    gpuModel: "RTX 3070",
    tdp: "220W",
    vramType: "GDDR6",
  },
  {
    id: 8,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/AMD-RX-570.jpg",
    modelName: "RX 570",
    itemDescription: "Mid-range gaming",
    vendor: "AMD",
    dieSize: "Medium",
    architecture: "Polaris",
    gpuModel: "RX 570",
    tdp: "150W",
    vramType: "GDDR5",
  },
  {
    id: 9,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-GTX-1660.jpg",
    modelName: "GTX 1660",
    itemDescription: "Mid-range gaming",
    vendor: "Nvidia",
    dieSize: "Medium",
    architecture: "Turing",
    gpuModel: "GTX 1660",
    tdp: "120W",
    vramType: "GDDR5",
  },
  {
    id: 10,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/AMD-RX-5600-XT.jpg",
    modelName: "RX 5600 XT",
    itemDescription: "Mid-range gaming",
    vendor: "AMD",
    dieSize: "Medium",
    architecture: "RDNA",
    gpuModel: "RX 5600 XT",
    tdp: "150W",
    vramType: "GDDR6",
  },
  {
    id: 11,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-3070.jpg",
    modelName: "RTX 3060",
    itemDescription: "Next-gen gaming",
    vendor: "Nvidia",
    dieSize: "Medium",
    architecture: "Ampere",
    gpuModel: "RTX 3060",
    tdp: "170W",
    vramType: "GDDR6",
  },
  {
    id: 12,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-GTX-1050-Ti.jpg",
    modelName: "GTX 1050 Ti",
    itemDescription: "Budget gaming",
    vendor: "Nvidia",
    dieSize: "Small",
    architecture: "Pascal",
    gpuModel: "GTX 1050 Ti",
    tdp: "75W",
    vramType: "GDDR5",
  },
  {
    id: 13,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/AMD-RX-480.jpg",
    modelName: "RX 470",
    itemDescription: "Mid-range gaming",
    vendor: "AMD",
    dieSize: "Medium",
    architecture: "Polaris",
    gpuModel: "RX 470",
    tdp: "120W",
    vramType: "GDDR5",
  },
  {
    id: 14,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-3090.jpg",
    modelName: "RTX 3090",
    itemDescription: "Ultimate gaming",
    vendor: "Nvidia",
    dieSize: "Large",
    architecture: "Ampere",
    gpuModel: "RTX 3090",
    tdp: "350W",
    vramType: "GDDR6X",
  },
  {
    id: 15,
    imageUrl: "https://static.userbenchmark.com/resources/static/gpu/AMD-RX-6800.jpg",
    modelName: "RX 6800 XT",
    itemDescription: "High-end gaming",
    vendor: "AMD",
    dieSize: "Large",
    architecture: "RDNA 2",
    gpuModel: "RX 6800 XT",
    tdp: "300W",
    vramType: "GDDR6",
  },
];

export const columns = [
  { field: "modelName", headerName: "Model Name", width: 130 },
  { field: "vendor", headerName: "Vendor", width: 100, align: "center", headerAlign: "center" },
  { field: "dieSize", headerName: "Die Size", width: 120, align: "center", headerAlign: "center" },
  {
    field: "architecture",
    headerName: "Architecture",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "gpuModel",
    headerName: "GPU Model",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  { field: "tdp", headerName: "TDP", width: 100, align: "center", headerAlign: "center" },
  {
    field: "vramType",
    headerName: "VRAM Type",
    width: 140,
    align: "center",
    headerAlign: "center",
  },
] as const;

export const rowsOfVendors = [
  { id: 1, vendor: "Nvidia" },
  { id: 2, vendor: "AMD" },
  { id: 3, vendor: "Intel" },
];
export const rowsOfArchitectures = [
  { id: 1, architecture: "Pascal" },
  { id: 2, architecture: "Ampere" },
  { id: 3, architecture: "Polaris" },
  { id: 4, architecture: "Turing" },
  { id: 5, architecture: "RDNA" },
  { id: 6, architecture: "RDNA 2" },
  { id: 7, architecture: "Vega" },
];
export const rowsOfGpuModels = [
  { id: 1, gpuModel: "GTX 1080" },
  { id: 2, gpuModel: "RTX 3080" },
  { id: 3, gpuModel: "RX 580" },
  { id: 4, gpuModel: "Vega 64" },
  { id: 5, gpuModel: "RTX 2080 Ti" },
  { id: 6, gpuModel: "GTX 1070" },
  { id: 7, gpuModel: "RTX 3070" },
  { id: 8, gpuModel: "RX 570" },
  { id: 9, gpuModel: "GTX 1660" },
  { id: 10, gpuModel: "RX 5600 XT" },
  { id: 11, gpuModel: "RTX 3060" },
  { id: 12, gpuModel: "GTX 1050 Ti" },
  { id: 13, gpuModel: "RX 470" },
  { id: 14, gpuModel: "RTX 3090" },
  { id: 15, gpuModel: "RX 6800 XT" },
];
export const rowsOfTDPs = [
  { id: 1, tdp: "180W" },
  { id: 2, tdp: "320W" },
  { id: 3, tdp: "185W" },
  { id: 4, tdp: "295W" },
  { id: 5, tdp: "260W" },
  { id: 6, tdp: "150W" },
  { id: 7, tdp: "220W" },
  { id: 8, tdp: "120W" },
  { id: 9, tdp: "170W" },
  { id: 10, tdp: "75W" },
];
export const rowsOfVRAMTypes = [
  { id: 1, vramType: "GDDR5X" },
  { id: 2, vramType: "GDDR6X" },
  { id: 3, vramType: "GDDR5" },
  { id: 4, vramType: "HBM2" },
  { id: 5, vramType: "GDDR6" },
  { id: 6, vramType: "GDDR5" },
];

export const columnsOfVendors = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    sortable: true,
    align: "center",
    headerAlign: "center",
  },
  { field: "vendor", headerName: "Vendor", width: 130, sortable: true },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: () => (
      <Stack direction="row" spacing={1}>
        <IconButton color="primary" aria-label="edit" onClick={() => {}}>
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="delete" onClick={() => {}}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    ),
  },
] as const;
export const columnsOfArchitectures = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    sortable: true,
    align: "center",
    headerAlign: "center",
  },
  { field: "architecture", headerName: "Architecture", width: 130, sortable: true },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: () => (
      <Stack direction="row" spacing={1}>
        <IconButton color="primary" aria-label="edit" onClick={() => {}}>
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="delete" onClick={() => {}}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    ),
  },
] as const;
export const columnsOfGpuModels = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    sortable: true,
    align: "center",
    headerAlign: "center",
  },
  { field: "gpuModel", headerName: "GPU Model", width: 130, sortable: true },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: () => (
      <Stack direction="row" spacing={1}>
        <IconButton color="primary" aria-label="edit" onClick={() => {}}>
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="delete" onClick={() => {}}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    ),
  },
] as const;
export const columnsOfTDPs = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    sortable: true,
    align: "center",
    headerAlign: "center",
  },
  { field: "tdp", headerName: "TDP", width: 130, sortable: true },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: () => (
      <Stack direction="row" spacing={1}>
        <IconButton color="primary" aria-label="edit" onClick={() => {}}>
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="delete" onClick={() => {}}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    ),
  },
] as const;
export const columnsOfVRAMTypes = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    sortable: true,
    align: "center",
    headerAlign: "center",
  },
  { field: "vramType", headerName: "VRAM Type", width: 130, sortable: true },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: () => (
      <Stack direction="row" spacing={1}>
        <IconButton color="primary" aria-label="edit" onClick={() => {}}>
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="delete" onClick={() => {}}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    ),
  },
] as const;
