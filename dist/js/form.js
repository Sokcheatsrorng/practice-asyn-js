'use strict'
// create item for title, des, price and img
// select element
const titleElement = document.querySelector('#title');
const descriptionElement = document.querySelector('#description');
const priceElement = document.querySelector('#price');
const imageElement = document.querySelector('#image');

// create function
async function createProduct(){
    // get products
    const title = titleElement.value 
    const description = descriptionElement.value
    const price = Number(priceElement.value)
    const image = imageElement.files[0]
    const imageUrl = await uploadImage(image);

    const product = {
       title,
       price,
       description,
       categoryId: 1,
       images:[imageUrl.location]

    };
     // fetch to create products

 fetch('https://api.escuelajs.co/api/v1/products/',{
     method:"POST",
     body: JSON.stringify(product),
     headers:{
        "Content-Type": "application/json"
     }
 }).then(res => res.json()).then(data => console.log(data))

} 
  // upload image to server
    async function uploadImage(image){
     const formData = new FormData();
     formData.append('file',image);
     // send request
     const res = await fetch('https://api.escuelajs.co/api/v1/files/upload',{
        method: "POST",
        body: formData,
     });
     return res.json();
    
    }
  