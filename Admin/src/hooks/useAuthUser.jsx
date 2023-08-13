import React from 'react'
import { useSelector } from 'react-redux'
import { getauthData } from '../features/auth/authSlice';

const useAuthUser = () => {
    const {user} = useSelector(getauthData)
  return {user};
}

export default useAuthUser