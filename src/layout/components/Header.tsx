import {
  AppRegistration,
  Login,
  MonetizationOn,
  Web,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { Fragment } from "react";
import SearchIcon from '@mui/icons-material/Search';
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
const linksLeft = [
  {
    label: "Plantillas",
    href: "/plantillas",
    icon: <Web />,
  },
  {
    label: "Precios",
    href: "/precios",
    icon: <MonetizationOn />,
  },
];

const linksRight = [
  {
    label: "Iniciar sesión",
    href: "/login",
    icon: <Login />,
  },
  {
    label: "Registrarse",
    href: "/register",
    icon: <AppRegistration />,
  },
];




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





const Header = () => (
  <Fragment>
    <Box>
      <Box
        display={{
          xs: "none",
          md: "block",
        }}
      >
        <NavDesktop linksLeft={linksLeft} linksRight={linksRight} />
      </Box>

      <Box
        display={{
          xs: "block",
          md: "none",
        }}
      >
        <NavMobile linksLeft={linksLeft} linksRight={linksRight} />
      </Box>
    </Box>
  </Fragment>
);

export default Header;
