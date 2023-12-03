import Header from '@/Components/GeneralComponents/Header'
import Image from 'next/image'
import wall from '../../public/images/wall.webp';
import React, { useEffect, useState } from 'react';
import product from '../../public/images/product.png';

export default function Home() {

  const CARDS = [
    {
      title: "somthing 1 ",
      background:
        "bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900",
    },
    {
      title: "somthing 2 ",
      background:
        "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700",
    },
    {
      title: "somthing 3 ",
      background: "bg-gradient-to-br from-pink-900 via-rose-700 to-rose-500",
    },
    {
      title: "somthing 4 ",
      background: "bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600",
    },
    {
      title: "somthing 5 ",
      background:
        "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500",
    },
    {
      title: "somthing 6 ",
      background:
        "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700",
    },
    {
      title: "somthing 7 ",
      background: "bg-gradient-to-r from-orange-400 to-rose-400",
    },
    {
      title: "somthing 8 ",
      background:
        "bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800",
    },
    {
      title: "somthing 9 ",
      background: "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900",
    },
    {
      title: "somthing 10",
      background: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    },
  ];

  const MAX_VISIBILITY = 3;

  const Card = ({ title, background }: any) => {
    return (
      <div className="card w-full h-full md:w-9/12 md:h-[60%] md:mx-auto flex flex-col relative hover:scale-105 cursor-pointer">
        <div className='flex mx-auto justify-center mt-5 h-[75%] w-8/12'>
          <Image alt={'Neon'} src={product}/>
        </div>
        <p className='text-white p-5 mt-10 text-[1.5rem] font-[Vibur] blurEffect font-[600]'>45,000 T</p>

      </div>
    );
  };

  const Carousel = ({ children }: any) => {

    let [active, setActive] = useState<number>(2);
    const [animate, setAnimate] = useState<string>("increament");

    useEffect(() => {
      const interval = setInterval(() => {
        if (active === 9) {
          setAnimate("decreament");
        } else if (active === 0) {
          setAnimate("increament");
        }
        if (animate === "increament") {
          setActive(active++);
        } else if (animate === "decreament") {
          setActive(active--);
        }
      }, 4000);
      return () => {
        clearInterval(interval);
      };
    }, [animate]);

    return React.createElement(
      "div",
      { className: "carousel" },
      React.Children.map(children, (child, i) =>
        React.createElement(
          "div",
          {
            className: "card-container",
            style: {
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              "pointer-events": active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            },
          },
          child
        )
      )
    );
  };

  const SlideShow = () =>
    React.createElement(
      "div",
      { className: "app" },
      React.createElement(
        Carousel,
        null,
        CARDS.map((item, i) =>
          React.createElement(Card, {
            title: "Card " + (i + 1),
            background: item.background,
          })
        )
      )
    );



  return (
    <div className='overflow-x-hidden h-screen bg-[#000000]'>
      <Header />
      <main className={`flex flex-row md:flex-col-reverse md:h-screen items-center`}>

        <div className='w-6/12 md:w-full md:h-[50%] md:mx-auto relative'>
          <Image layout='responsive' objectFit="contain" alt={'Neon Hub'} src={wall} />
          <div className="neon-text text-[5rem] md:text-[2.5rem] mt-[5rem] md:mt-0 md:mb-[3rem] font-[Vibur]">
            <b>N<span>EON</span> H<span>U</span>B</b>
            <div className='w-full mt-10 md:mt-3 flex justify-center'>
              <p className='text-[#ebebeb] font-[Vazir] text-center w-5/12 md:w-full text-[1.7rem] md:text-[1rem] flex flex-wrap md:justify-center'>
                ثبت سفارش طرح های دلخواه چراغ های نئون
              </p>
            </div>
            <div className='w-full flex flex-row md:flex-col mt-[5rem] md:mt-[1rem] justify-center'>
              <button className='text-[white] mx-2 md:mx-auto md:my-1 bg-[#a34062] hover:bg-[#5670cd] transition-all duration-100 font-[Vazir] p-2 rounded-[5px] text-center w-3/12 md:w-9/12 text-[1.25rem]'>
                محصولات
              </button>
              <button className='text-[white] md:hidden mx-2 md:mx-auto md:my-1 bg-[#344995] hover:bg-[#953859] transition-all duration-100 font-[Vazir] p-2 rounded-[5px] text-center w-3/12 md:w-9/12 text-[1.25rem]'>
                ثبت سفارش
              </button>
            </div>
          </div>
        </div>



        <div className='w-6/12 flex justify-center pt-[5rem] md:pt-[7rem] items-center h-[100%] md:h-[50%]'>
          <SlideShow />
        </div>

      </main>
    </div>

  )
}
