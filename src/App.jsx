import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  TextField,
  ThemeProvider,
  capitalize,
  createTheme,
  styled,
  useTheme,
} from "@mui/material/";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Avatar, Button } from "@mui/material";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ErrorIcon from "@mui/icons-material/Error";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import logo from "./static/logo.png";
import { amber, deepOrange, grey } from "@mui/material/colors";
import {
  ArrowBackIos,
  Brightness4,
  Brightness7,
  Error,
  FiberManualRecord,
  Home,
  LocalActivity,
  Logout,
  MobiledataOff,
  MoreVertOutlined,
  Person3,
  Settings,
  VideocamOutlined,
} from "@mui/icons-material";
const drawerWidth = 240;

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 82,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(42px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

// function DarkThemeWithCustomPalette() {
//   return (
//     <ThemeProvider theme={darkModeTheme}>
//       <App />
//     </ThemeProvider>
//   );
// }
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Poppins",
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              "@font-face": {
                fontFamily: "Poppins",
              },
              body: {},
            },
          },
        },
        palette: {
          mode,
          primary: {
            ...amber,
            ...(mode === "dark" && {
              main: "#1a1625",
            }),
            ...(mode === "light" && {
              main: "#fff",
            }),
          },
          ...(mode === "dark" && {
            background: {
              default: "#1a1625",
              paper: "#1a1625",
            },
          }),

          text: {
            ...(mode === "dark"
              ? {
                  primary: "#fff",
                  secondary: "#fff",
                }
              : {
                  primary: "#000",
                  secondary: "#000",
                }),
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [selectedItemTop, setSelectedItemTop] = React.useState(null);
  const [selectedItemBottom, setSelectedItemBottom] = React.useState(null);

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  // const preferedMode = useMediaQuery("(prefers-color-scheme: dark)");

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode: preferedMode ? "dark" : "light",
  //       },
  //     }),
  //   [preferedMode]
  // );

  const handleItemClickTop = (index) => {
    setSelectedItemTop(index);
  };
  const handleItemClickBottom = (index) => {
    setSelectedItemBottom(index);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const messages = [
    { text: "Hello!", sender: "user", name: "You", time: "09:00 AM" },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nihil totam, ipsam illo, hic ut esse eos officia cupiditate accusamus animi doloremque, quo consectetur temporibus sint placeat. Accusantium, ut quidem.",
      sender: "other",
      name: "Appex Network",
      time: "09:23 AM",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nihil totam, ipsam illo,",
      sender: "user",
      name: "You",
      time: "10:00 AM",
    },
    {
      text: "I am doing well, thanks!",
      sender: "other",
      name: "Appex Network",
      time: "10:30 AM",
    },
  ];

  const handleSendMessage = () => {
    // Add your logic to send a message
  };

  function renderContent(value) {
    switch (value) {
      case 0:
        return <Home />;
      case 1:
        return <MobiledataOff />;
      case 2:
        return <LocalActivity />;
      case 3:
        return <Person3 />;
      case 4:
        return <Error />;
      default:
        return <Error />;
    }
  }

  const drawer = (
    <Box
      color={""}
      sx={{
        color: "white",
        backgroundColor: "primary.main",
        position: "relative",
        height: "100vh",
      }}>
      <Box>
        <img
          src={logo}
          style={{ width: "100%", margin: "1.8rem 0rem" }}
          alt="logo"></img>
      </Box>
      <Divider />
      <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        {["Home", "Transaction", "Activities", "My Profile", "Get Help"].map(
          (text, index) => (
            <Box
              key={text}
              disablePadding
              onClick={() => handleItemClickTop(index)}
              sx={{
                display: "flex",
                alignItems: "center",
                width: "90%",
                p: 1,
                borderRadius: "5px",
                color: selectedItemTop === index ? "white" : "text.primary",
                backgroundColor:
                  selectedItemTop === index ? "#DF678C" : "transparent",
              }}>
              <ListItemIcon>{renderContent(index)}</ListItemIcon>
              <ListItemText primary={text} />
            </Box>
          )
        )}
      </Box>
      <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          bottom: 5,
          width: "100%",
        }}>
        <Box
          disablePadding
          onClick={() => handleItemClickBottom(6)}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "90%",
            p: 1,
            borderRadius: "5px",
            color: selectedItemBottom === 6 ? "white" : "text.primary",
            backgroundColor:
              selectedItemBottom === 6 ? "#DF678C" : "transparent",
          }}>
          <ListItemIcon>
            {" "}
            <Settings />{" "}
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
        </Box>
        <Box
          disablePadding
          onClick={() => handleItemClickBottom(7)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            p: 1,
            borderRadius: "5px",
            color: selectedItemBottom === 7 ? "white" : "text.primary",
            backgroundColor:
              selectedItemBottom === 7 ? "#DF678C" : "transparent",
          }}>
          <ListItemIcon>
            {" "}
            <Logout />{" "}
          </ListItemIcon>
          <ListItemText primary={"Log out"} />
        </Box>
        <Box
          disablePadding
          onClick={() => handleItemClickBottom(8)}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "90%",
            p: 1,
            borderRadius: "5px",
            color: selectedItemBottom === 8 ? "white" : "text.primary",
          }}>
          {/* {theme.palette.mode}  */}
          <Typography sx={{mx:2, color:'text.primary'}}>Light</Typography>
          <FormGroup>
                  <FormControlLabel
                    control={
                      <ThemeSwitch checked={theme.palette.mode === "dark"} onChange={colorMode.toggleColorMode} />
                    }
                  />
                </FormGroup>
                <Typography sx={{ color:'text.primary'}}>Dark</Typography>
        </Box>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", backgroundColor: "primary.main" }}>
        <CssBaseline />
        <AppBar
          elevation={1}
          position="fixed"
          sx={{
            backgroundColor: "white",
            color: "black",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "primary.main",
            }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}>
                <ArrowForwardIosIcon />
              </IconButton>
              <IconButton>
                {" "}
                <MenuIcon />{" "}
              </IconButton>
              <Typography
                variant="h6"
                color={"text.primary"}
                noWrap
                component="div">
                Transactions
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                sx={{
                  margin: 2,
                  color: "white",
                  backgroundColor: "#DF678C",
                  padding: 2,
                  textTransform: "none",
                  borderRadius: 5,
                  ":hover": {
                    backgroundColor: "pink",
                  },
                }}>
                + Create offer
              </Button>
              <NotificationAddIcon
                color={"text.primary"}
                sx={{ margin: 2, color: "text.primary" }}
              />
              <Button sx={{ color: "text.primary", margin: 2 }}>
                <Avatar sx={{ margin: 2, color: "text.primary" }} />
                <Typography
                  color={"text.primary"}
                  sx={{ textTransform: "none" }}>
                  ex5F6H2S9J
                </Typography>
                <ArrowDropDownIcon sx={{ margin: 2, color: "text.primary" }} />
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}>
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open>
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            backgroundColor: "primary.main",
            margin: "10rem 1rem",
            minHeight: 140,
            borderRadius: 5,
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Grid container spacing={0}>
            {/* Left Section */}
            <Grid item xs={12} sm={6}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "inherit",
                  height: "100%",
                  padding: "1rem",
                  // borderRight: { sm: "1px solid #ccc" },
                  // borderBottom: { xs: "1px solid #ccc" },
                }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "nowrap", // Prevent wrapping
                    overflowX: "auto", // Enable horizontal scrolling when items shrink
                    height: 100,
                    "& > *": {
                      flexShrink: 1,
                    },
                  }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ArrowBackIos />
                    <Typography>Go back</Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#F8F8FA",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      px: 1,
                    }}>
                    <ErrorIcon sx={{ color: "green", marginX: "5px" }} />
                    <Typography sx={{ fontWeight: "bold", color: "black" }}>
                      30 minutes
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      "& > *": {
                        borderRadius: "50%",
                        border: "1px solid lightgrey",
                        padding: "8px",
                        margin: "5px",
                      },
                    }}>
                    <IconButton>
                      <VideocamOutlined />
                    </IconButton>
                    <IconButton>
                      <MoreVertOutlined />
                    </IconButton>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    overflow: "hidden",
                  }}>
                  <Box
                    sx={{
                      flex: "1",
                      overflowY: "scroll",
                      padding: "10px",
                      "&::-webkit-scrollbar": {
                        width: 0, // Hide the scrollbar
                        visibility: "hidden",
                      },
                      maxHeight: 600,
                    }}>
                    {messages.map((message, index) => (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          alignItems: "start",
                        }}>
                        <Paper
                          key={index}
                          sx={{
                            maxWidth: "70%",
                            padding: 3,
                            // marginBottom: "10px",
                            marginLeft:
                              message.sender === "user" ? "auto" : "0",
                            // marginBottom: 10,
                            color:
                              message.sender === "user" ? "white" : "black",
                            backgroundColor:
                              message.sender === "user" ? "#E78DA9" : "#E8E9ED",
                            borderRadius:
                              message.sender === "user"
                                ? "1rem 1rem 0px 1rem"
                                : "1rem 1rem 1rem 0",
                          }}>
                          {message.text}
                        </Paper>
                        <Box
                          sx={{
                            display: "flex",
                            maxWidth: "70%",
                            padding: 1,
                            marginBottom: 10,
                            marginLeft:
                              message.sender === "user" ? "auto" : "0",
                            color:
                              (message.sender === theme.palette.mode) === "dark"
                                ? "white"
                                : "black",
                          }}>
                          {message.sender === "user" ? (
                            <>
                              <Typography sx={{ color: "gray", mx: 1 }}>
                                {message.time}
                              </Typography>
                              <Typography
                                sx={{
                                  color:
                                    theme.palette.mode === "light"
                                      ? "black"
                                      : "white",
                                  mx: 1,
                                }}>
                                {message.name}
                              </Typography>
                            </>
                          ) : (
                            <>
                              <Typography
                                sx={{
                                  color:
                                    theme.palette.mode === "light"
                                      ? "black"
                                      : "white",
                                  mx: 1,
                                }}>
                                {message.name}
                              </Typography>
                              <Typography sx={{ color: "gray", mx: 1 }}>
                                {message.time}
                              </Typography>
                            </>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      padding: "10px",
                    }}>
                    <TextField
                      fullWidth
                      multiline
                      minRows={4}
                      sx={{}}
                      variant="outlined"
                      placeholder="Type your message..."
                      // Add your onChange handler to update the message state
                    />
                    <Button
                      variant="contained"
                      onClick={handleSendMessage}
                      sx={{
                        margin: "10px 0",
                        padding: "10px 70px",
                        width: 30,
                        borderRadius: "10px",
                        textTransform: "none",
                        backgroundColor: "#D84773",
                        ":hover": {
                          backgroundColor: "pink",
                        },
                      }}>
                      Send
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            {/* Right Section */}
            <Grid item xs={12} sm={6}>
              <Paper
                sx={{
                  backgroundColor: "inherit",
                  height: "100%",
                  padding: "1rem",
                  borderBottom: { xs: "1px solid #ccc" },
                }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Avatar sx={{ width: 65, height: 70 }} />
                  <span style={{ display: "flex", marginTop: 5 }}>
                    <Typography> ex5F6H2S9J </Typography>
                    <ArrowDropDownCircleIcon sx={{ color: "pink" }} />
                  </span>
                  <span style={{ display: "flex" }}>
                    <Typography
                      sx={{ fontWeight: "bold", color: "grey", p: "2px 5px" }}>
                      {" "}
                      Buyer{" "}
                    </Typography>
                    <span style={{ width: 5 }}></span>
                    <Box
                      sx={{
                        backgroundColor: "#E8E9ED",
                        color: "#401862",
                        p: "0px 10px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "#8A6696",
                          fontSize: 13,
                        }}>
                        {" "}
                        Active{" "}
                      </Typography>
                    </Box>
                  </span>
                  <Box sx={{ display: "flex", my: 3 }}>
                    <span>
                      <Typography sx={{ fontWeight: "bold" }}>
                        N160,000
                      </Typography>
                      <Typography sx={{ color: "grey", fontSize: 13 }}>
                        Buyer has
                      </Typography>
                    </span>
                    <CurrencyExchangeIcon sx={{ mx: 5 }} />
                    <span>
                      <Typography sx={{ fontWeight: "bold" }}>
                        $200,000
                      </Typography>
                      <Typography sx={{ color: "grey", fontSize: 13 }}>
                        You want
                      </Typography>
                    </span>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,0.2)",
                      p: 1,
                      borderRadius: 2,
                    }}>
                    <Box
                      sx={{
                        p: 1,
                        backgroundColor:
                          theme.palette.mode === "light" ? "#F7D9E2" : "#fff",
                        color: "#D84773",
                        p: 1,
                        borderRadius: 1,
                      }}>
                      {" "}
                      <Typography>Details</Typography>{" "}
                    </Box>
                    <Box sx={{ p: 1, color: "gray" }}>
                      <Typography>Payment Upload</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}>
                      <Box sx={{ m: 2 }}>
                        {" "}
                        <Typography
                          sx={{ p: "5px 15px", color: "#rgba(0,0,0,0.2)" }}>
                          Status
                        </Typography>
                      </Box>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                        }}>
                        <Box
                          sx={{
                            m: 2,
                            backgroundColor: "#EDD9FF",
                            borderRadius: 5,
                          }}>
                          {" "}
                          <Typography sx={{ p: "5px 15px", color: "#401862" }}>
                            Ongoing
                          </Typography>{" "}
                        </Box>
                      </div>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                      <Button
                        sx={{
                          p: ".5rem 1rem",
                          m: 2,
                          borderColor:
                            theme.palette.mode === "light" ? "black" : "white",
                          color:
                            theme.palette.mode === "light" ? "black" : "white",
                          borderRadius: 2,
                          textTransform: "none",
                        }}
                        variant="outlined">
                        Upload Proof
                      </Button>
                      <Button
                        sx={{
                          p: ".5rem 1rem",
                          m: 2,
                          color: "#fff",
                          backgroundColor: "#8B73A0",
                          borderRadius: 2,
                          textTransform: "none",
                          ":hover": {
                            backgroundColor: "pink",
                          },
                        }}
                        variant="contained">
                        Money Recieved
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor:
                        theme.palette.mode === "light"
                          ? "#F8F8FA"
                          : "primary.main",
                      p: 3,
                      borderRadius: 5,
                    }}>
                    <Box
                      sx={{
                        backgroundColor: "#DF678C",
                        color: "white",
                        p: "2px 10px",
                        marginBottom: 2,
                        borderRadius: 4,
                      }}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Buyers Detail
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: (theme) => ({
                          xs: "column",
                          sm: "row",
                        }),
                      }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mx: 3,
                            my: 1,
                          }}>
                          <FiberManualRecord
                            sx={{ color: "grey", fontSize: 20, mr: 1 }}
                          />
                          <Box>
                            <Typography sx={{ fontWeight: "600" }}>
                              Payment method
                            </Typography>
                            <Typography sx={{ color: "gray" }}>
                              Bank Transfer
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mx: 3,
                            my: 1,
                          }}>
                          <FiberManualRecord
                            sx={{ color: "grey", fontSize: 20, mr: 1 }}
                          />
                          <Box>
                            <Typography sx={{ fontWeight: "600" }}>
                              Rate
                            </Typography>
                            <Typography sx={{ color: "gray" }}>600</Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mx: 3,
                            my: 1,
                          }}>
                          <FiberManualRecord
                            sx={{ color: "grey", fontSize: 20, mr: 1 }}
                          />
                          <Box>
                            <Typography sx={{ fontWeight: "600" }}>
                              Country
                            </Typography>
                            <Typography sx={{ color: "gray" }}>USA</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mx: 3,
                            my: 1,
                          }}>
                          <FiberManualRecord
                            sx={{ color: "grey", fontSize: 20, mr: 1 }}
                          />
                          <Box>
                            <Typography sx={{ fontWeight: "600" }}>
                              Transaction ID
                            </Typography>
                            <Typography sx={{ color: "gray" }}>
                              #7784938
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mx: 3,
                            my: 1,
                          }}>
                          <FiberManualRecord
                            sx={{ color: "grey", fontSize: 20, mr: 1 }}
                          />
                          <Box>
                            <Typography sx={{ fontWeight: "600" }}>
                              Date
                            </Typography>
                            <Typography sx={{ color: "gray" }}>
                              Jan 29, 2023
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mx: 3,
                            my: 1,
                          }}>
                          <FiberManualRecord
                            sx={{ color: "grey", fontSize: 20, mr: 1 }}
                          />
                          <Box>
                            <Typography sx={{ fontWeight: "600" }}>
                              Limit
                            </Typography>
                            <Typography sx={{ color: "gray" }}>
                              $100 - $3000
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
