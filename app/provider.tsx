"use client"
import React, { useEffect } from 'react';
import axios from 'axios';

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    useEffect(()=>{
        CreateNewUser();

    },[])
     
    const CreateNewUser=async()=>{
        const result = await axios.post('/api/users', {});
        console.log("Result",result);

    }
     


    return (
        <div>
            {children}
        </div>
    );
}

export default Provider;
