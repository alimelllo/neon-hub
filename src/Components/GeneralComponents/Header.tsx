import Image from 'next/image';
import logo from '../../../public/images/NeonHubLogo.webp';


const Header = () => {

   

    return (
        <header className='w-full h-[5rem] md:py-2 z-30 bg-[black] flex flex-row items-center'>
            <div className='w-full h-[80%] flex z-40 flex-row justify-between'>

                <div className='w-4/12 flex'>
                    <div className='flex items-center w-5/12 md:w-full'>
                        <Image alt={'Neon Hub'} src={logo} />
                    </div>
                </div>


                <div id='navbar' className='w-4/12 text-[gray] font-[Vazir] text-[1.25rem] flex flex-row md:hidden items-center justify-center '>
                    <button className='h-[70%] w-3/12 hover:text-[#ffffff] transition-all duration-200'>دسته</button>
                    <button className='h-[70%] w-3/12 hover:text-[#ffffff] transition-all duration-200'>محصولات</button>
                    <button className='h-[70%] w-3/12 hover:text-[#ffffff] transition-all duration-200'>درباره ما</button>
                </div>


                <div className='w-4/12 text-[white] font-[Vazir] text-[1.25rem] md:text-[1rem] justify-end flex flex-row items-center pr-5 '>
                    <div className='h-[80%] flex items-center w-4/12 md:w-full rounded-[5px] hover:text-[#ffffff] bg-gradient-to-r from-[#351578] to-[#e0546c]'>
                        <button className='text-center bg-[black] hover:bg-transparent transition-all duration-200 w-[95%] h-[90%] mx-auto text-[#f1c2ca] hover:text-white'>ثبت نام / ورود</button>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;