import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => {
    return (
      <div className="max-w-[1536px] mx-auto">
        <Navbar />
        <Outlet />
        <Aside />
        <Footer />
        <TanStackRouterDevtools />
      </div>
    );
  },
});
