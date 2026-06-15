import React from 'react';
import useAxios from './useAxios';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const { user } = useAuth();
    const axiosSec = useAxios();

    const { isLoading: roleLoading, data: role = "user" } = useQuery({
        queryKey: ["user-role", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSec.get(`/user/${user.email}/role`);
            return res.data.role;
        }
    });

    return { role, roleLoading };
};

export default useRole;