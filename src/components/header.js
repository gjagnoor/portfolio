import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "gatsby";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(7),
    },
  },
  style: {
    textDecoration: "none",
    marginLeft: `5em`,
  }
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <header id="header">
        <Link to="/" className={`${classes.style} nav`}>
          Home
        </Link>
        <Link to="/profile#about" className={`${classes.style} nav`}>
          About
        </Link>
        <Link to="/profile#workexperience" className={`${classes.style} nav`}>
          Work Experience
        </Link>
        <Link to="/profile#featuredprojects" className={`${classes.style} nav`}>
          Featured Projects
        </Link>
        <Link to="/profile#contact" className={`${classes.style} nav`}>
          Contact
        </Link>
    </header>
  )
}

export default Header
