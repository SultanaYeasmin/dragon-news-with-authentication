import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNav from "../components/layout-component/RightNav";
import Navbar from "../components/Navbar";
// import CategoryNews from "../pages/CategoryNews";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid grid-cols-[3fr_6fr_3fr] gap-3 ">
                <aside className="border">
                  <LeftNavbar></LeftNavbar>             
                </aside>
                <section className="border"> 
                   <Outlet/>
                   
                </section>
                <aside className="border"> <RightNav></RightNav></aside>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;