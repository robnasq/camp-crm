import { createBrowserRouter } from "react-router-dom";
import { Initial } from "../pages/dashboard/Initial";
import { MainLayout } from "../layouts/MainLayout";
import { UserProfile } from "../pages/profile/UserProfile";
import { Reserves } from "../pages/reserves/Reserves";
import { ReserveInfo } from "../pages/reserves/ReserveInfo";
import { Payments } from "../pages/payment/Payments";
import { ReserveForm } from "../pages/reserve_form";
import { OrderCompleted } from "../pages/reserve_form/OrderCompleted";
import { Login } from "../pages/login/Login";
import { SignUp } from "../pages/register/SignUp";
import Foto from "../assets/main-image.jpeg";
import Pattern from "../assets/pattern.png";
import { OrderReserveLayout } from "../layouts/OrderReserveLayout";
import { RecoverPassword } from "../pages/recover_pssword/RecoverPassword";
import { StartOfSection } from "../pages/profile/StartOfSection";
import { DataBiling } from "../pages/profile/DataBiling";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout backgroundPattern={Pattern} />,
    children: [
      {
        path: "/",
        element: <Initial />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "start-of-section",
        element: <StartOfSection />,
      },
      {
        path: "data-biling",
        element: <DataBiling />,
      },
      {
        path: "reserves",
        element: <Reserves />,
      },
      {
        path: "reserves/:id",
        element: <ReserveInfo />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
    ],
  },
  {
    path: "/order-completed",
    element: <MainLayout backgroundPattern={Foto} />,
    children: [
      {
        index: true,
        element: <OrderCompleted />,
      },
    ],
  },
  {
    path: "/form",
    element: <OrderReserveLayout />,
    children: [
      {
        path: "reserve-form",
        element: <ReserveForm />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: 'recover-password',
    element: <RecoverPassword />
  },
]);
