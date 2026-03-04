import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About/index.jsx'
import Consults from './pages/Consults/index.jsx'
import Series from './pages/Series/index.jsx'
import Ebook from './pages/E-book/index.jsx'
import Virada360 from './pages/Virada360/index.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/sobre",
        element: <About />
    },

    {
        path: "/consultas",
        element: <Consults />
    },

    {
        path: "/series",
        element: <Series />
    },

    {
        path: "/e-book",
        element: <Ebook />
    },
    {
        path: "/virada360",
        element: <Virada360 />
    }
], {
  // Isso resolve o erro do GitHub Pages
  basename: "/nutri-raquel-alves-site/" 
});

export default router;