import { OrdersCard } from "./_components/orders-card";
import { UserCard } from "./_components/user-card";
import { Suspense } from "react";
import { Loader } from "./_components/card-loading-layout";
import { DashboardCards } from "./_components/dashboard-card";
import { DashboardCardLoader } from "./_components/dashboard-card-loader";

const DashboardContent = async () => {
  return (
    <div className="space-y-6">
      <Suspense fallback={<DashboardCardLoader />}>
        <DashboardCards />
      </Suspense>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Suspense fallback={<Loader />}>
          <UserCard />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <OrdersCard />
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardContent;
