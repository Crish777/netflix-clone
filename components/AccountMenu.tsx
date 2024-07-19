import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react'
import Image from 'next/image';
import React, { FC } from 'react'

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: FC<AccountMenuProps> = ({visible}) => {
  const {data: user} = useCurrentUser();
  if(!visible){
    return null;
  }
  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col boder-2 border-gray-800 flex'>
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <div className="w-8 h-8 relative">
            <Image className='rounded-md' alt='' fill src='/images/avatar.png' />
          </div>
          <p className='text-white text-sm group-hover/item:underline'>{user?.name}</p>
        </div>
        <hr className='bg-gray-600 border-0 h-px my-4'/>
        <div onClick={() => signOut()} className="px-3 text-center text-white text-sm hover:underline">
          Sign out of Netflix
        </div>
      </div>
    </div>
  )
}

export default AccountMenu