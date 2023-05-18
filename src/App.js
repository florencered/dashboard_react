
import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import Login from './pages/login/Login';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { productInputs, userInputs } from './formSource'; 
import { useContext } from 'react'; 
import { DarkModeContext } from './context/darkModeContext';
import "./style/dark.scss"

function App() { 
  const {darkMode}=useContext(DarkModeContext)
  
  return (
    <div className={darkMode? "app dark":"app"}>
      <BrowserRouter>
        <Routes>
          <Route path='/'> {/*the parent route*/}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title='Add New User' />} />
            </Route> 
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}



export default App;