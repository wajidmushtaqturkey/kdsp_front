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
import Settings from "pages/admin/Settings";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";

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
            <Route path="/" component={Auth} {...repeatedProps} />
            <Route path="/admin" component={Admin} {...repeatedProps} />
            <Route
              path="/personal-detail"
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
            <Redirect from="/auth" to="/auth/login" {...repeatedProps} />

            {/* admin */}

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

            {/* <Route path="/admin/settings" exact component={Settings} exact />
            <Route path="/admin/tables" exact component={Tables} exact /> */}

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
