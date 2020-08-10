import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NotFound404 from '../Components/NotFound404'
import ArtistContainer from '../Containers/ArtistsContainer'

class App extends React.Component {

    render() {      
        return (  
            <Switch>
                <Route exact path='/' component={ArtistContainer}/>
                <Route path='/artists' component={ArtistContainer}/>
                <Route path='/userInput' />
                <Route component={NotFound404} />
            </Switch>
        )
    }
}

export default App