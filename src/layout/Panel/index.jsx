import { useState } from 'react';
import PageProvider from '../../context/PageProvider';
import { Container, useMediaQuery } from '@mui/material';

import { Box } from '@mui/material';
import Content from './Content';
import SideBar from './SideBar';
import AppBar from './AppBar';

export default function Panel({ initial }) {
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const [sideBar, setSideBar] = useState({ open: isLargeScreen });
    const toggleSideBar = () => {
        setSideBar({
            open: !sideBar.open
        });
    };

    return (
        <PageProvider initial={initial}>
            <Box
                sx={{
                    minHeight: '100vh',
                    display: {
                        md: 'flex'
                    }
                }}
            >
                <SideBar open={sideBar.open} onClick={toggleSideBar} />

                <Container
                    sx={{
                        width: {
                            md: 'min-content'
                        },
                        flex: '1 0 auto',
                        p: {
                            xs: 0,
                            md: 2
                        }
                    }}
                >
                    <AppBar menu={!isLargeScreen ? toggleSideBar : null} />
                    <Content />
                </Container>
            </Box>
        </PageProvider>
    );
}
