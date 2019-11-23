import { observable, action } from "mobx";

const ROOT_URL =  'https://anatta-demo-app.herokuapp.com/api/';
export default {
  
    getProductDetails(id){
        return fetch(`${ROOT_URL}products/${id}`);
    },
    getProductImage(id){
        return fetch(`${ROOT_URL}images/${id}`);
    },
    getAllImages(){
        return fetch(`${ROOT_URL}images/`);
    }
    // getPosts(id){
    //     return  fetch(`${ROOT_URL}posts?${id}&skip=0&limit=10`);
    // },
    // getPostDetails(id){
    //     return  fetch(`${ROOT_URL}posts/${id}`);
    // },
    // getPostComments(id){
    //     return  fetch(`${ROOT_URL}comments?postId=${id}`);
    // },
    // deletePosts(id){
    //     return  fetch(`${ROOT_URL}posts/${id}`, {
    //         method: 'delete'
    //       });
    // }
}