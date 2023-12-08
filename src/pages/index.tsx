import Header from '@/Components/GeneralComponents/Header'
import Image from 'next/image'
import wall from '../../public/images/wall.webp';
import SlideShow from '@/Components/GeneralComponents/SlideShow';
import { useTheme } from 'next-themes';
import { use, useEffect } from 'react';


export default function Home() {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("Dark")
  }, [])

  return (
    <div className='overflow-x-hidden flex flex-col h-screen dark:bg-[#000000]'>
      <Header />
      <main className={`flex flex-col justify-center h-screen`}>

        {/* ================== */}
        {/* FIRST MAIN SECTION */}


        <div className='flex flex-row md:flex-col-reverse w-full'>

          <div className='w-6/12 md:w-full md:h-[55%] md:mx-auto relative contrast-[1.1]'>
            <Image layout={'responsive'} alt={'Neon Hub'} src={wall} />
            <div className="neon-text text-[5rem] md:text-[2.5rem] mt-[5rem] md:mt-0 md:mb-[10rem] font-[Vibur]">
              <b>N<span>EON</span> H<span>U</span>B</b>
              <div className='w-full mt-10 md:mt-2 flex justify-center'>
                <p className='text-[#ebebeb] font-[Vazir] text-center w-5/12 md:w-full text-[1.7rem] md:text-[1rem] flex flex-wrap md:justify-center'>
                  ثبت سفارش طرح های دلخواه چراغ های نئون
                </p>
              </div>
              <div className='w-full md:bg-[black] md:p-[2rem] flex flex-row md:flex-col mt-[5rem] md:mt-[0.5rem] justify-center'>
                <button className='text-[white] mx-2 md:mx-auto bg-[#a34062] hover:bg-[#5670cd] transition-all duration-100 font-[Vazir] p-2 rounded-[5px] text-center w-3/12 md:w-11/12 text-[1.25rem]'>
                  محصولات
                </button>
                <button className='text-[white] md:hidden mx-2 bg-[#344995] hover:bg-[#953859] transition-all duration-100 font-[Vazir] p-2 rounded-[5px] text-center w-3/12 md:w-9/12 text-[1.25rem]'>
                  ثبت سفارش
                </button>
              </div>
            </div>
          </div>

          <div className='w-6/12 md:w-full flex justify-center pt-[3rem] md:pt-[15rem] items-center h-[100%] md:h-[45%]'>
            <SlideShow data={[]} />
          </div>
        </div>


        {/* FIRST MAIN SECTION */}
        {/* ================== */}


      </main>
    </div>

  )
}
