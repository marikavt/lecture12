// // async function deep_copy(obj){
// //     return new Promise((resolve,reject) => {
// //         if(typeof obj !== 'object' || obj === null){
// //             reject(new Error("არგუმენტი უნდა იყოს ობიექტი"))
// //         }else{
// //             const copied_object = JSON.parse(JSON.stringify(obj));
// //             resolve(copied_object);
// //         }
// //     })
// // }
// // const obj = {
// //     a:1,
// //     b:{
// //         c: 9,
// //         g:[6,7,4]
// //     }
// // };


// // deep_copy(obj)
// // .then(copied_object => console.log(copied_object))
// // .catch(error => console.error(error.message));

//  apiUrl = "https://jsonplaceholder.typicode.com"

// async function fetchPosts (){
//     const response = await fetch(`${apiUrl}/posts`); 

//     try {
        
//     if(!response.ok){
//         throw new Error(`Failed to fetch posts: ${response.status}`)

//     }

//     return response.json();
// }catch(e){
//     console.log(e)
// }

// }

// function listsPosts(postContainerElementId){
//     const postContainerElement = document.getElementById
//     (postContainerElementId);
    
//     if(!postContainerElement){
//         return
//     }

//     fetchPosts()
//     .then(posts => {
//         if(!posts){
//             postContainerElement.innerHTML = 'No posts'
//             return;
//         }

//         for(const post of posts){
//             postContainerElement.appendChild(postElement(post))
//         }
//     })
//     .catch(e => {
//         console.log(e)
//     })
// }


// function postElement(postconst){
//     const anchorElement = document.createElement('a');
//     anchorElement.setAttribute('href',`${apiUrl}/posts/${post.id}`)
//     anchorElement.setAttribute('target','_blank');
//     anchorElement.innerText = post.title;

//     const postTitleElement = document.createElement('h3');
//     postTitleElement.appendChild(anchorElement);


//     return postTitleElement;
// }


// function pipe(...args){
//    args.forEach()
// }

