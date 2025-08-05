import { filterByStatus, getAllOrders } from "@/actions/order";
import OrdersContent from "./_components/order-list";
import { IOrder } from "@/types/order";

export default async function page() {
  const { data } = await filterByStatus("PENDING");
  return <OrdersContent orders={data as IOrder[]} />;
}
