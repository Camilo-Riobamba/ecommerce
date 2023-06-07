import { useState } from 'react';

import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useMediaQuery,
    Box,
    Container,
    Paper
} from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

import {
    BrandingWatermarkRounded,
    LockOpenRounded,
    ShoppingCartRounded
} from '@mui/icons-material';
import background from '../../assets/img/home-background.png';
import DrawerShoppingCart from '../../components/DrawerShoppingCart';

export default function Home() {
    const [open, setOpen] = useState(false);

    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <Container sx={{ p: 5 }}>
            <DrawerShoppingCart open={open} handler={setOpen} />

            <Box
                sx={{
                    mb: 4,
                    minWidth: '200px',

                    ...(isLargeScreen && {
                        display: 'flex',

                        '& > div': {
                            maxWidth: '60%'
                        }
                    })
                }}
            >
                <Paper
                    elevation={6}
                    sx={{
                        flex: '5 0 auto',
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
                        flex: '2 0 auto',
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
                        flexDirection: 'column'
                    }}
                >
                    <Typography variant="h1">Ecommerce</Typography>
                    <Divider />

                    <Box sx={{ mt: 2 }}>
                        <List>
                            <ListItem>
                                <ListItemButton
                                    variant="navigation"
                                    component={NavLink}
                                    to="/purchases"
                                >
                                    <ListItemIcon>
                                        <BrandingWatermarkRounded />
                                    </ListItemIcon>
                                    <ListItemText>Purchases</ListItemText>
                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton
                                    variant="navigation"
                                    component={NavLink}
                                    to="/auth"
                                >
                                    <ListItemIcon>
                                        <LockOpenRounded />
                                    </ListItemIcon>
                                    <ListItemText>Log in</ListItemText>
                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton
                                    variant="navigation"
                                    onClick={() => setOpen(true)}
                                >
                                    <ListItemIcon>
                                        <ShoppingCartRounded />
                                    </ListItemIcon>
                                    <ListItemText>Cart</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>

            <Outlet />
        </Container>
    );
}
