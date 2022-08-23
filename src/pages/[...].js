import React from "react"
import { Router } from "@reach/router"

import ToDoList from "../routesPages/auth/to-do-list"
import ResultToDoList from "../routesPages/auth/result-to-do-list"

import PublicRoute from "../route/publicRoute"
import PageNotFound from "../pages/404"

const Public = () => {
  return (
    <Router basepath="/">
      <PublicRoute component={ToDoList} path="/to-do-list" />
      <PublicRoute component={ResultToDoList} path="/result-to-do-list" />
      <PageNotFound path="*" />
    </Router>
  );
};

export default Public;