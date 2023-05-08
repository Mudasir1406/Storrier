import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const searchHistory = [
  {
    id: 1,
    query: "React JS",
    date: "2022-04-01",
  },
  {
    id: 2,
    query: "Material UI",
    date: "2022-04-02",
  },
  {
    id: 3,
    query: "JavaScript",
    date: "2022-04-03",
  },
];

const SearchHistoryTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableContainer component={Paper} sx={{ width: "100%", mt: 3 }}>
      <Table aria-label="search history table" sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: "primary.main" }}>
          <TableRow>
            <TableCell
              sx={{
                color: "common.white",
                border: "1px solid rgba(224, 224, 224, 1)",
                borderBottom: 0,
              }}
            >
              Serial No.
            </TableCell>
            <TableCell
              sx={{
                color: "common.white",
                border: "1px solid rgba(224, 224, 224, 1)",
                borderBottom: 0,
              }}
            >
              {isMobile ? "Search" : "Search History"}
            </TableCell>
            <TableCell
              sx={{
                color: "common.white",
                border: "1px solid rgba(224, 224, 224, 1)",
                borderBottom: 0,
              }}
            >
              {isMobile ? "Date" : "Search Date"}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchHistory.map((history, index) => (
            <TableRow key={history.id}>
              <TableCell sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}>
                {index + 1}
              </TableCell>
              <TableCell sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}>
                {history.query}
              </TableCell>
              <TableCell sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}>
                {history.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SearchHistoryTable;
