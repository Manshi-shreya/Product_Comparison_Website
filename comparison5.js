product1= [{
    "id":0,
    "title":"",
    "price":"",
    "description":"",
    "brand":"",
    "image":"",
    "link":"https://www.amazon.in/"
},{
    "id":1,
    "title":"showpeice",
    "price":"&#x20b9 179",
    "description":"amazon suti",
<<<<<<< HEAD
    "brand":"anarkali",
    "image":"showpeice.jpg",
=======
    "brand":"himalaya",
    "image":"facewash.jpg",
>>>>>>> 856f8463e9156250f39e6583aecf48ebb8fd299c
    "link":"https://amzn.eu/d/5xehnB0"
},{
    "id":2,
    "title":"curtain",
    "price":"300",
    "description":"amazon suti",
    "brand":"anarkali",
    "image":"bg2.jpg" ,
    "link":"https://www.amazon.in/"
},{
    "id":3,
    "title":"crockery",
    "price":"400",
    "description":"amazon cotton",
    "brand":"baby wear",
    "image":"skin2.jpg" ,
    "link":"https://www.amazon.in/"
},{
    "id":4,
    "title":"mat",
    "price":"500",
    "description":"amazon cotton size-28 ",
    "brand":"denim",
    "image":"wash.jpg",
    "link":"https://www.amazon.in/" 

},
{
    "id":5,
    "title":"vase",
    "price":"500",
    "description":"amazon cotton size-28 ",
    "brand":"denim",
    "image":"jeans.avif",
    "link":"https://www.amazon.in/" 

}
];


product2= [{
    "id":0,
    "title":"",
    "price":"",
    "description":"",
    "brand":"",
    "image":"",
    "link":"https://www.amazon.in/"
},{
    "id":1,
    "title":"Showpeice",
    "price":"&#x20b9 169",
    "description":"amazon suti",
<<<<<<< HEAD
    "brand":"amra",
    "image":"showpeice.jpg",
    "link":"https://www.amazon.in/"
=======
    "brand":"Himalaya",
    "image":"facewash.jpg",
    "link":"https://dl.flipkart.com/dl/dinine-craft-set-4-showpiece-home-decor-handicraft-table-office-small-statue-baby-monk-buddha-modern-interior-multi-color-decorative-cm/p/itmd22b42bd5e2f3?pid=SHIFYG8APACZRPM8&cmpid=product.share.pp&_refId=PP.79354b88-e4c7-4cc4-b9df-ad3127fc1953.SHIFYG8APACZRPM8&_appId=WA "
>>>>>>> 856f8463e9156250f39e6583aecf48ebb8fd299c
},{
    "id":2,
    "title":"curtain",
    "price":"300",
    "description":"amazon suti",
    "brand":"anarkali",
    "image":"bg2.jpg" ,
    "link":"https://www.amazon.in/"
},{
    "id":3,
    "title":"crockery",
    "price":"400",
    "description":"amazon cotton",
    "brand":"baby wear",
    "image":"skin2.jpg" ,
    "link":"https://www.amazon.in/"
},{
    "id":4,
    "title":"mat",
    "price":"500",
    "description":"amazon cotton size-28 ",
    "brand":"pusha",
    "image":"wash.jpg",
    "link":"https://www.amazon.in/" 

},
{
    "id":5,
    "title":"vase",
    "price":"500",
    "description":"amazon cotton size-28 ",
    "brand":"denim",
    "image":"jeans.avif",
    "link":"https://www.amazon.in/" 

}
];


product3= [{
    "id":0,
    "title":"",
    "price":"",
    "description":"",
    "brand":"",
    "image":"",
    "link":"https://www.amazon.in/"
},{
    "id":1,
    "title":"showpeice",
    "price":"&#x20b9 138",
    "description":"amazon suti",
<<<<<<< HEAD
    "brand":"anarkali",
    "image":"showpeice.jpg",
    "link":"https://www.amazon.in/"
=======
    "brand":"Himalya",
    "image":"facewash.jpg",
    "link":"https://www.meesho.com/s/p/2hz4hf?utm_source=s_w"
>>>>>>> 856f8463e9156250f39e6583aecf48ebb8fd299c
},{
    "id":2,
    "title":"curtain",
    "price":"300",
    "description":"amazon suti",
    "brand":"anarkali",
    "image":"bg2.jpg" ,
    "link":"https://www.amazon.in/"
},{
    "id":3,
    "title":"crockery",
    "price":"400",
    "description":"amazon cotton",
    "brand":"baby wear",
    "image":"skin2.jpg" ,
    "link":"https://www.amazon.in/"
},{
    "id":4,
    "title":"mat",
    "price":"500",
    "description":"amazon cotton size-28 ",
    "brand":"jordan",
    "image":"wash.jpg",
    "link":"https://www.amazon.in/" 

},
{
    "id":5,
    "title":"vase",
    "price":"500",
    "description":"amazon cotton size-28 ",
    "brand":"denim",
    "image":"jeans.avif",
    "link":"https://www.amazon.in/" 

}
];




for(var i=1;i<product1.length;i++){
    document.getElementById("select1").innerHTML+=`<option value="${i}">${product1[i].title}</option>`;
    document.getElementById("select2").innerHTML+=`<option value="${i}">${product2[i].title}</option>`;
    document.getElementById("select3").innerHTML+=`<option value="${i}">${product3[i].title}</option>`;
}


function item1(a){
   //img ko call krte just like alert
   //source change krani h-- js ke pg me product arr me jis variable yani index ko change krna hjo ki pass hoga from func in a , a denotes whole description of one object therefore choose its atrr
    document.getElementById("img1").src=product1[a].image;
//for price
document.getElementById("price1").innerHTML= product1[a].price;
//for brand
document.getElementById("brand1").innerHTML= product1[a].brand;
//for desc
document.getElementById("desc1").innerHTML= product1[a].description;
document.getElementById("link1").href=product1[a].link;

}

function item2(a){
    document.getElementById("img2").src=product2[a].image;
    document.getElementById("price2").innerHTML= product2[a].price;
    document.getElementById("brand2").innerHTML= product2[a].brand;
    document.getElementById("desc2").innerHTML= product2[a].description;
    document.getElementById("link2").href=product2[a].link;
}
function item3(a){
document.getElementById("img3").src=product3[a].image;
document.getElementById("price3").innerHTML=product3[a].price;
document.getElementById("brand3").innerHTML=product3[a].brand;
document.getElementById("desc3").innerHTML=product3[a].description;
document.getElementById("link3").href=product3[a].link;
}

