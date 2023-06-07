import Purchases from '../../components/Purchases';
import ShoppingCart from '../../components/ShoppingCart';

import { AddHomeRounded, ShoppingCartRounded } from '@mui/icons-material';

const panel = {
    dashboard: {
        meta: {
            title: 'My purchases',
            icon: <AddHomeRounded />
        },

        route: {
            path: '',
            element: <Purchases />
        }
    },

    shoppingCart: {
        meta: {
            title: 'Shopping Cart',
            icon: <ShoppingCartRounded />
        },

        route: {
            path: 'shopping-carg',
            element: <ShoppingCart />
        }
    }
};

export default panel;
