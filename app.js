"use strict";

window.addEventListener("load", initApp);

const endpoint = "https://testings-78997-default-rtdb.firebaseio.com/";

async function initApp() {
    console.log("Javascript is running!");
    updateGrid();
    
}

async function updateGrid() {
  const postits = await getPosts();
    for (const posts of postits) {
        showPosts(posts);
    }
    const userss = await getUsers();
    for (const users of userss) {  
        showUsers(users);        
    }
}
async function getPosts() {
  const response = await fetch(`${endpoint}/posts.json`);
  const data = await response.json();
  const posts = preparePostData(data);
  console.log(data);
  return posts;
}

async function getUsers() {
    const response = await fetch(`${endpoint}/users.json`);
    const data = await response.json();
    const users = preparePostData(data);
    console.log(data);
    return users;
}

function prepareUserData(dataObject) {
    const userArray = [];
    for (const key in dataObject) {
      const user = dataObject[key];
      user.id = key;
      console.log(post);
      userArray.push(post);
    }
    console.log(userArray);
    return userArray;
}d

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
    <div class="grid-item">
    <h1 id="posttitel">${post.title}</h1>
    <div id="postbody">${post.body}</div>
    <img src="${post.image}">
    </div>`;

    document.querySelector("#posts").insertAdjacentHTML("beforeend", myHTML);
}

function showUsers(user) {
const myHTML = /*html*/ `
    <div class="grid-item">
    <h1 id="usertitel">${user.title}</h1>
    <div>${user.name}</div>
    <div>${user.mail}</div>
    <div>${user.phone}</div>
    <img src="${user.image}">
    </div>`;

document.querySelector("#users").insertAdjacentHTML("beforeend", myHTML);
}

async function createPost(title, body, image) {
		const newPost = { 
				title: title, 
				body: body,
				image: image 
		};
        const postAsJson = JSON.stringify(newPost);
        const response = await fetch(`${endpoint}/posts.json`, 
				{ 
						method: "POST", 
						body: postAsJson 
				}
		);
        const data = await response.json();
        console.log(data);
}
async function deletePost(id) {
  const url = `${endpoint}/posts/${id}.json`;
  const res = await fetch(url, { method: "DELETE" });
  console.log(res);
}

async function updatePost(id, title, image) {
    const postToUpdate = {title, image};
    const postAsJson = JSON.stringify(postToUpdate);
    const url = `${endpoint}/posts/${id}.json`;

    const update = await fetch(url, { method: "PUT", body: postAsJson });
    const data = await update.json();
    console.log(data);
}