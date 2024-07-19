import { useRouter } from 'next/router';
import { FC } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: FC<PlayButtonProps> = ({movieId}) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(`/watch/${movieId}`)} className='cursor-pointer bg-white rounded py-1 md:py-2 px-2 md:px-4 w-auto text-xm lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition'><BsFillPlayFill size={25} className='mr-1' /> Play </button>
  )
}

export default PlayButton