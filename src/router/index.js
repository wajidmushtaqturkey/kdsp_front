import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ROUTES } from "../constants";
import { Dashboard } from "../pages";
import LayoutWrapper from "./LayoutWrapper";
import Admin from "../layouts/Admin";
import Auth from "../layouts/Auth";

const NoAuthRoute = ({ ...props }) => {
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
      forAdminOnly: false,
    };
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/auth" component={Auth} />
            {/* <NoAuthRoute
              path={ROUTES.DASHBOARD}
              component={Dashboard}
              {...repeatedProps}
            /> */}

            {/* Keep this in last always */}
            {/* <NoAuthRoute path={Route.PAGE_NOT_FOUND} component={PageNotFound} /> */}
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
