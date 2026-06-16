import { createBrowserRouter } from "react-router";
import App from "../App";
import Public from "../layouts/Public/Public";
import Home from "../pages/Home/Home";
import Auth from "../layouts/Auth/Auth";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Dashboard from "../layouts/Dashboard/Dashboard";
import MyProfile from "../dashboard/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";
import CreatorRoute from "./CreatorRoute";
import CreateContest from "../dashboard/CreatorPage/CreateContest/CreateContest";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Public,
    children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: "all-contests",
        },
        {
            path: "leaderboard",
        }
    ]
  },
  {
    path: "/",
    Component: Auth,
    children: [
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
        // global
        {
            index: true,
        },
        {
            path: "profile",
            element: <MyProfile></MyProfile>
        },
        // admin only
        // creator only
        {
            path: "create-contest",
            element: <CreatorRoute><CreateContest></CreateContest></CreatorRoute>
        },
        // user only
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);