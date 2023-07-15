import MOCK_DATA from '../data/MOCK_DATA.json' assert { type: 'json'}
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config.js'

const productosRef = collection(db, "productos")

MOCK_DATA.forEach((item) => {
    delete item.id

    addDoc(productosRef, item)
})

