import React,{useState} from "react";
import Showcard from "../pages/showcard";
import Removecard from "./remove";

const data=[
    {
        offer: 1399,
        price: 799,
        item:"HRX Product",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeM_5Am_eiScnb05yos4BVVXa_cLxQlAhWAw&usqp=CAU",
        button:"Add to Card"
     },
    {
       offer: 999,
       price: 1999,
       item:"Best Of Brands",
       image:"https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/6a31/1920/510d/0c40/741a/9fb4/88fa/d713/5ff3/62ba/62ba.jpeg",
       button:"View Option"
    },
    {
       offer: 2099,
       price: 2500,
       item:"Puma Shoe", 
       image:"https://assets.ajio.com/medias/sys_master/root/20220930/bEhP/6336e3abf997ddfdbdff95f8/-1117Wx1400H-469154869-blue-MODEL9.jpg",
       button:"Add To Card"
    },
    {
        offer: 1199,
        price: 1599,
        item:"The Watch",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVNKCqGSwlYIJCCnbJt3841ky5zDPasUXSw&usqp=CAU",
        button:"Add To Card" 
     },
     {
        offer: 35999,
        price:39999,
        item:"MRF Bat",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFr5YTUC6NwQJQxMbXinYrha3ARhhFaLaPOA&usqp=CAU",
        button:"Add To Card"
     },
     {
        offer:79999,
        price:89999,
        item:"iPhone14",
        image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661026582322",
        button:"View Option"
     }

   ]
 
export default function Card(){

    const[Cart,setcart]=useState([])  
  
function Change(item={}){
    
let copy=[...Cart]
if(item.offer){
    copy.push(item)
}
setcart(copy)
}

function handlecart(item={}){
    let copy=[...Cart]
    if(item.offer){
        copy=copy.filter((_data)=> _data.price!==item.price)
    }
    setcart(copy)
}



function Chekstatus(item={}){
    let status=false
  if(item.price){
    status=Cart.filter((_data)=> _data.price===item.price).length >0
    ?true 
    :false
  }
  return status
}

return (

    <div >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container px-4 px-lg-5">
             <a class="navbar-brand" href="#!">Start Bootstrap</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                     <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                     <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                     <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                             <li><a class="dropdown-item" href="#!">All Products</a></li>
                             <li><hr class="dropdown-divider" /></li>
                             <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                             <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                         </ul>
                     </li>
                 </ul>
                 <div class="d-flex ">
                    
                     <button class="btn btn-outline-dark col " type="submit">
                         <i class="bi-cart-fill me-1"></i>
                         Cart {Cart.map((e,i)=>(
                               <Removecard 
                               onRemove={handlecart}
                               data={e}/>
                         ))}
                         <span class="badge bg-dark text-white ms-1 rounded-pill"></span>
                     </button>
                 </div>
             </div>
         </div>
     </nav>
 
     <header class="bg-dark py-5">
         <div class="container px-4 px-lg-5 my-5">
             <div class="text-center text-white">
                 <h1 class="display-4 fw-bolder">Shop in style</h1>
                 <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
             </div>
         </div>
     </header>
     <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">      
        {data.map((element,index)=> 
       (
       <Showcard
       disable={Chekstatus(element)}
        data={element}
        onChange={Change}
        />)
        )}   
        </div>
    </div>
</section>
    
     
     <footer class="py-5 bg-dark">
         <div class="container"><p class="m-0 text-center text-white">Copyright &copy; uk Website 2022</p></div>
     </footer>
     </div>


    

   
    
  
)
}