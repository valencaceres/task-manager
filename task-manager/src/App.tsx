import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./pages/PrivateRoute";
import { useUser } from "./store/hooks";

function App() {
  const { user } = useUser();
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="edit/:id" element={<Edit />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
