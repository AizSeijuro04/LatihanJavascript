import Product from "./Product.js";

const prod1 = new Product(1,"Samsung A1","HP",2500000,3);
const prod2 = new Product(2,"Ultra Book","COMPUTER",7800000,2);
const prod3 = new Product(3,"IPhone","HP",6000000,6);
const prod4 = new Product(4,"Asus Laptop","COMPUTER",6500000,5);

//declare list table cart
let listCart = [];
/* listCart = [...listCart,prod1];
listCart = [...listCart,prod2];
listCart = [...listCart,prod3];
listCart = [...listCart,prod4];
listCart = [...listCart,prod5]; */


//regular function
function addToCart(listCart,product){
    listCart = [...listCart,product];
    return listCart;
}

//--call function addToCart
listCart = addToCart(listCart,prod1);
listCart = addToCart(listCart,prod2);
listCart = addToCart(listCart,prod3);
listCart = addToCart(listCart,prod4);

//--find all product with arrow function
const findAllProduct = (carts) => {
    if (Array.isArray(carts)) {
        return carts;
    }
} 
//console.log(findAllProduct(listCart));

//--find product by category
const findProductByCategory = (carts,category) =>{
    return carts.filter(p => p.category === category)
}
//console.log(findProductByCategory(listCart,'HP'));

//--sum total belanja
const totalBelanja = listCart.reduce((total,el)=> total + el.subTotal,0);
console.log(totalBelanja);

//--find total tagihan + diskon, jika yg dibeli >= 3 (n% diskon dari totalbelanja) 
//cara 1 : reduce with if else
const totalTagihanDiscount = listCart.reduce((total,el)=>{
    if (el.jumlahBeli >= 3) {
        return total + (el.subTotal-(el.subTotal * (10/100)));
    }
    else{
        return total + el.subTotal;
    }
},0)

console.log(totalTagihanDiscount);
//cara 2 : ternary operation
const totalTagihanDiscount2 = listCart.reduce((total,el)=>
    el.jumlahBeli >= 3 ? total + (el.subTotal-(el.subTotal * (10/100))): total + el.subTotal
, 0)
console.log(totalTagihanDiscount2);

console.log();