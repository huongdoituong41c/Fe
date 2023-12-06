import React from 'react';
import { Navigate } from 'react-router-dom';
import DefaultLayout from '../layouts/defaultLayout';
import { ROLE } from '../constants/role';
import { useAppSelector } from '../hooks';
import { RootState } from '../store';

type AuthGuardProps = {
    component: React.ComponentType;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ component: Component }) => {
    const userInfo = useAppSelector((state: RootState) => state.auth.LoginInfo)
    const loginLocalStorage = JSON.parse(localStorage.getItem('jwt') || '{}')
    
    return (
        <>
            {
                loginLocalStorage.role === ROLE.ADMIN ? <DefaultLayout children={<Component />} /> : <Navigate to="/home" replace />
            }
        </>
    )
};
export default AuthGuard;
