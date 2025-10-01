import { ShoppingCart, UserIcon, Menu as MenuIcon } from 'lucide-react';
import ModeToggle from './mode-toggle';
import { styled } from '@mui/material/styles';
import {
  Button,
  Link,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { useState } from 'react';

export const StyledButton = styled(Button)({
  textTransform: 'none',
});

const Menu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawerContent = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ width: 250 }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCart size={20} />
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <UserIcon size={20} />
            </ListItemIcon>
            <ListItemText primary="Sign In" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ModeToggle />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Link href="/cart">
          <StyledButton variant="text" color="primary">
            <ShoppingCart size={16} className="mr-2" />
            Cart
          </StyledButton>
        </Link>
        <Link href="/sign-in">
          <StyledButton variant="contained" color="primary">
            <UserIcon size={16} className="mr-2" />
            Sign In
          </StyledButton>
        </Link>
      </nav>
      <nav className="md:hidden">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon size={24} />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerContent}
        </Drawer>
      </nav>
    </div>
  );
};

export default Menu;
