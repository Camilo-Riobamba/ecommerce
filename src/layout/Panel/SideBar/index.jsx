import { useTheme } from '@emotion/react';
import { styled, useMediaQuery } from '@mui/material';

import pages from '../../../config/pages/panel';

import { Box } from '@mui/material';
import Menu from './Menu';
import Title from './Title';

const Drawer = styled(Box)(({ theme, open }) => ({
    height: '100vh',
    position: 'sticky',
    top: 0,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),

    padding: theme.spacing(3),

    ...(open && {
        minWidth: '260px',

        '& > div': {
            width: '100%'
        }
    }),

    ...(!open && {
        height: 'fit-content',
        top: theme.spacing(2),
        padding: theme.spacing(2)
    })
}));

export default function SideBar({ open, onClick }) {
    const isLargeScreen = useMediaQuery(useTheme().breakpoints.up('md'));

    if (!isLargeScreen && !open) return null;

    return (
        <Drawer
            open={open}
            sx={{
                ...(!isLargeScreen && {
                    position: 'fixed',
                    zIndex: 10,
                    top: 0,
                    left: 0,
                    maxWidth: '100%',
                    background: '#fff'
                })
            }}
        >
            <Title open={open} toggleSideBar={onClick}>
                Ecommerce
            </Title>

            <Box
                component="nav"
                sx={{
                    flexGrow: 1,

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',

                    ...(open && {
                        width: '100%'
                    }),

                    ...(!open && {
                        p: 1,
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        borderRadius: '10px',

                        '& .MuiListItemButton-root': {
                            justifyContent: 'center'
                        },

                        '& .MuiListItemText-root': {
                            display: 'none'
                        },

                        '& .MuiListItemIcon-root': {
                            minWidth: 0,
                            marginRight: 0,
                            color: 'inherit'
                        }
                    })
                }}
            >
                <Menu items={pages} />
            </Box>
        </Drawer>
    );
}
