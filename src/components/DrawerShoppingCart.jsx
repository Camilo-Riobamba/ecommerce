import useShoppingCart from '../context/shoppingCart';

import {
    Alert,
    Box,
    Button,
    Divider,
    Drawer,
    Grid,
    IconButton,
    Typography
} from '@mui/material';

import { CloseRounded, Delete } from '@mui/icons-material';

export default function DrawerShoppingCart({ open, handler }) {
    const { products, removeProduct } = useShoppingCart();

    return (
        <Drawer
            open={open}
            onClose={() => handler(false)}
            keepMounted
            anchor="right"
            PaperProps={{
                sx: {
                    minWidth: {
                        xs: 200,
                        md: 400
                    },
                    maxWidth: 400,
                    p: 2
                }
            }}
        >
            <IconButton
                onClick={() => handler(false)}
                sx={{ position: 'absolute', right: 10, top: 10 }}
            >
                <CloseRounded />
            </IconButton>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Shopping cart
            </Typography>

            {products.length ? (
                <Box>
                    {products.map((product, index) => (
                        <Grid
                            container
                            key={index}
                            sx={{
                                mt: 1,
                                p: 1,
                                backgroundColor: 'whites.main',
                                display: 'flex'
                            }}
                        >
                            <Grid
                                item
                                xs={5}
                                md={4}
                                sx={{ textAlign: 'center' }}
                            >
                                <img
                                    src={product.images[0].url}
                                    alt={product.title}
                                    style={{ height: '100px' }}
                                />
                            </Grid>
                            <Grid item xs={7} md={8} sx={{ flexGrow: 1 }}>
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 'bold' }}
                                >
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
                                    <Grid item>
                                        <IconButton
                                            onClick={() =>
                                                removeProduct(product)
                                            }
                                        >
                                            <Delete />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}

                    <Divider sx={{ my: 2 }} />

                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Typography variant="body1">
                                <strong>Total:</strong>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                $
                                {products.reduce(
                                    (sum, product) =>
                                        sum + parseInt(product.price),
                                    0
                                )}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{ mt: 4 }}
                    >
                        Pay now
                    </Button>
                </Box>
            ) : (
                <Alert severity="warning">Shopping cart is empty.</Alert>
            )}
        </Drawer>
    );
}
