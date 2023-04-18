"use strict";

window.addEventListener("load", initApp);

const endpoint = "https://testings-78997-default-rtdb.firebaseio.com/";

async function initApp() {
    console.log("Javascript is running!");
    const postits = await getPosts();
    for (const posts of postits) {
        showPosts(posts);
    }
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

function showPosts(post) {
    const myHTML = /*html*/ `
    <div>
    <h1 id="posttitel">${post.title}</h1>
    <img src="${post.image}">
    </div>`;

    document.querySelector("#posts").insertAdjacentHTML("beforeend", myHTML);
}

// function addPost() {
    
// }