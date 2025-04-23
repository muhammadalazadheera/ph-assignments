import { createBrowserRouter } from "react-router";
import BasePage from "../BasePage";
import HomePage from "../pages/HomePage";
import BookingsPage from "../pages/BookingsPage";
import BlogsPage from "../pages/BlogsPage";
import FourOFour from "../pages/404";
import DocDetails from "../pages/DocDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BasePage,
        children: [
            {
                index: true,
                loader: () => fetch("/doctors_list.json"),
                Component: HomePage
            },
            {
                path: "bookings",
                Component: BookingsPage,
            },
            {
                path: "blogs",
                loader: () => fetch("/qna.json"),
                Component: BlogsPage,
            },
            {
                path: "details/:id",
                loader: async () => {
                    const res = await fetch("/doctors_list.json");
                    return await res.json();
                },
                Component: DocDetails,
            }
        ]
    },
    {
        path: "*",
        Component: FourOFour
    },
]);

export default router;