import { createBrowserRouter, Navigate } from "react-router-dom";
import { LanguageRouteGuard } from './i18n/LanguageRouteGuard';
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import VisionPage from "./pages/VisionPage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import CaseStudyPage from "./pages/CaseStudyPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import { RootLanguageRedirect } from "./i18n/RootLanguageRedirect.tsx";

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
      { path: "vision", element: <VisionPage /> },
      { path: "projects", element: <PortfolioPage /> },
      { path: "projects/:projectId", element: <CaseStudyPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);