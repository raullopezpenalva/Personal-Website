import { createBrowserRouter, Navigate } from "react-router-dom";
import { LanguageRouteGuard } from './i18n/LanguageRouteGuard';
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import { RootLanguageRedirect } from "./i18n/RootLanguageRedirect.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import CaseStudyPage from "./pages/CaseStudyPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLanguageRedirect/>,
  },

  {
    path: "/:lang",
    element: <LanguageRouteGuard />,
    children: [
      
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "projects", element: <PortfolioPage /> },
      { path: "projects/:slug", element: <CaseStudyPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);