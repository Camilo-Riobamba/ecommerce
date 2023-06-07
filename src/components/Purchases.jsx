import { useEffect, useState } from 'react';
import axios from 'axios';

import { Alert, CircularProgress, Paper, Typography } from '@mui/material';

export default function Purchases() {
    const [purchases, setPurchases] = useState('loading');
    useEffect(() => {
        axios
            .get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', {
                headers: {
                    Authorization:
                        'Bearer ' +
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNTIyLCJmaXJzdE5hbWUiOiJhbmRyZXMiLCJsYXN0TmFtZSI6Ik1lbmRvemEiLCJlbWFpbCI6ImFuZHJlc0BnbWFpbC5jb20iLCJwaG9uZSI6IjEyMzQ1Njc4OTAiLCJjcmVhdGVkQXQiOiIyMDIzLTAyLTAxVDAzOjE0OjQ4LjI5NVoiLCJ1cGRhdGVkQXQiOiIyMDIzLTAyLTAxVDAzOjE0OjQ4LjI5NVoifSwiaWF0IjoxNjc1MzYxODkwfQ.ZRIVLai2-aAqHln27EuGnnaW-waLWi-kPUwwW-lB0Bs'
                }
            })
            .then((results) => setPurchases(results.data))
            .catch(() => setPurchases(null));
    }, []);

    if (purchases === 'loading')
        return (
            <Paper elevation={6} sx={{ p: 4 }}>
                <CircularProgress />
            </Paper>
        );

    if (purchases === null)
        return (
            <Paper elevation={6} sx={{ p: 4 }}>
                <Alert severity="error">
                    Something was wrong while getting the purchases.
                </Alert>
            </Paper>
        );

    return (
        <Paper
            elevation={6}
            sx={{
                p: 4
            }}
        >
            {purchases.length === 0 && (
                <Alert severity="warning">
                    You don&apos;t have any purchases.
                </Alert>
            )}

            {purchases.length > 0 && (
                <Typography variant="body1">
                    Como no habia ninguna compra no entendia como debia hacer
                    esta pagina jaj
                </Typography>
            )}
        </Paper>
    );
}
