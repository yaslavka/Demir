import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, BrowserRouter, Redirect, Switch} from "react-router-dom";
import {privateRouteConfig} from "../../routes";
import RouteWithSubRoutes from "../../components/RouteWithSubRoutes";
import omit from "lodash-es/omit";
import r from "../../constants/routes.constants";
import {Sugar} from "react-preloaders2";
//import {Route, BrowserRouter as Router, Switch, BrowserRouter} from 'react-router-dom';

function PrivateRoutes({ history }){
    return(
        <div>
            <BrowserRouter history={history}>
                <Router>
                    <main className="clearfix">
                        <Switch>
                            {privateRouteConfig.map((route) => (
                                <RouteWithSubRoutes key={route.id} {...omit(route, 'id')} />
                            ))}

                            <Redirect to={r.root} />
                        </Switch>
                    </main>
                </Router>
                <Sugar background={'rgb(60, 172, 254)'} color={`rgb(255, 255, 255)`}/>
            </BrowserRouter>
        </div>
    )
}
PrivateRoutes.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default PrivateRoutes
