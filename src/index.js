import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import dogsReducer from '../reducers/DogsReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import App from './App'

const store = createStore(dogsReducer, devToolsEnhancer());

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)