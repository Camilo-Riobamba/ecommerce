import { Box, Skeleton, Avatar, Typography } from '@mui/material';

export default function ScreenLoader() {
    return (
        <Box
            sx={{
                height: '100vh',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box sx={{ maxWidth: '300px', width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ m: 1 }}>
                        <Skeleton variant="circular">
                            <Avatar />
                        </Skeleton>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Skeleton width="100%">
                            <Typography>.</Typography>
                        </Skeleton>
                    </Box>
                </Box>
                <Skeleton variant="rectangular" width="100%">
                    <Box sx={{ p: 5 }} />
                </Skeleton>
                <Skeleton variant="rectangular" width="100%">
                    <Box sx={{ p: 5, mt: 1 }} />
                </Skeleton>
            </Box>

            <Typography variant="body2" color="GrayText" sx={{ mt: 2 }}>
                Cargando...
            </Typography>
        </Box>
    );
}
