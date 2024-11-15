import { Link } from "react-router-dom";
import userIcon from "./../assets/user.png"


const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div> <img src={userIcon} alt="" /></div>
                <div>
                    <Link to="/auth/login" className="btn btn-neutral rounded-none">
                        Login

                    </Link>
                </div>

            </div> </div>
            );
};

            export default Navbar;