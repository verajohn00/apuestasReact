import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Login from './componentes/Login';

const Routercomponent = () => {
    return(
        <Router SceneStyle={{ paddingTop: 35 }}>
            <Stack key="root">
            <Scene 
                key="Login"
                component={Login}
                title=""
                initial
            />
            </Stack>
        </Router>
    );
};

export default Routercomponent;
