import React from 'react'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";

const SearchBox = () => {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <FormControl variant="standard" sx={{
                width: '320px',
                maxWidth: '100%',
                backgroundColor: '#E5E5E5',
                padding: '5px 16px 5px',
                borderRadius: '12px',
                margin: 0
            }}>
                <Input
                    placeholder='Search Anything'
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start" sx={{ pr: 1 }}>
                            <BsThreeDotsVertical />
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <IoSearchSharp style={{ width: '20px', height: '20px' }} />
                        </InputAdornment>
                    }
                    disableUnderline
                    sx={{
                        '& input::placeholder': {
                            color: '#6B6262',
                            fontSize: '14px'
                        }
                    }}
                />
            </FormControl>
        </Box>
    )
}

export default SearchBox
