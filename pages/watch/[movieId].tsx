import useMovie from '@/hooks/useMovieHook';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Watch = () => {
  const router = useRouter();
  const {movieId} = router.query;
  const {data} = useMovie(movieId as string);
  const [hideNav, setHideNav] = useState(false);
  
  useEffect(() => {
    let clearTimer;
    clearTimer = setTimeout(() => {
      setHideNav(prev => true)
    }, 7777);
    if(hideNav){
      clearTimeout(clearTimer)
    }
  }, [hideNav])
  return (
    <>
      <p className="text-red-700 font-bold">
        Este sitio es un proyecto demostrativo y no está afiliado con Netflix. No se recopila ninguna información real.
      </p>
      <div className='h-screen w-screen bg-black' onMouseMove={() => setHideNav(false)}>
        <nav className={`fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70 ${hideNav ? 'opacity-0' : 'opacity-100'} transition duration-300`}>
          <AiOutlineArrowLeft onClick={() => router.push('/')} className='text-white cursor-pointer' size={40} />
          <p className='text-white text-1xl lg:text-3xl font-bold'><span className='font-light'>Watching: </span>{data?.title}</p>
        </nav>
        <video autoPlay controls src={data?.videoUrl} className='w-full h-full'></video>
      </div>
    </>
  )
}

export default Watch