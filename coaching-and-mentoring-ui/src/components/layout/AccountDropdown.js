import React, { useContext } from "react";

import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
// import dPP from "../../assets/profile.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//import { authenticationService } from "../../services/authServices";
// import { authContext } from "context/authContext";
// import { useKeycloak } from "@react-keycloak/web";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
//import IconButton from "@material-ui/core/IconButton";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  div: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  }
});

const StyledMenuItem = withStyles(theme => ({
  root: {
    fontSize: "14px",
    minHeight: "0px",
    color: "black",
    "&:hover": {
      backgroundColor: "rgba(63,81,181,0.08)"
    }
  }
}))(MenuItem);

export default function AccountDropdown() {
  // const history = useHistory();

  const user = JSON.parse(localStorage.getItem("kriyaUser"));
  const userName = user && user.userName;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleSignOut = async () => {
  //   navigate("/login")
  // };

  const classes = useStyles();

  return (
    <div>
      <div className={classes.div} onClick={handleClick}>
        <Typography variant="inherit">{userName}</Typography>
        <IconButton
          aria-label="Home"
          color="inherit"
          classes={{ root: classes.root }}
        >
          <Badge badgeContent={0} color="secondary">
            <AccountCircleIcon />
          </Badge>
        </IconButton>
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <Link to="/profile">
          <StyledMenuItem onClick={handleClose}>
            {t("app_Bar_Profile")}
          </StyledMenuItem>
        </Link> */}
        {/* <Link to="/changePassword">
          <StyledMenuItem onClick={handleClose}>
            {t("config_ChangePassword_Heading_Label")}
          </StyledMenuItem>
        </Link> */}
        <Link to="/login">
          <StyledMenuItem //onClick={handleSignOut}
          >
            Sign Out
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
