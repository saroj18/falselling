import { getAllOrders } from "@/actions/order";
import OrdersContent from "./_components/order-list";
import { IOrder } from "@/types/order";

export default async function page() {
  const {data}=await getAllOrders()
  return <OrdersContent orders={data as IOrder[]}/>;
}
