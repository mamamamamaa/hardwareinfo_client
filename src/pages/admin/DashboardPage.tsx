import { ReactNode, SyntheticEvent, useState } from "react";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import { GraphicCardsTab } from "./tabs";
import { DataGrid } from "@mui/x-data-grid";
import {
  columnsOfArchitectures,
  columnsOfGpuModels,
  columnsOfTDPs,
  columnsOfVendors,
  columnsOfVRAMTypes,
  rowsOfArchitectures,
  rowsOfGpuModels,
  rowsOfTDPs,
  rowsOfVendors,
  rowsOfVRAMTypes,
} from "../../constants.tsx";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const DashboardPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", py: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Graphic Cards" {...a11yProps(0)} />
          <Tab label="Vendors" {...a11yProps(1)} />
          <Tab label="Architectures" {...a11yProps(2)} />
          <Tab label="GPU Models" {...a11yProps(3)} />
          <Tab label="TDPs" {...a11yProps(4)} />
          <Tab label="VRAM Types" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant="h4">Admin Graphic Cards Table</Typography>
        <GraphicCardsTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h4">Admin Vendors Table</Typography>
        <Button variant="contained" color="primary" fullWidth onClick={() => {}} sx={{ my: 2 }}>
          Add New Vendors
        </Button>

        <Stack width="100%" height={712} pt={2}>
          <DataGrid
            rows={rowsOfVendors}
            columns={columnsOfVendors}
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
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="h4">Admin Architectures Table</Typography>
        <Button variant="contained" color="primary" fullWidth onClick={() => {}} sx={{ my: 2 }}>
          Add New Architectures
        </Button>
        <Stack width="100%" height={712} pt={2}>
          <DataGrid
            rows={rowsOfArchitectures}
            columns={columnsOfArchitectures}
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
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography variant="h4">Admin GPU Models Table</Typography>
        <Button variant="contained" color="primary" fullWidth onClick={() => {}} sx={{ my: 2 }}>
          Add New GPU Models
        </Button>
        <Stack width="100%" height={712} pt={2}>
          <DataGrid
            rows={rowsOfGpuModels}
            columns={columnsOfGpuModels}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 6,
                },
              },
            }}
            pageSizeOptions={[10, 5]}
            checkboxSelection={false}
            disableRowSelectionOnClick
          />
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Typography variant="h4">Admin TDPs Table</Typography>
        <Button variant="contained" color="primary" fullWidth onClick={() => {}} sx={{ my: 2 }}>
          Add New TDPs
        </Button>
        <Stack width="100%" height={712} pt={2}>
          <DataGrid
            rows={rowsOfTDPs}
            columns={columnsOfTDPs}
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
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Typography variant="h4">Admin VRAM Types Table</Typography>
        <Button variant="contained" color="primary" fullWidth onClick={() => {}} sx={{ my: 2 }}>
          Add New VRAM Types
        </Button>
        <Stack width="100%" height={712} pt={2}>
          <DataGrid
            rows={rowsOfVRAMTypes}
            columns={columnsOfVRAMTypes}
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
        </Stack>
      </CustomTabPanel>
    </Box>
  );
};
