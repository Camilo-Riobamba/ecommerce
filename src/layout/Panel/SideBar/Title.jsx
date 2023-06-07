import { Box, Typography, ToggleButton, Link } from '@mui/material';

import { ChevronRightRounded, CloseRounded } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Title({ open, toggleSideBar, children }) {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    ...(!open && { display: 'none' })
                }}
            >
                <Link
                    component={NavLink}
                    to="/"
                    sx={{ textDecoration: 'none' }}
                >
                    {children}
                </Link>
            </Typography>
            <ToggleButton
                value="open"
                onChange={toggleSideBar}
                sx={{
                    ...(!open && {
                        width: '100%'
                    })
                }}
            >
                {open ? <CloseRounded /> : <ChevronRightRounded />}
            </ToggleButton>
        </Box>
    );
}
