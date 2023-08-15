import React from "react";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import useStyles from "../styles/FooterStyles";

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.icons}></div>
      <Tooltip title="Link to joke API">
        <Button
          href="https://sv443.net/jokeapi/v2/"
          target="_blank"
          className={classes.apiBtn}
          variant="contained"
          color="secondary"
          disableElevation
          rel="noreferrer noopener"
          endIcon={<OpenInNewIcon />}
        >
          API Web
        </Button>
      </Tooltip>
    </div>
  );
}

export default Footer;
