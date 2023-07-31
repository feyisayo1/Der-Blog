<template>
  <h1>Real-time data</h1>
</template>

<script>
import { collection, doc, onSnapshot } from '@firebase/firestore'
import { projectFireStore } from '@/firebase/config'
export default {
    setup(){
        
        // const unsub = onSnapshot(doc(projectFireStore, 'posts', 'doc.id'), (doc) => {
        //     console.log(doc)
        //     console.log('current data:' , doc.data());
        // })

        // console.log(unsub);
        const colRef = collection(projectFireStore, "posts")

        onSnapshot(colRef, (snapshot) => {
            const posts = ref([])
            snapshot.docs.forEach((doc) => {
                posts.value.push({...doc.data(), id: doc.id})
            })
            console.log(posts)
        })

    }
}
</script>

<style>

</style>