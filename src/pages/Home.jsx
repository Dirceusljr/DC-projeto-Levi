import { Link, Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function Home() {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
}

export default Home;
