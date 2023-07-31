import { ref } from "vue"
import {projectFireStore} from '../firebase/config'
import { collection, doc, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    const load = async () => {
      try{
//         const querySnapshot = await getDocs(collection(projectFireStore, "users"));
//         querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);

     
// });
      const res = await getDocs(collection(projectFireStore, 'posts'))
        
      console.log(res);
      // const q = query(res, orderBy("createdAt", "desc"))
      // console.log(q);

      posts.value = res.docs.map(doc => {
        console.log(doc.id, doc.data(), 'hey') 
        return {...doc.data(), id: doc.id}
      })

      // onSnapshot(q, (snapshot) => {
      //   snapshot.res.docs.forEach((doc) => {
      //     posts.value.push({...doc.data(), id: doc.id})
      //   })
      // })

    
      console.log(posts.value)
      console.log('final post' ,posts.value );
      

      console.log(res)
      }
      catch(err){
        error.value = err.message
        console.log(error.value)
      }
    }

    return{posts, error, load}
}


export default getPosts