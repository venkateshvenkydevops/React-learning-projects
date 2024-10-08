import { useSelector } from "react-redux";
import { selectAllposts } from "./postSlice";
import React from 'react'

const PostList = () => {
    const posts = useSelector(selectAllposts)
    const renderpost = posts.map((values)=>
    <article key={values.id}>
         <h3>{values.title}</h3>
         <p>{values.content.substring(0,100)}</p>
    </article>)
  return (
   <section>
    <h2>Post</h2> 
    {renderpost}
   </section>
  )
}

export default PostList