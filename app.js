"use strict";

window.addEventListener("load", initApp);

const endpoint = "https://testings-78997-default-rtdb.firebaseio.com"

function initApp() {
    console.log("Javascript is running!");
    getPosts();
}
async function getPosts() {
  const response = await fetch(`${endpoint}/posts.json`);
  const data = await response.json();
  const posts = preparePostData(data);
  console.log(data);
  return posts;
}

function preparePostData(dataObject) {
    const postArray = [];
    for (const key in dataObject) {
      const post = dataObject[key];
      post.id = key
      console.log(post);
      postArray.push(post);
    }
    console.log(postArray);
    return postArray;
}