import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ProfileImg from '../assets/profile.png'
import { Typography } from '@mui/material';
import { RxCaretDown } from "react-icons/rx";

const UserProfile = () => {
    return (
        <>
            <Stack sx={{ ml: 2 }} direction="row" spacing={2} alignItems='center'>
                <Avatar
                    alt="Profile Image"
                    src={ProfileImg}
                    sx={{ width: 45, height: 45 }}
                    variant="rounded"
                />
                <Typography sx={{ fontWeight: 500 }}>Behzad</Typography>
                <RxCaretDown color='#9F9999' style={{ width: '25px', height: '25px', marginLeft: '8px' }} />
            </Stack>
        </>
    )
}

export default UserProfile