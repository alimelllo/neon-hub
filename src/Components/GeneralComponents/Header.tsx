import Image from 'next/image';
import logo from '../../../public/images/NeonHubLogo.webp';


const Header = () => {



    return (
        <header style={{ height: '5rem' }} className='w-full md:py-2 z-30 flex flex-row items-center'>
            <div style={{ height: '80%' }} className='w-full flex z-40 flex-row justify-between'>
                <div style={{ width: '33%' }} className='w-4/12 flex'>
                    <div style={{ width: '40%' }} className='flex items-center md:w-full'>
                        <Image alt={'Neon Hub'} src={logo} />
                    </div>
                </div>


                <div style={{ width: '33%', color: 'gray' }} className=' font-[Vazir] text-[1.25rem] flex flex-row md:hidden items-center justify-center '>
                    <button style={{ height: '70%' }} className='w-3/12 hover:text-[#ffffff] transition-all duration-200'>دسته</button>
                    <button style={{ height: '70%' }} className='w-3/12 hover:text-[#ffffff] transition-all duration-200'>محصولات</button>
                    <button style={{ height: '70%' }} className='w-3/12 hover:text-[#ffffff] transition-all duration-200'>درباره ما</button>
                </div>


                <div style={{ width: '33%', color: 'gray' , justifyContent : 'end'}} className='text-white font-[Vazir] text-[1.25rem] md:text-[1rem] flex flex-row items-center pr-5 '>
                    <div style={{
                        background: 'rgb(224, 84, 108)',
                        backgroundImage: 'linear-gradient(90deg,rgba(224, 84, 108, 1)-8%,rgba(72, 27, 167, 1)100%)',
                        height:'80%',
                        width:'33%'
                    }} className=' flex items-center md:w-full rounded-[5px] hover:text-[#ffffff] '>
                        <button style={{background:'black' , height :'90%' , width:'95%' , textAlign : 'center' , margin:'auto'}} className='bg-black hover:bg-transparent transition-all duration-200 text-[#f1c2ca] hover:text-white'>ثبت نام / ورود</button>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;