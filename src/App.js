import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Header} from './Components/Header/header'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/w-list">
            {/* <WishList /> */}
          </Route>
          <Route exact path="/" >
            {/* <HomePage /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
