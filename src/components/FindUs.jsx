import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold text-xl my-5">
                Find Us On
            </h2>
            <div className="*:w-full *:text-[#706F6F] rounded-none ">
                <div className="join join-vertical *:bg-base-100">
                    <button className="btn join-item justify-start"> <TiSocialFacebook />  Facebook </button>
                    <button className="btn join-item justify-start"> <AiOutlineTwitter /> Twitter</button>
                    <button className="btn join-item justify-start"> <FaLinkedinIn /> Linkedin</button>
                </div>


            </div>
        </div>
    );
};

export default FindUs;