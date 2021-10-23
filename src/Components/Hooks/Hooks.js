import { useLocation, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import HooksBanner from './HooksBanner/HooksBanner';

import './Hooks.css';

import HookButtons from './HookButtons/HookButtons';
import State from './StateHook/State';
import Effect from './EffectHook/Effect';

const Hooks = () => {

    const [docLink, setDocLink] = useState({
        useState: 'https://reactjs.org/docs/hooks-reference.html#usestate',
        useEffect: 'https://reactjs.org/docs/hooks-reference.html#useeffect'

    })

   


    return (
        <div className="Hooks">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HooksBanner selected={'React.js Hooks'} />
                        <HookButtons />
                    </Route>

                    <Route exact path="/usestate">
                        <HooksBanner selected={'useState'} />
                        <State docLink={docLink.useState} />
                    </Route>

                    <Route exact path="/useeffect">
                        <HooksBanner selected={'useEffect'} />
                        <Effect docLink={docLink.useEffect} />
                    </Route>
                </Switch>
            </Router>
            <ScrollToTop smooth color='teal' />

        </div>
    );
}




export default Hooks;