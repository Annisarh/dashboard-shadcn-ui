import AppAreaChart from "@/components/Area-chart/AppAreaChart";
import AppBarChart from "@/components/Bar-chart/AppBarChart";
import CartList from "@/components/Cart-list/CartList";
import AppPieChart from "@/components/Pie-chart/AppPieChart";
import { TableDemo } from "@/components/Table/Table";
import Layout from "@/components/templates/Layout";
import AppTodoList from "@/components/TodoList/AppTodoList";

const Home = () => {
  return (
    <Layout>
      <main className="px-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <div className="bg-primary-foreground p-4 rounded-lg">
          <AppBarChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <CartList title="Popular Content" />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <AppPieChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <AppAreaChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <CartList title="Latest Transaksions" />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <AppTodoList />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <TableDemo />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
