import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import MyVehicles from "./pages/MyVehicles";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/myvehicles" element={<MyVehicles />} />
      </Routes>
    </Layout>
  );
}
