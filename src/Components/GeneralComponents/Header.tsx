import Image from 'next/image';
import logo from '../../../public/images/NeonHubLogo.webp';


const Header = () => {
    return (
        <header className='w-full h-[5rem] bg-[black] flex items-center'>
            <div className='w-full h-[70%] flex flex-row justify-between'>

                <div className='w-4/12 flex'>
                    <div className='flex items-center w-5/12'>
                        <Image alt={'Neon Hub'} objectFit='contain' src={logo} />
                    </div>
                </div>


                <div className='w-4/12 text-[#9c9c9c] font-[Vazir] text-[1.25rem] flex flex-row items-center justify-around '>
                    <button className='h-[70%] w-3/12 hover:text-[#ffffff] transition-all duration-200'>دسته</button>
                    <button className='h-[70%] w-3/12 hover:text-[#ffffff] transition-all duration-200'>محصولات</button>
                    <button className='h-[70%] w-3/12 hover:text-[#ffffff] transition-all duration-200'>درباره ما</button>
                </div>

                
                <div className='w-4/12 text-[#9c9c9c] font-[Vazir] text-[1.25rem] justify-end flex flex-row items-center pr-5 '>
                    <button className='h-[70%] border-r-[3px] border-r-solid border-r-[#9c9c9c] hover:border-r-[#ffffff] transition-all duration-200 rounded-l-[15px] w-3/12 hover:text-[#ffffff]'>ثبت نام</button>
                    <button className='h-[70%] transition-all duration-200 rounded-r-[15px] w-3/12 hover:text-[#ffffff]'>ورود</button>
                </div>

            </div>
        </header>
    )
}
export default Header;