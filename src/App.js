import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:imdbID">
          <MovieDetail />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
