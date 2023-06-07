import useSession from '../../../context/Session';

import {
    AppBar as MuiAppBar,
    Box,
    IconButton,
    Toolbar,
    Avatar,
    ListItemIcon
} from '@mui/material';
import Menu from './Menu';
import Item from './Item';

import {
    AccountCircleOutlined,
    LogoutRounded,
    MenuRounded,
    SettingsRounded
} from '@mui/icons-material';

export default function AppBar({ menu }) {
    const [user] = useSession();

    return (
        <MuiAppBar
            color="transparent"
            elevation={0}
            position="static"
            sx={{
                height: 'fit-content'
            }}
        >
            <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                {menu ? (
                    <IconButton size="large" edge="start" onClick={menu}>
                        <MenuRounded />
                    </IconButton>
                ) : null}

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Menu icon={<AccountCircleOutlined />}>
                        <Item>
                            <Avatar sx={{ mr: 2 }} />
                            {user}
                        </Item>

                        {/* an empty item will convert to divider */}
                        <Item />

                        <Item>
                            <ListItemIcon>
                                <SettingsRounded />
                            </ListItemIcon>
                            Account
                        </Item>
                        <Item>
                            <ListItemIcon>
                                <LogoutRounded />
                            </ListItemIcon>
                            Sign out
                        </Item>
                    </Menu>
                </Box>
            </Toolbar>
        </MuiAppBar>
    );
}
