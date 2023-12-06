import Image from 'next/image';
import logo from '../../../public/images/NeonHubLogo.webp';


const Header = () => {

    const styles = {
        navigateButtons : 'h-[70%] mx-2 w-3/12 hover:text-[#ffffff] transition-all duration-200'
    }

    return (
        <header className='w-full h-[5rem] z-30 bg-[black] flex items-center'>
            <div className='w-full h-[70%] flex flex-row justify-between'>

                <div className='w-4/12 flex'>
                    <div className='flex items-center w-5/12 md:w-full'>
                        <Image width={500} height={200} alt={'Neon Hub'} src={logo} />
                    </div>
                </div>


                <div className='w-4/12  text-[#9c9c9c] font-[Vazir] text-[1.25rem] flex flex-row items-center justify-center '>
                    <button className={styles.navigateButtons}>دسته</button>
                    <button className={styles.navigateButtons}>محصولات</button>
                    <button className={styles.navigateButtons}>درباره ما</button>
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