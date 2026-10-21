import { createBrowserRouter, Navigate } from 'react-router';
import RootLayouts from '../layouts/RootLayouts';
import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';
import CaseStudies from '../pages/CaseStudy/CaseStudies';
import CaseStudy from '../pages/CaseStudy/CaseStudy';
import Contact from '../pages/Contact/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import Blog from '../pages/Blog/Blog';
import Career from '../pages/Career/Career';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayouts />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'projects', element: <CaseStudies /> },
      { path: 'projects/:id', element: <CaseStudy /> },
      // Old links keep working
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'case-studies/:id', element: <CaseStudy /> },
      { path: 'blog', element: <Blog /> },
      { path: 'career', element: <Career /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
