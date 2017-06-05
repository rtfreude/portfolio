import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDzcCJHSpreOlbReHkZ2GeM4XO4L8RmeRk",
  authDomain: "goalcoach-628ef.firebaseapp.com",
  databaseURL: "https://goalcoach-628ef.firebaseio.com",
  projectId: "goalcoach-628ef",
  storageBucket: "goalcoach-628ef.appspot.com",
  messagingSenderId: "768886422493"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');