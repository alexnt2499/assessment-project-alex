import { createHashRouter } from "react-router-dom";
import CreateInvoicePage from "../containers/CreateInvoicePage";
import DashboardPage from "../containers/DashboardPage";
import LoginPage from "../containers/LoginPage";
import NotFoundPage from "../containers/NotFoundPage";
import UserInfoPage from "../containers/UserInfoPage";
import ProtectedRouter from "./ProtectedRouter";

const router = createHashRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <DashboardPage />
      </ProtectedRouter>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard/",
    element: (
      <ProtectedRouter>
        <DashboardPage />
      </ProtectedRouter>
    ),
  },
  {
    path: "/dashboard/create-invoice/",
    element: (
      <ProtectedRouter>
        <CreateInvoicePage />
      </ProtectedRouter>
    ),
  },
  {
    path: "/user-info/",
    element: (
      <ProtectedRouter>
        <UserInfoPage />
      </ProtectedRouter>
    ),
  },
]);

export default router;
