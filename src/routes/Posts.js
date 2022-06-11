//As the app loads you should fetch the initial posts
//by making a GET request to /api/posts, and populating
//the posts into the JSX.
import { useState, useEffect } from "react";
// import AuthForm from "../components/AuthForm";
import ColumnHeaders from "../components/ColumnHeaders";
import Post from "../components/Post";
// import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts"
      );
      const posts = await response.json();
      console.log(posts);
      setPosts(posts.data.posts);
    }
    getPosts();
  }, []);

  // const posts, setPosts = useState([]);
  // useEffect(() => {
  //   //fetch the initial posts by making a GET request to /api/posts
  // }, [])
  return (
    <main>
      <h1>Posts</h1>
      {/* {
          //Map over the posts and display each post in like a card or something
      posts.map(post => <div>{post}</div>)
      } */}
      <table>
        <tr>
          <ColumnHeaders />
        </tr>
        {/* <tr>
          <th>Macbook</th>
          <th>$2000</th>
          <th>Max</th>
        </tr> */}
        {posts.map(({ _id, title, price, author }) => (
          //   <tr key={name}>
          //     <td>{name}</td>
          //     <td>{price}</td>
          //     <td>{seller}</td>
          //   </tr>
          <Post key={_id} id={_id} name={title} price={price} seller={author.username} />
        ))}
      </table>
    </main>
  );
};

export default Posts;
