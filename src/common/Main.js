import React from 'react';

import Stage from '../page/Stage';
import Music from '../page/Music';
import Setting from '../page/Setting';
import History from '../component/History';
import { Route, Switch } from 'react-router-dom';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Stage />
                </Route>
                <Route path="/music">
                    <Music />
                </Route>
                <Route path="/setting">
                    <Setting />
                </Route>
            </Switch>
            <History />
        </main>
    )
}

export default Main;