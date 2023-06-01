import "./App.css";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { useState } from "react"; 
//represents the createContext API
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.scss";
function App() { 
  const [light, setLight] = useState("true");
{/*// contextprovider must be used where routing is */}
  return ( 
//created context,now defining the context so that it and passing down all the respective elemnts so that it cane be used by the indivisual child elements
    <DarkModeContext.Provider value={{ light, setLight }}>
      <div className={light ? "app" : "app dark"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              {" "}
              {/*the parent route*/}
              <Route index element={<Home/>} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route
                  path="new"
                  element={
                    <New inputs={productInputs} title="Add new Product" />
                  }
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
