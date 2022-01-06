import React from 'react';
import "./sidebar.css";
import DashLogo from "../../assets/images/logo2.png";
import ChartFill from "../../assets/icons/Chart_fill.png";
import Chat from "../../assets/icons/Chat.png";
import AccountIcon from "../../assets/icons/User_box.png";
import CalendarIcon from "../../assets/icons/CalendarIcon.png";
import CommunitiesIcon from "../../assets/icons/Search_alt.png";
import Analytics from "../../assets/icons/Chart_alt.png";
import FolderIcon from "../../assets/icons/Folder_alt.png";
import SettingIcon from "../../assets/icons/Setting_alt_line.png";
import VektorSidebar from "../../assets/icons/VectorSidebar.png";
import SidebarItems from "../../SidebarDatas/sidebarDatas";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Registr from '../Registr/Registr';

// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';




// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
//   });
  
//   const closedMixin = (theme) => ({
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(7)} + 1px)`,
//     [theme.breakpoints.up('sm')]: {
//       width: `calc(${theme.spacing(9)} + 1px)`,
//     },
//   });
  
//   const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//   }));
  
//   const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
//   })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//       marginLeft: drawerWidth,
//       width: `calc(100% - ${drawerWidth}px)`,
//       transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     }),
//   }));
  
//   const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//       width: drawerWidth,
//       flexShrink: 0,
//       whiteSpace: 'nowrap',
//       boxSizing: 'border-box',
//       ...(open && {
//         ...openedMixin(theme),
//         '& .MuiDrawer-paper': openedMixin(theme),
//       }),
//       ...(!open && {
//         ...closedMixin(theme),
//         '& .MuiDrawer-paper': closedMixin(theme),
//       }),
//     }),
//   );
  
  export default function Sidebar() {
    // const theme = useTheme();
    // const [open, setOpen] = React.useState(false);
  
    // const handleDrawerOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleDrawerClose = () => {
    //   setOpen(false);
    // };
  



   console.log(SidebarItems);
    return (

        <Router>
        <div className='sidebar'>
            <div className="dash">
                <img src={DashLogo}  alt='Dashlogo'/>
                
            </div>
           
            {/* -------------------- */}
            <div className="dashboard">
                <div className="dashboard_item">
                    <img src={ChartFill} alt="chart_fill" />
                    <p><Link to="/">Dashboard</Link></p>
                </div>
            </div>
            {/* ----------------- */}
            <div className="inbox">
                <div className="inbox_item">
                    <img src={Chat} alt="chat" />
                   <div className="input">
                      <Link to="/monitoring">Monitoring</Link>  
                       <p>1</p>
                   </div>
                </div>
            </div>
            {/* ----------------- */}
            <h3>To'lovlar</h3>
            {/* ITEMS----------- */}
            <div className="items">
                <div className="items_item">
                    <img src={AccountIcon} alt="accounticon" />
                   <p> <Link to="/registr"> Registratsiya </Link></p>
                </div>
            </div>
            <div style={{top:"360px"}} className="items">
                <div className="items_item">
                    <img src={CalendarIcon} alt="calendar" />
                    <p><Link to="/post">Postlar</Link></p>
                </div>
            </div>
            <div style={{top:"405px"}} className="items">
                <div className="items_item">
                    <img src={CommunitiesIcon} alt="chart_fill" />
                    <p>Jamoa</p>
                </div>
            </div>
            <div style={{top:"445px"}} className="items">
                <div className="items_item">
                    <img src={Analytics} alt="chart_fill" />
                    <p>Analitika</p>
                </div>
            </div>
        <h3 style={{top:"522px"}}>General</h3>
        <div style={{top:"545px"}} className="items">
                <div className="items_item">
                    <img src={FolderIcon} alt="chart_fill" />
                    <p>Fayllar & Papkalar</p>
                </div>
                </div>
                <div style={{top:"585px"}} className="items">
                <div className="items_item">
                    <img src={SettingIcon} alt="chart_fill" />
                    <p>Sozlamalar</p>
                </div>
                </div>
                {/* ------------------ */}
                <img src={VektorSidebar} alt="vek" />
           <div className="help">
               <p>Need Help With Dash? </p>
               <button>Go to help Center</button>
           </div>
        </div>

            <Switch>
                {/* <Route path="/">
                    <Dashboard/>
                </Route> */}
                {/* <Route path="/monitoring">
                    <Monitoring/>
                </Route> */}
                <Route path="/registr">
                    <Registr/>
                </Route>
                {/* <Route path="/post">
                    <Postlar/>
                </Route> */}
            </Switch>

        </Router>

    
    )
}
