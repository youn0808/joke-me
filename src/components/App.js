import React from "react";
import { Switch, Route } from "react-router-dom";

import { FavoriteProvider } from "../contexts/favorite.context";
import { FiltersProvider } from "../contexts/filters.context";
import Nav from "./Navbar";
import FavoriteJokeList from "./FavoriteJokeList";
import JokeList from "./JokeList";
import Footer from "./Footer";
import SharedJoke from "./SharedJoke";
import ScrollToTop from "./ScrollToTop";

import useStyles from "../styles/AppStyles";

function App() {
  const classes = useStyles();
  return (
    <FavoriteProvider>
      <FiltersProvider>
        <ScrollToTop />
        <div className={classes.root}>
          <Switch>
            <Route
              path="/"
              exact
              render={(routeProps) => (
                <>
                  <Nav {...routeProps} />
                  <div className={classes.contentWrapper}>
                    <main className={classes.content}>
                      <div className={classes.toolbar} />
                      <JokeList />
                    </main>
                    <Footer />
                  </div>
                </>
              )}
            />
            <Route
              path="/favorites"
              exact
              render={(routeProps) => (
                <>
                  <Nav {...routeProps} />
                  <div className={classes.contentWrapper}>
                    <main className={classes.content}>
                      <div className={classes.toolbar} />
                      <FavoriteJokeList />
                    </main>
                    <Footer />
                  </div>
                </>
              )}
            />
            <Route
              path="/joke/:jokeId"
              exact
              render={(routeProps) => (
                <>
                  <Nav {...routeProps} />
                  <div className={classes.contentWrapper}>
                    <main className={classes.content}>
                      <div className={classes.toolbar} />
                      <SharedJoke {...routeProps} />
                    </main>
                    <Footer />
                  </div>
                </>
              )}
            />
            <Route render={() => <h2>404</h2>} />
          </Switch>
        </div>
      </FiltersProvider>
    </FavoriteProvider>
  );
}

export default App;
