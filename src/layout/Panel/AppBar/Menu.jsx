import { useState } from 'react';

import { Badge, Divider, IconButton, Menu, MenuItem } from '@mui/material';

export default function BaseMenu({ icon, badgeContent, children }) {
    const [menu, setMenu] = useState({ open: false, anchorEl: null });
    const handleOpen = (e) => {
        setMenu({ ...menu, open: true, anchorEl: e.currentTarget });
    };
    const handleClose = () => {
        setMenu({ ...menu, open: false });
    };

    return (
        <>
            <IconButton
                onClick={handleOpen}
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: '1.75rem'
                    }
                }}
            >
                {badgeContent ? (
                    <Badge
                        badgeContent={badgeContent}
                        color="secondary"
                        sx={{
                            '& .MuiBadge-badge': {
                                padding: '8px',
                                border: '3px solid #fff'
                            }
                        }}
                    >
                        {icon}
                    </Badge>
                ) : (
                    icon
                )}
            </IconButton>

            <Menu
                open={menu.open}
                anchorEl={menu.anchorEl}
                onClose={handleClose}
                keepMounted={true}
                PaperProps={{
                    elevation: 6
                }}
            >
                {(children instanceof Array ? children : [children]).map(
                    (item, i) => {
                        if (!item.props.children) return <Divider key={i} />;

                        return (
                            <MenuItem onClick={handleClose} key={i}>
                                {item}
                            </MenuItem>
                        );
                    }
                )}
            </Menu>
        </>
    );
}
