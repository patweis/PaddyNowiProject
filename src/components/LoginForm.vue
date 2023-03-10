
<template>
    <div class="login-box">
        <h2>Login</h2>
        <form>
             <div class="form-group">
            <input id="email" type="text" placeholder="E-Mail" v-model="email" required>
        </div>
        <div class="form-group">
            <input id="password" type="password" placeholder="Passwort" v-model="password" required>
        </div>
        <p><button type="submit" @click.prevent="login">Login</button></p>
        </form>
       
        <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
        </div>
        <div @click="gotoanchor()">toCoppyright on mainpage</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import router from "@/router";
import type { FirebaseError } from "@firebase/util";


interface ErrorCodes {
  [key: string]: string;
}

const email = ref("");
const password = ref("");

const errorCodes:ErrorCodes = {
    'auth/email-already-in-use': 'Diese E-Mail-Adresse ist bereits registriert.',
    'auth/user-not-found': 'Diese E-Mail-Adresse ist nicht registriert.',
    'auth/wrong-password': 'Das eingegebene Passwort ist falsch.',
    'auth/invalid-email': 'Die E-Mail-Adresse ist ungültig.',
    'auth/weak-password': 'Das Passwort muss mindestens 6 Zeichen lang sein.'
};

let errorMessage = ref("");


const login = () => {
    errorMessage.value = "";
    const auth = getAuth(); //for firebase/auth
    signInWithEmailAndPassword(auth, email.value, password.value)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((data) => {
            errorMessage.value = "";
            console.log("Successfullly signed in!");
            console.log(auth.currentUser);
            router.push('/editor');
        }).catch((error:FirebaseError)=>{
            console.log(error)
             errorMessage.value = errorCodes[error.code] || 'Es ist ein Fehler aufgetreten.' ;

        })
    }

    
const gotoanchor = () => {
     router.push({ path: '/', hash: '#coppyright' });
    }



</script>
<style scoped>
.login-box {
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}

.form-group {
    margin-bottom: 1.1rem;
}


.login-box label {
    display: block;
    margin-bottom: 0.5rem;
}

.login-box input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
}

.login-box button {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 3px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.error-message {
    background-color: #f8d7da;
    color: #721c24;
    padding: 1rem;
    border-radius: 5px;
}
</style>
