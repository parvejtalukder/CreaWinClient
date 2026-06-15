import React from 'react';
import useAxios from './useAxios';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const { user } = useAuth();
    const axiosSec = useAxios();

    const { isLoading: userDataLoading, data: userData = {} } = useQuery({
        queryKey: ["user-profile", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSec.get(`/user/${user.email}`);
            return res.data.data; 
        }
    });

    return { userData, userDataLoading };
};

export default useUser;