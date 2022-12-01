import OrderItem from './orderItem.interface';

export default interface Order {

  shipping_info: {
    first_name: string, // "Ahmad",
    last_name: string, // "Salama",
    email: string, // "18p8805@eng.asu.edu.eg",
    mobile_number: string, // "+123456789",
    address1: string, // "123 Address St.",
    address2?: string, // "",
    country: string, // "Egypt",
    city: string, // "Cairo",
    state: string, // "Giza",
    zip_code: string, // "12828"
  },
  _id: string,
  sub_total_price: number, // 1215.65,
  shipping: number, // 121.56500000000001,
  total_price: number, // 1337.2150000000001,
  user_id: string,
  order_date: string, // "2022-10-19T00:00:00.000Z",
  order_details: OrderItem[], //

}