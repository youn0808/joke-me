import React from "react";

import IconButton from "@material-ui/core/IconButton";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import useStyles from "../styles/FooterStyles";

console.log("Footer");
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.icons}>
        <Tooltip title="Github">
          <a
            href="https://github.com/youn0808/joke-me"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
        </Tooltip>
      </div>
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
          API
        </Button>
      </Tooltip>
    </div>
  );
}

export default Footer;
