import { getServerSession } from "next-auth";
import OrderHistorySection from "./_components/order-list";
import { authOptions } from "@/utils/authOptions";
import { getMyOrders } from "@/actions/order";
import { IOrder } from "@/types/order";

export default async function page() {
  const session = await getServerSession(authOptions);
  const { data } = await getMyOrders((session?.user as any).id);
  console.log("sor>", data);
  return <OrderHistorySection orders={data as IOrder[]} />;
}
