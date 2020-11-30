import React, {useState, useEffect, createContext} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

// import { Container } from './styles';


export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);


  useEffect(() => {
    async function loadStorage(){
      const storageUser = await AsyncStorage.getItem('devApp');

      if(storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false);
      }
      setLoading(false)
    }
    loadStorage();
  }, [])


  const signIn = async (email,password) => {
    setLoadingAuth(true);
    await auth().signInWithEmailAndPassword(email,password)
    .then(async (value) => {
      let uid = value.user.uid;
      const userProfile = await firestore().collection('users')
      .doc(uid).get();

      let data = {
        uid,
        nome: userProfile,
        email: value.user.email
      }

      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
    })
    .catch((error) => {
      console.error(error);
      setLoadingAuth(false);
    })
  }

  const signUp = async (email, password, name) => {
    setLoadingAuth(true);
    await auth().createUserWithEmailAndPassword(email,password)
    .then(async (value) => {
      let uid = value.user.uid;
      await firestore().collection('users')
      .doc(uid).set({
        nome: name,
        email: email
      })
      .then(() => {
        let data = {
          uid,
          nome: name,
          email: value.user.email
        }

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const signOut = async () => {
    await auth().signOut();
    await AsyncStorage.clear()
    .then(() => {
      setUser(null);
    })
  }

  const storageUser = async (data) => {
   await AsyncStorage.setItem('devApp', JSON.stringify(data))
  }

  return (
      <AuthContext.Provider value={{signed: !!user, user, signUp, signIn, signOut , loadingAuth, loading}}>
          {children}
      </AuthContext.Provider>
  );
}

export default AuthProvider;