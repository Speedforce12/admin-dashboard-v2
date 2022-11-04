import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    minWidth: 150,
    flex: 1,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    minWidth: 150,
    flex:1,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    minWidth: 110,
    flex:1,
    editable: true,
  }

];

const rows = [
  { id: 1, lastName: "Snow" ,age: 35 },
  { id: 2, lastName: "Lannister", age: 42 },
  { id: 3, lastName: "Lannister",  age: 45 },
  { id: 4, lastName: "Lannister",  age: 45 },
];


const List = () => {
    return (
      <div className="h-full w-full">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[4]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
      </div>
    );
};

export default List;
