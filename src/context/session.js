import { createContext, useContext } from 'react';

export const session = createContext();
export default function useSession() {
    return useContext(session);
}
