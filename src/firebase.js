import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: 'AIzaSyBsIb_OQOk-wr6ckHi8REXNfUpq-2_G4bo',
    authDomain: 'pixelsnap-34258.firebaseapp.com',
    projectId: 'pixelsnap-34258',
    storageBucket: 'pixelsnap-34258.appspot.com',
    messagingSenderId: '744405965564',
    appId: '1:744405965564:web:d10a716045ca9d59bd1579',
    measurementId: 'G-4CJ9SLV656'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
