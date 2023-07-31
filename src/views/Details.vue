<template>
    <div v-if="error">{{error}}</div>
    <div v-if="post" class="post">
       <h3>{{post.title}}</h3>
       <p class="pre">{{post.body}}</p>
       <button class="delete" @click="handleClick">delete post</button>
    </div>
    <div v-else>
        <Spinner/>
    </div>
</template>

<script>
import { projectFireStore } from '@/firebase/config'
import { useRoute, useRouter } from 'vue-router'
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost' 
import { deleteDoc, doc } from '@firebase/firestore'
// import Spinner from '../components/Spinner.vue'

export default {
    props:['id'],
    components: { Spinner },
    setup(props){
        const route = useRoute()
        const router = useRouter()
        console.log(route);

        const {post, error, load} = getPost(props.id)

        load()

        const handleClick = async () => {
            // await projectFireStore.collection('post')
            // .doc(props.id)
            // .delete()

            await deleteDoc(doc(projectFireStore, 'posts', props.id))
            console.log('deleted')
            router.push({name: "Home"})
        }
 

        return{post, error, handleClick}
    }
}
</script>

<style>
.post{
    max-width: 1200px;
    margin: 0 auto;
}
.post p{
   color:#444; 
   line-height: 1.5em;
   margin-top: 40px;
}
.pre{
    white-space: pre-wrap;
}
button.delete{
    margin:10px auto;
    background: #2b7f9b;

}
</style>