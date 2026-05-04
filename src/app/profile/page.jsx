
"use client"
import UpdateUserModal from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { redirect } from "next/navigation";


const ProfilePage = () => {
     const userData = authClient.useSession();
    const user = userData.data?.user;
    //console.log(user)
    if(!user){
        redirect('/singnin')
    }
    return (
        <Card className="max-w-96 mx-auto flex flex-col items-center p-24 my-12 ">
           Profile
           <div >
                                <Avatar size="sm" >
        <Avatar.Image alt="John Doe" size="sm" src={user?.image} 
        referrerPolicy='no-referrer'/>
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      
      </Avatar>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
           </div>
           <UpdateUserModal/>
      
        </Card>
    );
};

export default ProfilePage;