import { useState } from 'react';

import { shoppingCart } from './shoppingCart';

export default function ShoppingCartProvider({ children }) {
    const [products, setProducts] = useState(
        JSON.parse(localStorage.getItem('shoppingCart')) || []
    );

    const addProduct = (newProduct) => {
        setProducts((products) => {
            const oldProductIndex = products.findIndex(
                ({ id }) => id === newProduct.id
            );

            let updatedProducts = products;

            if (oldProductIndex !== -1) {
                updatedProducts[oldProductIndex] = {
                    ...newProduct,
                    quantity:
                        newProduct.quantity + products[oldProductIndex].quantity
                };
            } else {
                updatedProducts = [...products, newProduct];
            }

            localStorage.setItem(
                'shoppingCart',
                JSON.stringify(updatedProducts)
            );
            return updatedProducts;
        });
    };

    const removeProduct = (product) => {
        setProducts((products) => {
            products = products.filter((current) => current.id !== product.id);

            localStorage.setItem('shoppingCart', JSON.stringify(products));
            return products;
        });
    };

    return (
        <shoppingCart.Provider value={{ products, addProduct, removeProduct }}>
            {children}
        </shoppingCart.Provider>
    );
}
