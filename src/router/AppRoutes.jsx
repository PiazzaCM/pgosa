import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Working from "../pages/working/Working";

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Working />} />
        </Routes>
        </BrowserRouter>
    );
    }

export default AppRoutes;
