import useProducts from '../context/products';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Grid,
    MenuItem,
    Paper,
    Typography
} from '@mui/material';
import Form from '../utils/Form';
import Input, { SelectInput } from '../utils/Form/Input';

import { ExpandMoreRounded } from '@mui/icons-material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Products() {
    const list = useProducts();
    const [products, setProducts] = useState(list);

    return (
        <Grid
            container
            sx={{
                mt: 2,
                minHeight: 1,

                display: 'flex',
                alignItems: 'flex-start'
            }}
        >
            <Grid
                item
                xs={12}
                md={4}
                sx={{
                    position: 'sticky',
                    top: 0
                }}
            >
                <Form
                    action={async ({ min, max, category }) =>
                        setProducts(
                            list.filter(
                                ({ category: { name }, price }) =>
                                    (!category ||
                                        category === name.toLowerCase()) &&
                                    ((!min && !max) ||
                                        (!min && parseFloat(price) <= max) ||
                                        (!max && parseFloat(price) >= min) ||
                                        (parseFloat(price) >= min &&
                                            parseFloat(price) <= max))
                            )
                        )
                    }
                >
                    {() => (
                        <Box sx={{ p: 2 }}>
                            <Typography variant="h3">Filters</Typography>

                            <Accordion defaultExpanded sx={{ mt: 2 }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreRounded />}
                                >
                                    <Typography variant="subtitle1">
                                        Price
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Input
                                        name="min"
                                        label="min"
                                        rules={{ required: false }}
                                    />

                                    <Input
                                        name="max"
                                        label="max"
                                        rules={{ required: false }}
                                    />
                                </AccordionDetails>
                            </Accordion>

                            <Accordion defaultExpanded sx={{ mt: 2 }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreRounded />}
                                >
                                    <Typography variant="subtitle1">
                                        Category
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <SelectInput
                                        name="category"
                                        label="Select category"
                                        rules={{ required: false }}
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value="smartphones">
                                            Smartphones
                                        </MenuItem>
                                        <MenuItem value="smart tv">
                                            Smart TV
                                        </MenuItem>
                                        <MenuItem value="computers">
                                            Computers
                                        </MenuItem>
                                        <MenuItem value="stoves">
                                            Stoves
                                        </MenuItem>
                                    </SelectInput>
                                </AccordionDetails>
                            </Accordion>

                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="secondary"
                                sx={{ mt: 2 }}
                            >
                                Filter
                            </Button>
                        </Box>
                    )}
                </Form>
            </Grid>

            <Grid item xs={12} md={8}>
                <Form
                    action={async ({ search }) =>
                        setProducts(
                            list.filter(
                                ({ title }) =>
                                    title
                                        .toLowerCase()
                                        .indexOf(search.toLowerCase()) !== -1
                            )
                        )
                    }
                >
                    {() => <Input name="search" label="Search by name" />}
                </Form>

                {products.map(({ id, title, brand, price, images }, index) => (
                    <Paper
                        elevation={6}
                        sx={{
                            p: 2,
                            mx: { md: 4 },
                            mt: 2
                        }}
                        key={index}
                    >
                        <Grid container spacing={3}>
                            <Grid
                                component={NavLink}
                                to={'product/' + id}
                                item
                                xs={12}
                                md={6}
                                lg={4}
                                sx={{
                                    textAlign: 'center',
                                    textDecoration: 'none'
                                }}
                            >
                                <img
                                    src={images[0].url}
                                    alt={title}
                                    style={{
                                        height: '150px',
                                        maxWidth: '200px'
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6} lg={8}>
                                <Typography variant="h4">{title}</Typography>
                                <Typography variant="subtitle2">
                                    {brand}
                                </Typography>

                                <Typography variant="body1" sx={{ mt: 3 }}>
                                    <strong>${price}</strong>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </Grid>
        </Grid>
    );
}
