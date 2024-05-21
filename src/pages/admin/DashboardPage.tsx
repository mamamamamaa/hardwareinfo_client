import { ReactNode, SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { GraphicCardsTab } from "./tabs";

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
          <Tab label="Achitectures" {...a11yProps(1)} />
          <Tab label="Gpu Models" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <GraphicCardsTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Achitectures1
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Gpu Models1
      </CustomTabPanel>
    </Box>
  );
};
