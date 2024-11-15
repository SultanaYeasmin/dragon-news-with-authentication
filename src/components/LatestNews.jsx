import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-3">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">latest</p>
            <Marquee pauseOnHover={true} speed={100}>
            <p>Match Highlights: Germany vs Spain — as it happened!  Match Highlights: Germany vs Spain as...</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;