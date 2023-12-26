import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/options";
import prisma from "@/app/libs/prismadb";

// server componenets

export async function getSession(){
    return await getServerSession(authOptions);
}

export default async function getCurrentUser(){
    try {
        const session = await getSession();
        if(!session?.user?.email){
            return null;
        }
        const currentUser = await prisma.user.findUnique({
            where:{
                email: session.user.email as string,
            }
        });
        if(!currentUser){
            return null;
        }
        // to resolve nextjs plain objects can be passed and date not supported error we get the date and convert it to string
        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null
        }
    } catch (error:any) {
        return null;
    }
}