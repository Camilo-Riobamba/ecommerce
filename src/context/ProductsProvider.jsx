import { useEffect, useState } from 'react';

import axios from 'axios';

import { products } from './products';
import ScreenLoader from '../components/ScreenLoader';
import { Alert, Container } from '@mui/material';

export default function ProductsProvider({ children }) {
    const [list, setList] = useState('loading');

    useEffect(() => {
        axios('https://e-commerce-api-v2.academlo.tech/api/v1/products')
            .then((result) => {
                setTimeout(() => setList(result.data), 1000);
            })

            .catch((e) => {
                console.log(e);
                setList(null);
            });
    }, []);

    if (list === 'loading') return <ScreenLoader />;

    return (
        <products.Provider value={list}>
            {list === null && (
                <Container sx={{ my: 2 }}>
                    <Alert severity="error">¡Something was wrong!</Alert>
                </Container>
            )}

            {children}
        </products.Provider>
    );
}
