import usePage from '../../../context/page';
import { useLocation } from 'react-router-dom';

import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Menu({ items }) {
    const { setCurrent } = usePage();
    const location = useLocation();

    return (
        <List>
            {Object.values(items).map((page, index) => {
                const { meta, route } = page;

                return (
                    <ListItem
                        key={index}
                        sx={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                        <ListItemButton
                            variant="navigation"
                            component={NavLink}
                            to={route.path}
                            onClick={() => setCurrent(page)}
                            selected={
                                location.pathname ===
                                `/${route.path === '/' ? '' : route.path}`
                            }
                        >
                            <ListItemIcon>{meta.icon}</ListItemIcon>
                            <ListItemText>{meta.title}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}
