import React, {Fragment} from 'react'
import './App.scss';
import HomeScreen from './screens/home';
import Routing from './routes';

const App = () => (

    <Fragment>
        <HomeScreen/>
        <Routing/>
    </Fragment>

)

export default App;