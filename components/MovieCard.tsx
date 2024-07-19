import { isEmpty } from 'lodash'
import Image from 'next/image';
import React, { FC } from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import FavoriteButton from './FavoriteButton';
import { useRouter } from 'next/router';
import useInfoModal from '@/hooks/useInfoModal';
import { BiChevronDown } from 'react-icons/bi';

interface MovieCardProps {
  data: Record<string, any>
}

const MovieCard: FC<MovieCardProps> = ({data}) => {
  const router = useRouter();
  const {openModal} = useInfoModal();
  if(isEmpty(data)){
    return null;
  }
  return (
    <div className='group bg-zinc-900 col-span relative h-[12vw]'>
      <div className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]">
        <Image fill src={data.thumbnailUrl} alt='' />        
      </div>
      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full  scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <div className="w-full h-[12vw] relative">
          <Image className='cursor-pointer object-cover transition duration shadow-xl roundend-t-md' fill src={data.thumbnailUrl} alt='' />
        </div>
        <div className="z-10 top-full bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-t-md">
          <div className="flex flex-row items-center gap-3">
            <div className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300' onClick={() => router.push(`/watch/${data?.id}`)}>
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div onClick={() => openModal(data?.id)} className='cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'>
              <BiChevronDown className='text-white group-hover/item:text-neutral-300' size={30} />
            </div>
          </div>
          <p className='text-green-400 font-semibold mt-4'>
            New <span className='text-white'>2022</span>
          </p>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className='text-white text-[10px] lg:text-sm'>{data.duration}</p>
          </div>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className='text-white text-[10px] lg:text-sm'>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;