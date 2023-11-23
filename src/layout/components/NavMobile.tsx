import AppBar from "@mui/material/AppBar";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Link, Menu, MenuItem, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import { MouseEvent } from "react";
import NavLogo from "./NavLogo";






const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =








const NavMobile = ({
    linksLeft,
    linksRight,
  }: {
    linksLeft: { label: string; href: string; icon: ReactNode }[];
    linksRight: { label: string; href: string; icon: ReactNode }[];
  }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Box height="100%" width="100%">
        <AppBar position="fixed">
          <Toolbar sx={{ backgroundColor: "var(--color-primario)" }}>
            <Link href="/" flexGrow={1} underline="none" color="inherit">
              <NavLogo />
            </Link>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ color: "white" }}
              onClick={handleClick}
            >
              <MenuIcon color="inherit" />
            </IconButton>
          </Toolbar>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {linksLeft.map((link, index) => (
              <MenuItem
                key={index}
                onClick={handleClose}
                component={Link}
                href={link.href}
                underline="none"
              >
                {link.icon}
                <Typography variant="inherit" sx={{ ml: 1 }}>
                  {link.label}
                </Typography>
              </MenuItem>
            ))}
            <Divider variant="middle" />
            {linksRight.map((link, index) => (
              <MenuItem
                key={index}
                onClick={handleClose}
                component={Link}
                href={link.href}
                underline="none"
              >
                {link.icon}
                <Typography variant="inherit" sx={{ ml: 1 }}>
                  {link.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </AppBar>
      </Box>
    );
  };

  export default NavMobile;
