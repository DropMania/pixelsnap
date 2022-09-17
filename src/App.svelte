<script>
    import { auth, db } from './firebase.js'
    import { user } from './stores.js'
    import { onAuthStateChanged } from 'firebase/auth'
    import {
        setDoc,
        doc,
        query,
        getDocs,
        collectionGroup
    } from 'firebase/firestore'
    import LeftSection from './components/LeftSection.svelte'
    import RightSection from './components/RightSection.svelte'
    import CenterSection from './components/CenterSection.svelte'

    let users = []
    getDocs(collectionGroup(db, 'public_info')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            users.push(doc.data())
        })
        console.log(users)
    })

    onAuthStateChanged(auth, async (userData) => {
        if (userData) {
            $user = userData
            setDoc(doc(db, 'users', userData.uid), {
                name: userData.displayName,
                email: userData.email,
                photo: userData.photoURL
            })
            setDoc(
                doc(db, 'users', userData.uid, 'public_info', userData.uid),
                {
                    name: userData.displayName,
                    photo: userData.photoURL
                }
            )
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
