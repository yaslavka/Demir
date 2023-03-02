import React from 'react'
import r from '../../constants/routes.constants'
import PropTypes from 'prop-types'
import { Switch, Redirect, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import {publicRouteConfig} from '../../routes'
import omit from 'lodash-es/omit'
import RouteWithSubRoutes from "../../components/RouteWithSubRoutes";
import {Sugar} from "react-preloaders2";

function PublicRoutes({history}) {
    return (
        <>
            <BrowserRouter history={history}>
                <Router>
                    <main>
                        <Switch>
                            {publicRouteConfig.map((route) => (
                                <RouteWithSubRoutes key={route.id} {...omit(route, 'id')} />
                            ))}

                            <Redirect to={r.root} />
                        </Switch>
                    </main>
                </Router>
                <Sugar background={'rgb(60, 172, 254)'} color={`rgb(255, 255, 255)`}/>
            </BrowserRouter>
        </>
    )
}

PublicRoutes.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default PublicRoutes
