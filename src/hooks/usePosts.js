import { useMemo } from "react"

export const useSortedPosts = (posts, sort) =>{

    const sortedPosts = useMemo(() => {
        if(sort){
          console.log('sortedPosts work !!!')
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
            return posts;
          }, [sort, posts]) 
      
      return sortedPosts;
}

export const usePosts = (posts, sort, query) =>{
    const sortedPosts = useSortedPosts(posts,sort);
    
    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter( posts => posts.body.toLowerCase().includes(query) |
         posts.title.toLowerCase().includes(query))
        },[query,sortedPosts])

    return sortedAndSearchPosts;
}