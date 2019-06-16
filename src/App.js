import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm.js';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBD8iDEWKJTGKWfzL3-g1hgmpq4j7Cc2QQ",
            authDomain: "manager-3a902.firebaseapp.com",
            databaseURL: "https://manager-3a902.firebaseio.com",
            projectId: "manager-3a902",
            storageBucket: "manager-3a902.appspot.com",
            messagingSenderId: "19198002661",
            appId: "1:19198002661:web:858fbf1bd6fe24fb"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                    <LoginForm />
                </View>
            </Provider>
        )
    };
}

export default App;