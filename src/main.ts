import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import { initializeApp } from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyCu6MtNObLrnPuIolAC3rrQBqqzgDWiebM",
  authDomain: "prantl-783b6.firebaseapp.com",
  projectId: "prantl-783b6",
  storageBucket: "prantl-783b6.appspot.com",
  messagingSenderId: "112914660239",
  appId: "1:112914660239:web:61eece01d08446669029fa"
};

const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
