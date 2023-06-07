import { useState } from 'react';

import { page } from './page';

export default function PageProvider({ initial, children }) {
    const [current, setCurrent] = useState(initial);

    return (
        <page.Provider value={{ current, setCurrent }}>
            {children}
        </page.Provider>
    );
}
