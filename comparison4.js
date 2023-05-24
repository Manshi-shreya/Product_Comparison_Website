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
    "title":"belt",
    "price":" &#x20b9 127",
    "description":"NESSME Women's Faux Leather Belt Black Double-O-Ring Silver (36)",
    "brand":"NESSME",
    "image":"belt.jpg",
    "link":"https://amzn.eu/d/4DtiipS "
},{
    "id":2,
    "title":"shoes",
    "price":" &#x20b9 499",
    "description":"Sole: Ethylene Vinyl Acetate,Closure: Lace-Up,Fit Type: Regular,Shoe Width: Medium",
    "brand":"CLYMB",
    "image":"shoe.jpg" ,
    "link":"https://amzn.eu/d/4DOn5Fn "
},{
    "id":3,
    "title":"socks",
    "price":" &#x20b9 330",
    "description":"Care Instructions: Machine Wash,Material - Cotton Made from superior material and perfect Sports Socks,Made with soft & ultra-breathable Mercerised Cotton with mesh design",
    "brand":"Generic",
    "image":"socks.jpg" ,
    "link":" https://amzn.eu/d/ch8Ep6u "
},
{
    "id":4,
    "title":"jewellery",
    "price":" &#x20b9 139",
    "description":" Brado Jewellery Micro Gold Plated White American Diamond Square & One Love Heart Shape Pendant With Love Heart Chain Combo Of 3 Necklace for Women & Girls (Yellow)",
    "brand":"Brado",
    "image":"jewel.jpg",
"link":"https://amzn.eu/d/hSKTLih "
}
,
{
    "id":5,
    "title":"bag",
    "price":"&#x20b9",
    "description":" ",
    "brand":"",
    "image":"",
"link":""
}
];


product2= [{
    "id":0,
    "title":"",
    "price":"&#x20b9",
    "description":"",
    "brand":"",
    "image":"",
    "link":"https://www.amazon.in/"
},{
    "id":1,
    "title":"belt",
    "price":" &#x20b9 239",
    "description":"Women Casual, Party, Formal, Evening Black Genuine Leather Belt",
    "brand":"Next Look",
    "image":"belt.jpg",
    "link":"https://dl.flipkart.com/dl/next-look-women-casual-party-formal-evening-black-genuine-leather-belt/p/itm964a2c03ea973?pid=BELFZ6UCCP58PGQH&cmpid=product.share.pp&_refId=PP.34e50dec-ca01-4b23-984c-36ddb1a6b864.BELFZ6UCCP58PGQH&_appId=WA "
},{
    "id":2,
    "title":"shoes",
    "price":" &#x20b9 499",
    "description":"Color,Blue-Inner material,Skin Fit,Outer material-Synthetic Leather",
    "brand":"CLYMB",
    "image":"shoe.jpg" ,
    "link":"https://dl.flipkart.com/s/NhpyqxuuuN "
},{
    "id":3,
    "title":"socks",
    "price":"&#x20b9 500",
    "description":"Fabric-COTTON,Type-Ankle Length, Calf Length, Mid-Calf/Crew Socks,Series-PRINTED",
    "brand":"Nicsy",
    "image":"socks.jpg" ,
    "link":"https://dl.flipkart.com/s/uRnTnVNNNN "
},{
    "id":4,
    "title":"jewellery",
    "price":" &#x20b9 219",
    "description":"Color-Gold,Model Name-Micro Gold Plated White American Diamond Square And One Love Heart Shape Pendant With Satari Chain Combo Of 3 Necklace Golden Chain Pendant for Women and Girls,Model Number-BJ-White-SP-H S C",
    "brand":"brado",
    "image":"jewel.jpg",
    "link":" https://dl.flipkart.com/s/ueKDbHNNNN " 

},
{
    "id":5,
    "title":"bag",
    "price":"&#x20b9",
    "description":"",
    "brand":"",
    "image":"",
    "link":"" 

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
    "title":"belt",
    "price":" &#x20b9 159",
    "description":"Multicolor Artificial Leather Belt,Material : Faux Leather/Leatherette,Pattern:Solid",
    "brand":"VK ENT",
    "image":"belt.jpg",
    "link":"https://www.meesho.com/s/p/1r2xyz?utm_source=s_w "
},{
    "id":2,
    "title":"Shoes",
    "price":" &#x20b9 598",
    "description":"9380 Blue Trendy & Stylish Sports Running,Material : PVC,Sole Material : PVC,Pattern : Solid",
    "brand":"A S Traders",
    "image":"shoe.jpg" ,
    "link":"https://www.meesho.com/s/p/12v7yx?utm_source=ws "
},{
    "id":3,
    "title":"socks",
    "price":" &#x20b9 181",
    "description":"Pattern : Solid,Type : Regular,5 PAIRS Women's Cotton Ankle Length Sports Socks (Free Size_Multi Color)",
    "brand":"Nicsy",
    "image":"socks.jpg" ,
    "link":"https://www.meesho.com/s/p/3dullc?utm_source=ws "
},{
    "id":4,
    "title":"jewellery",
    "price":"&#x20b9 129",
    "description":" Plating : Gold Plated,Stone Type : Onyx,Type : Pendant with Chain,Net Quantity (N) : 3",
    "brand":"-NA-",
    "image":"jewel.jpg",
    "link":" https://www.meesho.com/s/p/406o1b?utm_source=ws " 

},
{
    "id":5,
    "title":"bag",
    "price":"Rs.",
    "description":" ",
    "brand":"",
    "image":"",
    "link":"" 

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

