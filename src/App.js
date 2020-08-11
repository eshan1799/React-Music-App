import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NotFound404 from '../Components/NotFound404'
import ArtistContainer from '../Containers/ArtistsContainer'
import UserInput from '../Components/UserInput';
import DogsReadContainer from '../Containers/DogsReadContainer'

class App extends React.Component {

    render() {      
        return (  
            <Switch>
                <Route exact path='/' component={ArtistContainer}/>
                <Route path='/artists' component={ArtistContainer}/>
                <Route path='/userInput' component={UserInput}/>
                <Route path='/dogs' component={DogsReadContainer}/>
                <Route component={NotFound404} />
            </Switch>
        )
    }
}

export default App