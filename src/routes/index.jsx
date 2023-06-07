import useSession from '../context/Session';

import {
    NavLink,
    Navigate,
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom';
import { Box, Container, Paper, Typography } from '@mui/material';

import panel from '../config/pages/panel';
import auth from '../config/pages/auth';

import Panel from '../layout/Panel';
import Auth from '../layout/Auth';
import Home from '../layout/Home';
import Shop from '../components/Shop';
import Products from '../components/Products';

export default function Routes() {
    const [user] = useSession();

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: (
                <Container sx={{ textAlign: 'center' }}>
                    <Typography variant="h1">
                        An error occurred while loading the page
                    </Typography>
                </Container>
            ),

            children: [
                { path: '', element: <Products /> },
                { path: 'product/:id', element: <Shop /> }
            ]
        },

        {
            path: 'purchases',
            element: user ? (
                <Panel initial={panel.dashboard} />
            ) : (
                <Navigate to="/unauthorized" />
            ),

            children: Object.values(panel).map(({ route }) => route)
        },

        {
            path: 'auth',
            element: !user ? <Auth /> : <Navigate to="/purchases" />,

            children: Object.values(auth).map((v) => v.route)
        },

        {
            path: 'unauthorized',
            element: (
                <Box
                    sx={{
                        minHeight: '100vh',

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Paper
                        elevation={6}
                        sx={{
                            p: 3,

                            color: 'white',
                            backgroundColor: 'primary.main'
                        }}
                    >
                        <Typography>
                            You must log in to access.{' '}
                            <NavLink to="/auth" style={{ color: '#fff' }}>
                                Click here to log in
                            </NavLink>
                        </Typography>
                    </Paper>
                </Box>
            )
        }
    ]);

    return <RouterProvider router={router} />;
}
