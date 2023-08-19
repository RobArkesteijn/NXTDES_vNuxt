import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCCZJkv-2SlOrpefwE42iVsnWu2XZeYW5Q',
    authDomain: 'nxtdes-a13c5.firebaseapp.com',
    databaseURL:
      'https://nxtdes-a13c5-default-rtdb.europe-west1.firebasedatabase.app/',
    projectId: 'nxtdes-a13c5',
    storageBucket: 'nxtdes-a13c5.appspot.com',
    messagingSenderId: '1096872603179',
    appId: '1:1096872603179:web:b36d01a8131a8f2728c46e',
    measurementId: 'G-K70F3YMNRE',
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getDatabase(firebaseApp);

  nuxtApp.vueApp.provide('database', db);
  nuxtApp.provide('database', db);
});
