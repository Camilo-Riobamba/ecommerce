import 'normalize.css';

import SessionProvider from './context/SessionProvider';
import ProductsProvider from './context/ProductsProvider';
import ShoppingCartProvider from './context/ShoppingCartProvider';

import Routes from './routes/index';

function App() {
    return (
        <SessionProvider>
            <ProductsProvider>
                <ShoppingCartProvider>
                    <Routes />
                </ShoppingCartProvider>
            </ProductsProvider>
        </SessionProvider>
    );
}

export default App;
