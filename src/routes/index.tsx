import { createBrowserRouter } from "react-router-dom";
import { Initial } from "../pages/dashboard/Initial";
import { MainLayout } from "../layouts/MainLayout";
import { UserProfile } from "../pages/profile/UserProfile";
import { Reserves } from "../pages/reserves/Reserves";
import { ReserveInfo } from "../pages/reserves/ReserveInfo";
import { Payments } from "../pages/payment/Payments";
import { ReserveForm } from "../pages/reserve_form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path: 'reserves',
        element: <Reserves />,
      },
      {
        path: 'reserves/:id',
        element: <ReserveInfo />,
      },
      {
        path: 'payments',
        element: <Payments /> ,
      },
      {
        path: 'reserve-form',
        element: <ReserveForm />,
      },
    ],
  },
]);
