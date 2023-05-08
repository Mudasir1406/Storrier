import { useState } from "react";
import {
  TableContainer,
  Paper,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Pagination from "@mui/material/Pagination";
import { Table } from "../components";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { RxCaretSort } from "react-icons/rx";

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

const SearchHistoryPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setPage(1);
  };

  const filteredHistory = searchHistory.filter((history) =>
    history.query.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between', flexDirection: "row" }}
      >
        <Box style={{ minWidth: 40 }} sx={{ mr: 2, margin: 3, marginBottom: '10px' }}>
          <Typography
            variant="h5"
            sx={{ mr: 2, display: "flex", alignSelf: "flex-start", margin: 3, marginBottom: '10px' }}
          >
            History
          </Typography>
          <FormControl sx={{ mr: 2, margin: 3, marginTop: '0' }} fullWidth variant="standard" className="custom_select_box">
            <Typography sx={{ color: 'grey', fontSize: '13px' }}>Show</Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Sort"
              defaultValue={10}
              sx={{
                border: "none !important",
              }}
              IconComponent={() => (
                <RxCaretSort style={{ width: '25px', height: '25px' }} />
              )}
              className="sort_list carListingSort"
            >
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="25">25</MenuItem>
              <MenuItem value="50">50</MenuItem>
            </Select>
            <Typography sx={{ color: 'grey', fontSize: '13px' }}>entries</Typography>
          </FormControl>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "flex-end", flexDirection: "column", margin: 3, }}
        >
          <Typography
            variant="p"
            sx={{ mr: 2, textAlign: 'right' }}
          >
            Search
          </Typography>
          <TextField
            id="search-query"
            variant="standard"
            value={searchQuery}
            onChange={handleSearch}
            sx={{
              width: "100%",
              display: "flex",
              alignSelf: "flex-start",
              marginTop: '10px'
            }}
          />
        </Box>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          mt: 2,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: 3,
        }}
      >
        <Table
          history={filteredHistory}
          page={page}
          rowsPerPage={rowsPerPage}
          isMobile={isMobile}
        />
        <Box sx={{ display: "flex", alignSelf: "flex-end", mt: 2 }}>
          <Pagination
            count={Math.ceil(filteredHistory.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
            sx={{ mr: 2 }}
          />
        </Box>
      </TableContainer>
    </Box>
  );
};

export default SearchHistoryPage;
