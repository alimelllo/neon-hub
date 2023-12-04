import Header from '@/Components/GeneralComponents/Header'
import Image from 'next/image'
import wall from '../../public/images/wall.webp';
import SlideShow from '@/Components/GeneralComponents/SlideShow';
import infinity from '../../public/images/infinity.webp';
import infinity2 from '../../public/images/infinity2.webp';


export default function Home() {



  return (
    <div className='overflow-x-hidden h-screen bg-[#000000]'>
      <Header />
      <main className={`flex flex-col  md:h-screen items-center`}>

        {/* ================== */}
        {/* FIRST MAIN SECTION */}


        <div className='flex flex-row md:flex-col-reverse w-full'>

          <div className='w-6/12 md:w-full md:h-[55%] md:mx-auto relative'>
            <Image layout={'responsive'} alt={'Neon Hub'} src={wall} />
            <div className="neon-text text-[5rem] md:text-[2.5rem] mt-[5rem] md:mt-0 md:mb-[5rem] font-[Vibur]">
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

          <div className='w-6/12 md:w-full flex justify-center pt-[3rem] items-center h-[100%] md:h-[45%]'>
            <SlideShow data={[]} />
          </div>
        </div>


        {/* FIRST MAIN SECTION */}
        {/* ================== */}

        <div className='flex flex-row md:flex-col justify-around w-full py-10 md:my-[5rem] my-[20rem]'>
          <div className='w-3/12 md:w-full flex justify-center items-center'>
            <Image alt={"infnity mirror"} src={infinity2}/>
          </div>
          <div className='opacity-[0.8] w-5/12 md:w-full md:mt-[5rem]'>
            <Image alt={"infnity mirror"} src={infinity}/>
          </div>
        </div>


      </main>
    </div>

  )
}
