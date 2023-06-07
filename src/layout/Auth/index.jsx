import { useMediaQuery } from '@mui/material';

import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import background from '../../assets/img/background-side-section.png';

export default function Auth() {
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <Box
            sx={{
                minHeight: '100vh',

                ...(isLargeScreen && {
                    display: 'flex',

                    '& > div': {
                        maxWidth: '60%'
                    }
                })
            }}
        >
            <Box
                sx={{
                    flex: '1 0 auto',
                    minWidth: '260px',
                    ...(isLargeScreen && {
                        position: 'sticky',
                        top: 0
                    }),

                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover'
                }}
            />

            <Box
                sx={{
                    flex: '1 0 auto',
                    minWidth: '260px',
                    ...(isLargeScreen && {
                        position: 'sticky',
                        top: 0
                    }),

                    padding: {
                        xs: 2,
                        md: 4
                    },

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}
