import { DataGrid } from "@mui/x-data-grid";
import { Stack } from "@mui/material";
import { columns, rows } from "../../constants.tsx";
import { useNavigate } from "react-router-dom";

type Props = {
  data: typeof rows;
};

export const GraphicCardsTable = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <Stack sx={{ py: 5 }} width="100%" height={712}>
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
        onCellClick={({ row }) => navigate(`/${row.id}/card`)}
        pageSizeOptions={[10, 5]}
        checkboxSelection={false}
        disableRowSelectionOnClick
      />
    </Stack>
  );
};
