import {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
// import UE_Logo from "../assets/UE_logo.jpg"
// const drawerWidth = 240;
const navItems = [ 'AskMarketing', 'Installation Costing', 'Pre-sites survery request', 'Electric fence system design'];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



export default function HeaderNav(props) {
  const {pathname} = useLocation()

    const { children, window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };


  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        {/* <Typography variant="h6" sx={{ my: 2, color: '#664229' }}>
          Urban Elements
        </Typography> */}
          {/* <Typography
            variant="h5"
            component="div"
            align='center'
            className='p-2 p-sm-3'
          >
            <Link to="/" >
                Home   
            </Link>
          </Typography>
        <Divider /> */}
        <List>
          {navItems.map((item) => (
            <div className='p-2 px-5' key={item}>
              <Link style={{textDecoration: 'none'}} to={item === "home" ? `/` : `${item}`} >
                {pathname === `/${item}` ? 
                <div className='btn btn-primary rounded-pill'>
                  <strong className=''>#{item}</strong>
                </div> : 
                <div className='btn btn-primary-outline rounded-pill'>
                  <strong>#{item}</strong>
                </div>}
              </Link>
            </div>
          ))}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
    // console.log(pathname ===`/${navItems[1]}`)
  return (
    <>
      <CssBaseline/>
      <HideOnScroll sx={{background: 'transparent', opacity: '0.5'}} {...props}>
      <AppBar component="nav" sx={{backgroundColor: 'whitesmoke'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'flex' }, color: '#000' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          anchor='top'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: 'flex' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 'auto' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
      <div>{children}</div>
    </>
  );
}