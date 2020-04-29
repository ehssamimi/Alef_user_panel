import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';



class App extends Component {
    render() {
        const { match } = this.props;
        console.log(match);

        return (
            <div className="w-100">
                <Suspense fallback={<div className="loading" />}>
                    <Switch>
                        <Redirect
                            exact
                            from={`${match.url}`}
                            to={`/courses`}
                        />

                        <Redirect to="/error" />
                    </Switch>
                </Suspense>
            </div>
        );
    }
}


export default App;
