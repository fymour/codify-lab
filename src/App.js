import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './Components/Header/header'
import { Wishlist } from './Components/Wishlist/wish-list'
import { HomePage } from './Pages/Home-page/home-page'
import { AddPage } from "./Pages/Add-list/add-to-list";
import { BookPage } from './Pages/Book-page/book-page'
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/add"
              element={<AddPage />}>
            </Route>
            <Route
              exact
              path="/"
              element={<HomePage />} >
            </Route>
            <Route

              path="/app/:title"
              element={<BookPage />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
