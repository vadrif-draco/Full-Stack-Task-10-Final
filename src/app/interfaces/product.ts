// export interface Product {
//   id: number;
//   name: string;
//   count: number;
//   rating: number;
//   oprice: number;
//   dprice: number;
//   imageUrl: string;
//   featured: boolean;
//   recent: boolean;
//   color: string;
//   size: string;
// }
export interface Product {
  __v: number; // 0;
  _id: string; // '6346c15ea060efd7cae40589';
  name: string; // 'Product 1 Cat1';
  image: string; // 'assets/img/prod-1.jpg';
  category_id: string; //'634696ad13cecea4e9ddb8b8';
  price: number; // 100;
  discount: number; // 0.1;
  rating: number; // 4.5;
  rating_count: number; // 50;
  description: string; // 'Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1 Product 1 Cat 1';
  
  // Attributes that are only used internally by the API but are of no use to the code
  is_featured?: boolean; // true;
  is_recent?: boolean; // false;
  
  // Attributes that are required for the code to function but are not sent by the API
  color: string;
  size: string;
}
