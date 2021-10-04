import React from 'react';
import { useState } from 'react';
import './Main.css';

import Stage from '../page/Stage';
import Music from '../page/Music';
import Setting from '../page/Setting';
import History from '../component/History';
import { Route, Switch } from 'react-router-dom';

const Main = () => {
    const [dragHeight, setDragHeight] = useState(300);

    console.log("dd: " + dragHeight);
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Stage historyHeight={dragHeight}/>
                </Route>
                <Route path="/music">
                    <Music />
                </Route>
                <Route path="/setting">
                    <Setting />
                </Route>
            </Switch>
            <History historyHeight={dragHeight} />
        </main>
    )
}

export default Main;