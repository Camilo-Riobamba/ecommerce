import { useState } from 'react';

import { session } from './Session';

export default function SessionProvider({ children }) {
    const [user, setUser] = useState(null);

    return (
        <session.Provider value={[user, setUser]}>{children}</session.Provider>
    );
}
