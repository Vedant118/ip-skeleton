import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";


const columns = [
  { field: "reference", headerName: "CLIENT REF", headerClassName: 'custom-header' },
  { field: "account", headerName: "ACCOUNT #",headerClassName: 'custom-header'  },
  { field: "title", headerName: "TITLE",headerClassName: 'custom-header'  },
  { field: "applicant", headerName: "APPLICANT",headerClassName: 'custom-header'  },
  {
    field: "ip",
    headerName: "IP NUMBER",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (params) => `${params.row.ip || ""}`,
    headerClassName: 'custom-header' 
  },
  { field: "country", headerName: "COUNTRY",headerClassName: 'custom-header'  },
  { field: "ip_type", headerName: "IP TYPE",headerClassName: 'custom-header'  },
  { field: "year", headerName: "RENEWAL YEAR",headerClassName: 'custom-header'  },
  { field: "date", headerName: "LAPSE DATE",headerClassName: 'custom-header'  },
  { field: "cost", headerName: "EST. COST",headerClassName: 'custom-header'  },
  { field: "action", headerName: "ACTION",headerClassName: 'custom-header'  },
];

const rows = [
  {
    id: 1,
    reference: "#0000001",
    account: "#AW12345",
    title: "Title of IP comes here",
    applicant: "Sarah K, Jane B",
    ip: "#13579AB",
    country: "UNITED STATES",
    ip_type: "PATENT",
    year: "Year 1",
    date: "12th Dec 2024",
    cost: "$XXXX.XX",
    action: "Renew",
  },
  {
    id: 2,
    reference: "#0000002",
    account: "#AW12346",
    title: "Another Title of IP",
    applicant: "John D, Lisa M",
    ip: "#24680CF",
    country: "UNITED KINGDOM",
    ip_type: "TRADEMARK",
    year: "Year 2",
    date: "15th Jan 2025",
    cost: "$YYYY.YY",
    action: "Renew",
  },
  {
    id: 3,
    reference: "#0000003",
    account: "#AW12347",
    title: "Yet Another IP Title",
    applicant: "Mike S, Emily R",
    ip: "#ACE135",
    country: "CANADA",
    ip_type: "COPYRIGHT",
    year: "Year 3",
    date: "20th Feb 2026",
    cost: "$ZZZZ.ZZ",
    action: "Renew",
  },
  {
    id: 4,
    reference: "#0000004",
    account: "#AW12323",
    title: "Yet Another IP Title",
    applicant: "Emma W, Miley C",
    ip: "#ACE135",
    country: "SPAIN",
    ip_type: "PATENT",
    year: "Year 3",
    date: "20th Feb 2024",
    cost: "$ZZZZ.ZZ",
    action: "Renew",
  },
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
  const update = () => {
    // var cDiv = pDiv?.children;
    // var dDiv = cDiv && cDiv[0];
    // var eDiv = dDiv?.children;
    // eDiv[0].style.margin = '50px'
    let pDiv = document.getElementById("dataGridId");
    if (pDiv) {
      var cDiv = pDiv.children;
      cDiv[0].style.margin = "50px"; //do styling here
    }
  };

  return (
    <div id={"dataGridId"}>
      <Box style={{ height: 400, width: "100%", overflowX: "hidden" }}>
        <DataGrid
          rows={rows}
          columns={dynamicColumns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection
          getRowClassName={(params) => {
            return params.row.id % 2 === 0 ? "even-row" : "odd-row";
          }}
        />
      </Box>
    </div>
  );
}
