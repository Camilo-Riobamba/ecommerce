import usePage from '../../context/page';

import { Box, Paper, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import headerImage from '../../assets/img/header.jpg';

export default function Content() {
    const { current } = usePage();

    return (
        <Box component="section" sx={{ px: 2 }}>
            <Paper
                component="header"
                elevation={6}
                sx={{
                    p: 5,
                    pb: 10,
                    mb: -5,

                    backgroundImage: `url(${headerImage})`,
                    backgroundSize: 'cover',

                    color: '#fff'
                }}
            >
                <Typography variant="h2">{current.meta.title}</Typography>
            </Paper>

            <Box component="section" sx={{ px: { xs: 1, md: 2 } }}>
                <Outlet />
            </Box>
        </Box>
    );
}
