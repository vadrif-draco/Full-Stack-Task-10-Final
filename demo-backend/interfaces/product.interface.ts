export default interface Product {

  _id: string,
  name: string, // "Product 7 Cat 2",
  image: string, // "assets/img/prod-7.jpg",
  category_id: string, // "category-2",
  description: string, // "Product 7 belongs to Category 2",
  price: number, // 100,
  discount: number, // 0.1,
  rating: number, // 4.5,
  rating_count: number, // 150,
  is_featured: boolean, // false,
  is_recent: boolean // false

}