export class Product{
    productId:number;
    productName:string;
    productCategory:string;
    price:number;
    quantity:number;
    image:File;
    constructor(productId=0,productName="",productCategory="",price=0,quantity=0,image?){
        this.productId=productId;
        this.productName=productName;
        this.price=price;
        this.image=image;
        this.quantity=quantity;
        this.productCategory=productCategory;
        
        

    }

}