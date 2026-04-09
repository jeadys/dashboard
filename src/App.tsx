import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Employee} from "./pages/Employee";
import {Plane} from "./pages/Plane";
import {Weather} from "./pages/Weather";

function App() {
    return (
        <div className="min-h-screen bg-gray-800">
            <div className="mx-auto min-h-screen max-w-7xl px-6 py-5 sm:px-10">
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route path="/" element={<Employee/>}/>
                    <Route path="/plane" element={<Plane/>}/>
                    <Route path="/weather" element={<Weather/>}/>
                </Routes>
            </BrowserRouter>
            </div>
        </div>
    )
}

export default App
