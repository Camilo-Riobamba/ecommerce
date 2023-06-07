import useCart from '../context/shoppingCart';

import { Alert, Grid, IconButton, Paper, Typography } from '@mui/material';

import { Delete } from '@mui/icons-material';

export default function ShoppingCart() {
    const { products } = useCart();

    if (products.length === 0)
        return (
            <Paper elevation={6} sx={{ p: 4 }}>
                <Alert severity="warning">Shopping cart is empty.</Alert>
            </Paper>
        );

    return (
        <Paper elevation={6} sx={{ p: 4 }}>
            {products.map((product, index) => (
                <Grid
                    container
                    key={index}
                    sx={{
                        mt: 1,
                        p: 1,
                        pb: 3,
                        borderBottom: '1px solid #afafaf',
                        backgroundColor: 'whites.main',
                        display: 'flex'
                    }}
                >
                    <Grid item xs={5} md={4}>
                        <img
                            src={product.images[0].url}
                            alt={product.title}
                            style={{ height: '100px' }}
                        />
                    </Grid>
                    <Grid item xs={7} md={8} sx={{ flexGrow: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            {product.title}
                        </Typography>
                        <Typography variant="body2">
                            ${product.price}
                        </Typography>
                        <Grid container justifyContent="space-between">
                            <Grid
                                item
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}
                            >
                                <Typography variant="subtitle1">
                                    <strong>Quantity:</strong>{' '}
                                    {product.quantity}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </Paper>
    );
}
