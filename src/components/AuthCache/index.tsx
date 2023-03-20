import React, { FC, ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReactRedux";
import { checkCacheAuthAction } from "../../store/authReducer";
import { getMeAsyncThunk } from "../../store/authReducer/asyncThunk";

interface IAuthCache {
  children: ReactElement;
}

const AuthCache: FC<IAuthCache> = ({ children }) => {
  const { authData, userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkCacheAuthAction());
  }, []);

  useEffect(() => {
    if (authData) dispatch(getMeAsyncThunk());
  }, [authData]);

  return children;
};

export default AuthCache;
