<script>
    import { auth } from './firebase.js'
    import {
        signInWithPopup,
        GoogleAuthProvider,
        onAuthStateChanged,
        signOut,
        EmailAuthProvider
    } from 'firebase/auth'

    function loginGoogle() {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }
    function logout() {
        signOut(auth)
    }
    let loggedIn = false
    onAuthStateChanged(auth, (user) => {
        console.log(user)
        if (user) {
            loggedIn = true
        } else {
            loggedIn = false
        }
    })
</script>

{#if !loggedIn}
    <button on:click={loginGoogle}>Login with Google</button>
{:else}
    <button on:click={logout}>Logout</button>
{/if}
