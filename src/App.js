import { React } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Search from "./pages/search/search";
import SimpleBottomNavigation from "./Compoments/singleContent/MainNav";
import Header from "./Compoments/Header/Header";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} exact />
            <Route path="/series" component={Series} exact />
            <Route path="/search" component={Search} exact />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
