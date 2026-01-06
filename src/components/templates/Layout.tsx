import type { ReactNode } from "react";
import AppSidebar from "../ui/AppSidebar";
import Navbar from "../ui/Navbar";
import { SidebarProvider } from "../ui/sidebar";

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <main className="flex justify-between items-center">
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <Navbar />
          <div className="mt-4">{children}</div>
        </div>
      </SidebarProvider>
    </main>
  );
};

export default Layout;
