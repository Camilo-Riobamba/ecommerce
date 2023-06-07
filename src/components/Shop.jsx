import { useEffect, useState } from 'react';
import useProducts from '../context/products';
import useShoppingCart from '../context/shoppingCart';

import {
    Alert,
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Paper,
    Snackbar,
    Stack,
    ToggleButton,
    Typography
} from '@mui/material';
import { Link, NavLink, useParams } from 'react-router-dom';

import { Add, ArrowBack, Remove } from '@mui/icons-material';

export default function Shop() {
    const { addProduct } = useShoppingCart();
    const [added, setAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const products = useProducts();

    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));
    const [image, setImage] = useState(product?.images[0].url);
    useEffect(() => setImage(product?.images[0].url), [product]);

    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
        setRelatedProducts(
            products
                .filter(
                    ({ category, id }) =>
                        category.name === product.category.name &&
                        id !== product.id
                )
                .slice(0, 3)
        );

        setQuantity(1);
    }, [id]);

    if (!product) return 'The product is not available.';

    return (
        <Container sx={{ p: { xs: 2, md: 5 } }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                }}
            >
                <ArrowBack />
                <Link component={NavLink} to="/">
                    Ecommerce
                </Link>
            </Box>

            <Box
                component="section"
                sx={{
                    mt: 2,
                    mb: 6,
                    display: 'flex',
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                    gap: 4
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',

                        mt: 2,
                        flexBasis: '60%',
                        order: {
                            xs: 2,
                            md: 1
                        },
                        flexGrow: 1
                    }}
                >
                    <Typography component="h1" variant="h3" mb={2}>
                        {product.title}
                    </Typography>

                    <Typography variant="h2" mb={4}>
                        ${product.price}
                    </Typography>

                    <Typography variant="body1" mb={1}>
                        {product.description}
                    </Typography>

                    <Grid container sx={{ mt: 2, mb: 2 }}>
                        <Grid item xs={6} md={8}>
                            <Typography component="span" variant="h6">
                                Colors
                            </Typography>
                            <Grid container sx={{ my: 1 }}>
                                <Grid
                                    item
                                    sx={{
                                        p: 2,
                                        backgroundColor: 'primary.main',
                                        borderRadius: '1000px',
                                        mr: 1
                                    }}
                                />

                                <Grid
                                    item
                                    sx={{
                                        p: 2,
                                        backgroundColor: 'secondary.main',
                                        borderRadius: '1000px'
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            md={4}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                gap: 1
                            }}
                        >
                            <IconButton
                                onClick={() => setQuantity((prev) => prev - 1)}
                                disabled={quantity === 1}
                                size="small"
                            >
                                <Remove />
                            </IconButton>
                            <Typography variant="body1">{quantity}</Typography>
                            <IconButton
                                onClick={() => setQuantity((prev) => prev + 1)}
                                size="small"
                            >
                                <Add />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 2, mb: 4 }}>
                        <Stack direction="row" gap={2} flexWrap="wrap">
                            {product.images.map((img, index) => (
                                <ToggleButton
                                    key={index}
                                    value="check"
                                    selected={image === img.url}
                                    onChange={() => setImage(img.url)}
                                    sx={{
                                        p: 2,
                                        flexBasis: '50px'
                                    }}
                                >
                                    <img
                                        src={img.url}
                                        alt={product.title}
                                        style={{ height: '75px' }}
                                    />
                                </ToggleButton>
                            ))}
                        </Stack>
                    </Box>

                    <Box>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                addProduct({ ...product, quantity });

                                setAdded(true);
                            }}
                            sx={{
                                width: {
                                    xs: '100%',
                                    md: 'auto'
                                }
                            }}
                        >
                            Add to cart
                        </Button>
                    </Box>

                    <Snackbar
                        open={added}
                        autoHideDuration={6000}
                        onClose={(event, reason) => {
                            if (reason === 'clickaway') {
                                return;
                            }

                            setAdded(false);
                        }}
                    >
                        <Alert severity="success">
                            The product has been added successfully, check the
                            shopping cart.
                        </Alert>
                    </Snackbar>
                </Box>
                <Paper
                    elevation={6}
                    sx={{
                        p: 2,
                        ml: 20,
                        flexGrow: 1,
                        flexBasis: '40%',
                        order: {
                            xs: 1,
                            md: 2
                        },

                        backgroundColor: 'secondary.main'
                    }}
                >
                    <Box sx={{ ml: -20, height: { xs: 'auto', md: '400px' } }}>
                        <Paper
                            elevation={6}
                            component="img"
                            src={image}
                            alt={product.title}
                            sx={{
                                p: 2,
                                maxWidth: '100%',
                                maxHeight: '100%',
                                height: 'auto',
                                display: 'inline-block'
                            }}
                        />
                    </Box>
                </Paper>
            </Box>

            <Box component="section" sx={{ mb: 10 }}>
                <Typography component="h2" variant="h3" sx={{ mb: 2 }}>
                    Related products
                </Typography>
                <Grid container spacing={2}>
                    {products &&
                        relatedProducts.map((product, index) => (
                            <Grid item xs={12} md="auto" key={index}>
                                <Paper
                                    component={NavLink}
                                    to={'/product/' + product.id}
                                    elevation={4}
                                    sx={{
                                        p: 2,
                                        display: 'block',

                                        flexBasis: {
                                            xs: 150,
                                            md: 250
                                        },

                                        textDecoration: 'none',
                                        backgroundColor: 'whites.main',
                                        '&:hover': {
                                            boxShadow: 12
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: '#fff',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <img
                                            src={product.images[0].url}
                                            alt={product.title}
                                            style={{ height: '150px' }}
                                        />
                                    </Box>

                                    <Box sx={{ p: 2 }}>
                                        <Typography
                                            variant="body1"
                                            sx={{ fontWeight: 'bold' }}
                                        >
                                            {product.title}
                                        </Typography>

                                        <Grid container sx={{ my: 1 }}>
                                            <Grid
                                                item
                                                sx={{
                                                    p: 1,
                                                    backgroundColor:
                                                        'primary.main',
                                                    borderRadius: '1000px',
                                                    mr: 1
                                                }}
                                            />

                                            <Grid
                                                item
                                                sx={{
                                                    p: 1,
                                                    backgroundColor:
                                                        'secondary.main',
                                                    borderRadius: '1000px'
                                                }}
                                            />
                                        </Grid>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                textAlign: 'right',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            ${product.price}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </Container>
    );
}
