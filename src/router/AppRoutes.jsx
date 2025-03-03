import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Working from "../pages/working/Working";

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Working />} />
        </Routes>
        </BrowserRouter>
    );
    }

export default AppRoutes;
