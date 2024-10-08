import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '@/lib/prismadb';
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const serverAuth = async (req:NextApiRequest, res:NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if(!session?.user?.email){
    throw new Error('Not signed in');
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email
    }
  })


  if(!currentUser){
    throw new Error('Not signed in');
  }

  return { currentUser };
}

export default serverAuth;