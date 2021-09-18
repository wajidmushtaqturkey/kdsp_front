import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "pages/admin/Dashboard.js";

import Settings from "pages/admin/Settings.js";
import Tables from "pages/admin/Tables.js";
import WaitList from "pages/admin/WaitList";
import { ROUTES } from "constants/index";

export default function Admin() {
  return (
    <>
      {/* <Switch>
            <Route path={ROUTES.WAIT_LIST} exact component={WaitList} />
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch> */}
    </>
  );
}
