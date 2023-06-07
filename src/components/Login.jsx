import useSession from '../context/Session';

import axios from 'axios';

import { NavLink } from 'react-router-dom';
import {
    Link,
    Box,
    Typography,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Alert
} from '@mui/material';
import { EmailInput } from '../utils/Form/Input';
import Form from '../utils/Form';

export default function Login() {
    const [user, setUser] = useSession();

    return (
        <Form
            action={async ({ email }) => {
                await axios
                    .get(
                        'https://e-commerce-api-v2.academlo.tech/api/v1/users',
                        {
                            headers: {
                                Authorization:
                                    'Bearer ' +
                                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNTIyLCJmaXJzdE5hbWUiOiJhbmRyZXMiLCJsYXN0TmFtZSI6Ik1lbmRvemEiLCJlbWFpbCI6ImFuZHJlc0BnbWFpbC5jb20iLCJwaG9uZSI6IjEyMzQ1Njc4OTAiLCJjcmVhdGVkQXQiOiIyMDIzLTAyLTAxVDAzOjE0OjQ4LjI5NVoiLCJ1cGRhdGVkQXQiOiIyMDIzLTAyLTAxVDAzOjE0OjQ4LjI5NVoifSwiaWF0IjoxNjc1MzYxODkwfQ.ZRIVLai2-aAqHln27EuGnnaW-waLWi-kPUwwW-lB0Bs'
                            }
                        }
                    )
                    .then((result) => {
                        const user = result.data.find(
                            (user) => user.email === email
                        );

                        if (user) setUser(user.firstName);

                        throw new Error('The user could not be found');
                    });
            }}
            sx={{
                maxWidth: '400px'
            }}
        >
            {({ control }, status) => (
                <>
                    <Box
                        sx={{
                            mb: 6
                        }}
                    >
                        <Typography variant="h1">Log in</Typography>
                        <Typography variant="body1">
                            Welcome back! Please enter your data.
                        </Typography>
                    </Box>

                    <Box>
                        <EmailInput control={control} />

                        <Grid
                            container
                            sx={{
                                my: 2,
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Grid item>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Remember me"
                                    />
                                </FormGroup>
                            </Grid>
                            <Grid item>
                                <Link
                                    component={NavLink}
                                    variant="body1"
                                    underline="always"
                                >
                                    Forgot your password?
                                </Link>
                            </Grid>
                        </Grid>

                        {status.error && (
                            <Alert severity="error" sx={{ my: 1 }}>
                                {status.error}
                            </Alert>
                        )}

                        {status.success && (
                            <Alert severity="success" sx={{ my: 1 }}>
                                You have successfully logged in.
                            </Alert>
                        )}

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                mb: 1,
                                p: 1
                            }}
                        >
                            Log in
                        </Button>
                        <Button variant="outlined" fullWidth sx={{ p: 1 }}>
                            Register
                        </Button>

                        {status.loading && (
                            <Typography variant="caption">
                                loading...
                            </Typography>
                        )}
                    </Box>
                </>
            )}
        </Form>
    );
}
