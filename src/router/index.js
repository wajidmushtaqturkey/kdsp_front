import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { ROUTES } from "../constants";
import { Dashboard } from "../pages";
import LayoutWrapper from "./LayoutWrapper";
import Admin from "../layouts/Admin";
import Auth from "../layouts/Auth";
import PersonalDetail from "../pages/client/PersonalDetail";

import Tables from "pages/admin/Tables";
import WaitList from "pages/admin/WaitList";
import Doctors from "pages/admin/Doctors";
import Settings from "pages/admin/Settings";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import ClientProfile from "pages/admin/ClientProfile";

const NoAuthRoute = ({ ...props }) => {
  return (
    <LayoutWrapper>
      <Route {...props} />
    </LayoutWrapper>
  );
};

const AdminRoute = (props) => {
  if (props.user.role == "admin") {
    return (
      <Redirect to={`${ROUTES.LOGIN}?redirect=${props.location.pathname}`} />
    );
  }

  return (
    <LayoutWrapper>
      <Route {...props} />
    </LayoutWrapper>
  );
};

class Routers extends React.PureComponent {
  render() {
    const { user } = this.props;
    const repeatedProps = {
      user,
      exact: true,
    };
    return (
      <Router>
        <div>
          <Switch>
            <Route
              path={ROUTES.PERSONAL_DETAIL}
              component={PersonalDetail}
              {...repeatedProps}
            />
            {/*  */}

            <Route path="/auth/login" component={Login} {...repeatedProps} />
            <Route
              path="/auth/register"
              component={Register}
              {...repeatedProps}
            />

            {/* admin */}

            <Route
              path={ROUTES.CLIENT_PROFILE}
              component={ClientProfile}
              {...repeatedProps}
            />
            <Route
              path={ROUTES.DOCTORS}
              component={Doctors}
              {...repeatedProps}
            />
            <Route
              path={ROUTES.WAIT_LIST}
              component={WaitList}
              {...repeatedProps}
            />
            <Route
              path={ROUTES.ADMIN_DASHBOARD}
              exact
              component={Dashboard}
              exact
            />
            <Route path="/" component={Dashboard} {...repeatedProps} />
            {/* client */}

            {/* <NoAuthRoute
              path={ROUTES.DASHBOARD}
              component={Dashboard}
              {...repeatedProps}
            /> */}

            {/* Keep this in last always */}
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const actions = {};

export default connect(mapStateToProps, actions)(Routers);
