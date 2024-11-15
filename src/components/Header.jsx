import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-4'>
            <div className="logo">
                <img className='w-[470px] ' src={logo} alt="logo" />
                <h2 className='text-[#706F6F] text-center text-lg'>Journalism Without Fear or Favour</h2>
                <p className='text-center text-xl'>
                    {moment().format("dddd, MMMM Do YYYY")}
                </p>
            </div>
          
        </div>
    );
};

export default Header;