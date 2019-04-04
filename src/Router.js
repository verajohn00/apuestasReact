import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Login from './componentes/Login';
import Home from './componentes/Home';

const Routercomponent = () => {
    return(
        <Router SceneStyle={{ paddingTop: 35 }}>
            <Stack key="root">
            <Scene 
                key="Login"
                component={Login}
                title=""
            />
            <Scene 
                key="Home"
                component={Home}
                title=""
                initial
            />
            </Stack>
        </Router>
    );
};

export default Routercomponent;
