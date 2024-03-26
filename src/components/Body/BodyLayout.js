import BrowserLayout from "./browser/BrowserLayout";
import UserAccountLayout from "./userAccount/UserAccountLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const BodyLayout = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserAccountLayout />} />
                    <Route path="/browser" element={<BrowserLayout />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default BodyLayout;