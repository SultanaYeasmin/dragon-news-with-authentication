import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold text-xl mb-2">
                Login with</h2>
                <div className="*:w-full space-y-2">
                    <button className="btn btn-outline  text-blue-600 "> <FaGoogle /> Login with Google</button>
                    <button className="btn btn-outline "><FaGithub />Login with Github</button>
                    
                </div>
        </div>
    );
};

export default SocialLogin;