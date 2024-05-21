import { DataGrid } from "@mui/x-data-grid";
import { Stack } from "@mui/material";
import { columns, rows } from "../../constants.ts";

type Props = {
  data: typeof rows;
};

export const GraphicCardsTable = ({ data }: Props) => {
  return (
    <Stack sx={{ py: 5 }} width="100%">
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
        onCellClick={({ row }) => console.log(row.id)}
        pageSizeOptions={[10, 5]}
        checkboxSelection={false}
        disableRowSelectionOnClick
      />
    </Stack>
  );
};
