export default class Product{
    constructor(prodId,prodName,category,price=0,jumlahBeli=1){
        this.prodId = prodId;
        this.prodName = prodName;
        this.category = category;
        this.price = price;
        this.jumlahBeli= jumlahBeli;
        this.subTotal = this.price * this.jumlahBeli
    }

    toString(){
        return `prodId= ${this.prodId},prodName = ${this.prodName},
        category = ${this.category}, price = ${this.price}, jumlahBeli = ${this.jumlahBeli} 
        subTotal = ${this.subTotal}      
        `
    }
}