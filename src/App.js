
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import ProtectedRoute from "./component/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Boad from "./component/Boad";
import CreateProject from "./component/CreateProject";

function App() {
  return (
   
        <BrowserRouter>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/"
                exact
                element={ <ProtectedRoute><Home /></ProtectedRoute> }
              />
              <Route path="/boad" element={<ProtectedRoute><Boad /> </ProtectedRoute> } />
              <Route path="/create" element={ <ProtectedRoute><CreateProject/></ProtectedRoute> } />
              <Route path="/login" exact element={ <Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
          </BrowserRouter>
      
  );
}

export default App;