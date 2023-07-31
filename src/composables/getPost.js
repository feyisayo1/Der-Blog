import { collection, doc, getDoc } from "firebase/firestore"
import {projectFireStore} from '../firebase/config'
import { ref } from "vue"

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try{
      // const res = await getDoc(collection(projectFireStore, 'posts'))
      // const res = await projectFireStore.collection('posts').doc(id).get()
      // post.value = res.docs.map(doc => {
      //   return{...doc.data(), id: doc.id}
      // })
      // console.log(res)
      // if(res.empty){
      //   throw Error('the id does not exist')
      // }
   
      // post.value = res.docs.map(doc => {
      //   return{...doc.data(), id: doc.id}
      // })
      // console.log(post.value);

      
      // res.forEach((doc) => {
      //   post.value = {...doc.data(), id: doc.id}
      //   console.log("data:", doc.data(), "id:", doc.id )
      // })
      // console.log(res.doc.data());
      //   console.log(post.value)


      const docRef = doc (projectFireStore, "posts", id)
      const docSnap = await getDoc(docRef)
      // console.log(docRef);
      // console.log(docSnap);
      if(docSnap.exists()){
        post.value = docSnap.data()
        console.log(post.value)
      }else('the post does not exist')

    }
    catch{
      // error.value = err.message
      // console.log(error.value)
    }
  }

  return { post, error, load }
}
  
export default getPost 