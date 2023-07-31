<!-- <template>
  <div class="tag">
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
       <PostList :posts="postsWithTag"/>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import { ref } from '@vue/reactivity'
  import {useRoute} from 'vue-router'
  import { computed } from '@vue/runtime-core'
export default {
    components:{Spinner, PostList},
    setup(){
        const posts = ref([])
        const route = useRoute()

        console.log(posts)
        
        new Promise(resolve => {
            setTimeout(resolve, 2000)
        })

        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                posts.value = data
            })
            .catch((error) => {console.log(error.message)})

        const postsWithTag = computed(() => {
            return posts.value.filter((p) => p.tags.includes(route.params.tag))
        })


        return{
           error, posts, postsWithTag
        }
 
    }

}
</script>

<style>

</style> -->








<template>
  <div class="tag">
    <h1>Tag Page</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag"/>
      <TagCloud :posts="posts"/>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '@/composables/getPosts'
// import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'
// import { collection, getDocs } from '@firebase/firestore'
// import { projectFireStore } from '@/firebase/config'
export default {
  components: {Spinner, PostList, TagCloud},
  setup(){
  // const posts = ref([])
  // const error = ref('')
  const route = useRoute()
  const {posts, error, load} = getPosts()
  load()

  // new Promise(resolve => {
  //   setTimeout(resolve, 2000)
  // })

  // const res = await getDocs(collection(projectFireStore, 'post'))

  // fetch('http://localhost:3000/posts')
  // // fetch(res)
  //   .then(res => res.doc.data())
  //   .then(data => {
  //     posts.value = data
  //   })
  //   .catch(error => {
  //     error.value = error.message
  //     console.log(error.value)
  //   })


  const postsWithTag = computed(() => {
    return posts.value.filter((p) => 
      p.tags.includes(route.params.tag)
    )
  })

  return{error, posts, postsWithTag}
}

}
</script>

<style >
.tag
{
  max-width:1200px ;
  margin: 0 auto;
  padding: 10px;
}
</style>