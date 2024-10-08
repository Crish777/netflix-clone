import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {

    }
  }
}

const Profiles = () => {
  const router = useRouter();
  const {data:user} = useCurrentUser();
  return (
    <>
      <p className="text-red-700 font-bold">
        Este sitio es un proyecto demostrativo y no está afiliado con Netflix. No se recopila ninguna información real.
      </p>
    
    <div className='flex items-center h-full justify-center'>
      <div className='flex flex-col '>
        <h1 className='text-3xl md:text-6xl text-white text-center'>Who is watching?</h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => {router.push('/')}}>
            <div className="group flex-row w-44 mx-auto">
              <div 
                className="
                  w-44
                  h-44
                  rounded-md
                  flex
                  items-center
                  justify-center
                  border-2
                  border-transparent
                  group-hover:cursor-pointer
                group-hover:border-white
                  overflow-hidden
                  relative
                  transition
                  "
              >
                <Image src='/images/avatar.png' fill alt='Profile' />
              </div>
              <div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white transition'>{user?.name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profiles