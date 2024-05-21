// import {
//   FormControl,
//   InputLabel,
//   OutlinedInput,
//   Select,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
//
// export const GraphicCards = () => {
//   return (
//     <Stack sx={{ py: 5, px: 2 }}>
//       <Typography variant="h5" gutterBottom>
//         Graphic Cards
//       </Typography>
//
//       <Stack py={3} spacing={2}>
//         <Typography variant="h6" gutterBottom>
//           Search by:
//         </Typography>
//         <Stack direction="row" spacing={3}>
//           <TextField label="Search by Model Name" sx={{ width: 300 }} />
//           <TextField label="Search by Item Description" sx={{ width: 300 }} />
//         </Stack>
//       </Stack>
//
//       <Stack spacing={2}>
//         <Typography variant="h6" gutterBottom>
//           Filter by:
//         </Typography>
//         <Stack direction="row" gap={3} flexWrap="wrap">
//           {[
//             { label: "Vendor", options: ["All", "Nvidia", "AMD", "Intel"] },
//             { label: "Die Size", options: ["All", "Small", "Medium", "Large"] },
//             { label: "Architecture", options: ["All", "Turing", "Ampere", "RDNA"] },
//             { label: "GPU Model", options: ["All", "GTX 1080", "RTX 3080", "RX 580"] },
//             { label: "TDP", options: ["All", "Low", "Medium", "High"] },
//             { label: "VRAM Type", options: ["All", "GDDR5", "GDDR6", "HBM2"] },
//           ].map((filter, index) => (
//             <FormControl sx={{ width: 300 }} key={index}>
//               <InputLabel htmlFor={filter.label}>{filter.label}</InputLabel>
//               <Select
//                 native
//                 inputProps={{
//                   name: filter.label,
//                   id: filter.label,
//                 }}
//                 input={<OutlinedInput label={filter.label} />}>
//                 {filter.options.map((option, key) => (
//                   <option value={option} key={key}>
//                     {option}
//                   </option>
//                 ))}
//               </Select>
//             </FormControl>
//           ))}
//         </Stack>
//       </Stack>
//
//       {/*<GraphicCards />*/}
//     </Stack>
//   );
// };

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFilterGraphicCards } from "../../hooks";
import { GraphicCardsTable } from "../../components";
import { rows } from "../../constants.tsx";

export const GraphicCards = () => {
  const { filters, updateFilter, filteredData } = useFilterGraphicCards();

  return (
    <Stack sx={{ py: 5, px: 2 }}>
      <Stack py={3} spacing={2}>
        <Typography variant="h6" gutterBottom>
          Search by:
        </Typography>
        <Stack direction="row" spacing={3}>
          <TextField
            label="Search by Model Name"
            sx={{ width: 300 }}
            value={filters.modelName}
            onChange={(e) => updateFilter("modelName", e.target.value)}
          />
          <TextField
            label="Search by Item Description"
            sx={{ width: 300 }}
            value={filters.itemDescription}
            onChange={(e) => updateFilter("itemDescription", e.target.value)}
          />
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h6" gutterBottom>
          Filter by:
        </Typography>
        <Stack direction="row" gap={3} flexWrap="wrap">
          {[
            {
              name: "vendor",
              label: "Vendor",
              value: filters.vendor,
              options: ["All", "Nvidia", "AMD", "Intel"],
            },
            {
              name: "dieSize",
              label: "Die Size",
              value: filters.dieSize,
              options: ["All", "Small", "Medium", "Large"],
            },
            {
              name: "architecture",
              label: "Architecture",
              value: filters.architecture,
              options: ["All", "Pascal", "Ampere", "Polaris", "Turing", "RDNA", "RDNA 2", "Vega"],
            },
            {
              name: "gpuModel",
              label: "GPU Model",
              value: filters.gpuModel,
              options: [
                "All",
                "GTX 1080",
                "RTX 3080",
                "RX 580",
                "Vega 64",
                "RTX 2080 Ti",
                "GTX 1070",
                "RTX 3070",
                "RX 570",
                "GTX 1660",
                "RX 5600 XT",
                "RTX 3060",
                "GTX 1050 Ti",
                "RX 470",
                "RTX 3090",
                "RX 6800 XT",
              ],
            },
            {
              name: "tdp",
              label: "TDP",
              value: filters.tdp,
              options: [
                "All",
                "180W",
                "320W",
                "185W",
                "295W",
                "260W",
                "150W",
                "220W",
                "120W",
                "170W",
                "75W",
              ],
            },
            {
              name: "vramType",
              label: "VRAM Type",
              value: filters.vramType,
              options: ["All", "GDDR5X", "GDDR6X", "GDDR5", "HBM2", "GDDR6", "GDDR5"],
            },
          ].map((filter, index) => (
            <FormControl key={index} sx={{ width: 300 }}>
              <InputLabel htmlFor={filter.label}>{filter.label}</InputLabel>
              <Select
                native
                value={filter.value}
                onChange={(e) =>
                  updateFilter(filter.name, e.target.value === "All" ? "" : e.target.value)
                }
                inputProps={{
                  name: filter.label,
                  id: filter.label,
                }}
                input={<OutlinedInput label={filter.label} />}>
                {filter.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option === "All" ? "" : option}
                  </option>
                ))}
              </Select>
            </FormControl>
          ))}
        </Stack>
      </Stack>

      <GraphicCardsTable data={filteredData as typeof rows} />
    </Stack>
  );
};
