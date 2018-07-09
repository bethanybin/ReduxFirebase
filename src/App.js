import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount(){
    var config = {
    apiKey: 'AIzaSyBKDphf1k0EFrrRZoRvlkUw7-OYgXvSnbY',
    authDomain: 'manager-c6466.firebaseapp.com',
    databaseURL: 'https://manager-c6466.firebaseio.com',
    projectId: 'manager-c6466',
    storageBucket: 'manager-c6466.appspot.com',
    messagingSenderId: '472972620816'
    };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
