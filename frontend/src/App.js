import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Home from "./views/home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="app" element={<Dashboard />} />
                    <Route path="*" element={<>no page found</>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
