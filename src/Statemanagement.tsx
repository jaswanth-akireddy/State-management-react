import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { Box, Checkbox, createTheme, CssBaseline, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { BiInfoCircle } from "react-icons/bi";
import { Stack } from "@mui/system";
import { useState } from "react";
// import { dark } from "@mui/material/styles/createPalette";
// import { orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status: {
      danger?: string;
    };
  }
}
const theme = createTheme({
  status: {
    danger: orange[500],
  },
  spacing: 4,
  shape: {
    borderRadius: 5,
  },
  typography: {
    subtitle1: {
      fontFamily: "Raleway",
      fontSize: 13,
    },
    body1: {
      fontSize: 20,
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#b388ff",
    },
    secondary: {
      main: "#311b92",
    },
    warning: {
      main: "#2e2c2c",
    },
    error: {
      main: "rgba(179, 136, 255,0.2)",
    },
    success: {
      main: "#9e9e9e",
    },
  },
});
function createData(
  id: string,
  name: string,
  Type: string,
  Perpayment: string,
  TermLength: string,
  Payment: number,
  percentage: string
) {
  return { id, name, Type, Perpayment, TermLength, Payment, percentage };
}

const rows = [
  createData("Contact_1", "Contact 1", "Monthly", "12000.25", "12 months", 1260000, "12.0% fee"),
  createData("Contact_6", "Contact 6", "Monthly", "6000.00", "12 months", 630000, "12.0% fee"),
  createData("Contact_5", "Contact 5", "Monthly", "6000.00", "12 months", 630000, "12.0% fee"),
  createData("Contact_4", "Contact 4", "Monthly", "6000.00", "12 months", 630000, "12.0% fee"),
  createData("Contact_3", "Contact 3", "Monthly", "6000.00", "12 months", 630000, "12.0% fee"),
  createData("Contact_2", "Contact 2", "Monthly", "6000.00", "12 months", 630000, "12.0% fee"),
];

export default function Statemanagement(): JSX.Element {
  const [check, setcheck] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box py={9} sx={{ backgroundColor: "#201E1E", width: "100%" }}>
        <Stack direction="row" spacing={4} alignItems="center">
          <Typography variant="h4" sx={{ paddingLeft: "50px", color: "white" }} component="h4">
            Your Contacts{" "}
          </Typography>
          <BiInfoCircle style={{ color: "gray", fontSize: "25px" }} />
        </Stack>
        <TableContainer
          sx={{
            width: "80%",
            marginTop: "30px",
            marginLeft: "50px",
            borderRadius: "15px",
            backgroundColor: "warning.dark",
          }}
        >
          <Table aria-label="simple table" sx={{ borderSpacing: "0", borderColor: "none" }}>
            <CssBaseline />
            <TableHead>
              <TableRow sx={{ bgcolor: "warning.main" }}>
                <TableCell sx={{ color: "white", fontSize: "25px", border: "none" }}>
                  <MdOutlineIndeterminateCheckBox />
                </TableCell>
                <TableCell sx={{ color: "gray", border: "none" }}>Name</TableCell>
                <TableCell sx={{ color: "gray", border: "none" }}>Type</TableCell>
                <TableCell sx={{ color: "gray", border: "none" }}>Per Payment</TableCell>
                <TableCell sx={{ color: "gray", border: "none" }}>Term length</TableCell>
                <TableCell sx={{ color: "gray", border: "none" }}>Payment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  id={row.id}
                  style={{ backgroundColor: check ? "rgba(179, 136, 255,0.2)" : "#201E1E" }}
                  sx={{ border: "none", "&:hover": { bgcolor: "error.main" } }}
                >
                  <TableCell sx={{ color: "white", border: "none" }}>
                    <Checkbox
                      sx={{ outline: "white", borderRadius: "10px", accentColor: "primary.dark" }}
                      onClick={() => {
                        console.log(check);
                        setcheck(!check);
                        console.log(check);
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: "white", border: "none" }}>{row.name}</TableCell>
                  <TableCell sx={{ color: "gray", border: "none" }}>{row.Type}</TableCell>
                  <TableCell sx={{ color: "gray", border: "none" }}>{row.Perpayment}</TableCell>
                  <TableCell sx={{ color: "gray", border: "none" }}>
                    {row.TermLength}
                    <Typography variant="subtitle1">{row.percentage}</Typography>
                  </TableCell>

                  <TableCell sx={{ color: "gray", border: "none" }}>$ {row.Payment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
}
