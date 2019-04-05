import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Login from './componentes/Login';
import Home from './componentes/Home';
import Futbol from './componentes/Futbol';

const Routercomponent = () => {
    return(
        <Router SceneStyle={{ paddingTop: 35 }}>
            <Stack key="root">
            <Scene 
                key="Futbol"
                component={Futbol}
                title=""
                initial
            />
            <Scene 
                key="Login"
                component={Login}
                title=""
            />

            </Stack>
        </Router>
    );
};

export default Routercomponent;
