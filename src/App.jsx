import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}
