import {Product} from "../model/product";

export class ProductService{
    trending:Product[];
    cart:Product[];
    constructor(){
        this.trending=[
            new Product(101,"Dancing People","Tamatina Modern Art",2000,5,"./assets/tamatina/tart1.jpg"),
            new Product(102,"Lord Krishna & Radha","Tamatina Modern Art",2500,5,"./assets/tamatina/tart2.jpg"),
            new Product(103,"Sufi Dance","Tamatina Modern Art",3000,5,"./assets/tamatina/tart3.jpg"),
            new Product(104,"Women Dancing","Tamatina Modern Art",2000,5,"./assets/tamatina/tart5.jpg"),
            new Product(105,"Lord Ganesha","Tamatina Modern Art",3000,5,"./assets/tamatina/tart6.jpg"),
            new Product(106,"Flora Art","Tamatina Modern Art",2500,5,"./assets/tamatina/tart7.jpg"),
            new Product(107,"Figurative Painting","Canvas Painting",5000,5,"./assets/tamatina/tart9.jpg"),
            new Product(108,"Flora Painting","Tamatina Modern Art",2000,5,"./assets/tamatina/tart10.jpeg")

        ];
        this.cart=[];
    }


    addToCart(product:Product){
        let flag=0;
        for(let index=0;index<this.cart.length;index++){
            if(this.cart[index].productId==product.productId){
                flag=1;
                this.cart[index].quantity++;
                break;
            }
        }
            if(flag==0)
                this.cart.push(product);
                for(let index=0;index<this.trending.length;index++){
                    if(this.trending[index].productId == product.productId)
                    {
                        this.trending[index].quantity--;
                    }  
                }
            
        
    }
    getProducts():Product[]{
        return this.trending;
      }
      getProduct(id:number):Product{
        for(let index=0;index<this.trending.length;index++)
        {
            if(this.trending[index].productId==id)
            {
                return this.trending[index];
            }
    }
    return null;

  }

}