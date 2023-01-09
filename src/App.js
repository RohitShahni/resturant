import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Routes,
  Route, Link
} from 'react-router-dom';
import Home from './component/Home';
import ResturantDetail from './component/ResturantDetail';
import ResturantList from './component/ResturantList';
import ResturantSearch from './component/ResturantSearch';
import ResturantUpdate from './component/resturantUpdate';
import Resturantcreate from './component/Resturantcreate';

{/* <Router>
        <Routes>
            <Route path="/" element={<Welcome/>}>
            </Route>
            <Route path="/" element={<Game />}>
            </Route>
            <Route path="/" element={<Leaderboard />}>
            </Route>
        </Routes>
    </Router> */}

function App() {
  return (
    <div className="App">

      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/details">Details</Link></li>
          <li><Link to="/update">Update</Link></li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>

          <Route path='/list' element={<ResturantList />}>
          </Route>

          <Route path='/create' element={<Resturantcreate />}>
          </Route>

          <Route path='/search' element={<ResturantSearch />}>
          </Route>

          <Route path='/details' element={<ResturantDetail />}>
          </Route>

          <Route path='/update' element={<ResturantUpdate />}>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
