<script>
    import { auth } from './firebase.js'
    import { user } from './stores.js'
    import {
        signInWithPopup,
        GoogleAuthProvider,
        onAuthStateChanged,
        signOut
    } from 'firebase/auth'
    import LeftSection from './components/LeftSection.svelte'
    import RightSection from './components/RightSection.svelte'
    import CenterSection from './components/CenterSection.svelte'

    onAuthStateChanged(auth, (userData) => {
        if (userData) {
            $user = userData
        } else {
            $user = null
        }
    })
</script>

<div class="main">
    <LeftSection />
    <CenterSection />
    <RightSection />
</div>

<style>
    .main {
        display: grid;
        grid-template-columns: 0.5fr 1fr 0.5fr;
        grid-template-rows: 1fr;
        grid-template-areas: 'left center right';
    }
</style>
