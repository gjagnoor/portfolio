import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { Link } from "gatsby"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "white",
    justifyContent: "center",
    fontSize: "2em",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "white",
    color: "black",
  },
  appBarShift: {
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // margin: drawerWidth,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Share Tech Mono, monospace",
  },
  hide: {
    display: "none",
  },
  drawer: {
    // width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "white",
    fontFamily: "Share Tech Mono, monospace",
  },
  drawerPaper: {
    //   width: drawerWidth,
    backgroundColor: "white",
    color: "#04d9ff",
    fontFamily: "Share Tech Mono, monospace",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(7),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    margin: "auto",
    fontFamily: "Share Tech Mono, monospace",
    fontSize: "1.2em",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    margin: 0,
  },
}))

export default function PersistentDrawerRight({ children }) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        xs={12}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={`/`}>
              My Portfolio
            </Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => {}}
            className={clsx(open && classes.hide)}
          >
            <a
              href={`https://drive.google.com/file/d/1M3t8mx_O7s6wNuAZeipqimlxzcjPhdZK/view?usp=sharing`}
              style={{ textDecoration: "none", color: "inherit" }}
              target={"_blank"}
            >
              Click to open Resume
            </a>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {children}
      </main>
    </div>
  )
}
