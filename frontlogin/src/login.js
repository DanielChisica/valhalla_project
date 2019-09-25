import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import axios from 'axios';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        console.log('Se disparo')
        console.log(this.props.user.email)
        const usuario={
            correo: this.props.user.email,
            nombre: this.props.user.displayName
        }
        console.log(usuario)
        axios.post('http://localhost:8080/api/user', usuario)
            .then(res => console.log(res.data));
    }

    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;

      return (
        <div>
            {
              user
                ? <p>Hello, {user.email}</p>
                : <p>Please sign in.</p>
                
            }
            
  
            {
                user
                  ? <button onClick={this.onClick}>Entrar</button>
                  : <button onClick={signInWithGoogle}>Sign in with Google</button>
            }

            {
                user
                    ? <button onClick={signOut}>Salir</button>
                    : <p>{user}</p>
            }
        </div>
      );
      
    }
  }

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
