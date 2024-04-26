import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const headerClass = {
  backgroundColor: "#2196f3",
  color: "#fff",
};

const columns = [
  { field: "reference", headerName: "CLIENT REF" },
  { field: "account", headerName: "ACCOUNT #" },
  { field: "title", headerName: "TITLE" },
  { field: "applicant", headerName: "APPLICANT" },
  { field: "ip", headerName: "IP NUMBER",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (params) => `${params.row.ip || ""}`
  },
  { field: "country", headerName: "COUNTRY" },
  { field: "ip_type", headerName: "IP TYPE" },
  { field: "year", headerName: "RENEWAL YEAR" },
  { field: "date", headerName: "LAPSE DATE" },
  { field: "cost", headerName: "EST. COST" },
  { field: "action", headerName: "ACTION" },
];

const rows = [
  { id: 1, reference: "#0000001", account: "#AW12345", title: "Title of IP comes here", applicant: "Sarah K, Jane B", ip: "#13579AB", country: "UNITED STATES", ip_type: "PATENT", year: 'Year 1', date: "12th Dec 2024", cost: "$XXXX.XX", action: "Renew" },
  { id: 2, reference: "#0000002", account: "#AW12346", title: "Another Title of IP", applicant: "John D, Lisa M", ip: "#24680CF", country: "UNITED KINGDOM", ip_type: "TRADEMARK", year: 'Year 2', date: "15th Jan 2025", cost: "$YYYY.YY", action: "Renew" },
  { id: 3, reference: "#0000003", account: "#AW12347", title: "Yet Another IP Title", applicant: "Mike S, Emily R", ip: "#ACE135", country: "CANADA", ip_type: "COPYRIGHT", year: 'Year 3', date: "20th Feb 2026", cost: "$ZZZZ.ZZ", action: "Renew" },
];

export default function RadioTable() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getColumnWidth = () => {
    const minWidth = 100;
    const numColumns = columns.length;
    const totalWidth = windowWidth - 20;

    return Math.max(minWidth, totalWidth / numColumns);
  };

  const dynamicColumns = columns.map((column) => ({
    ...column,
    width: column.field === "action" ? 90 : getColumnWidth(),
  }));

  return (
    <Box style={{ height: 400, width: "100%", overflowX: "hidden" }}> {/* Hide the horizontal scrollbar */}
      <DataGrid
        rows={rows}
        columns={dynamicColumns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        checkboxSelection
        headerClassName={headerClass}
      />
    </Box>
  );
}
