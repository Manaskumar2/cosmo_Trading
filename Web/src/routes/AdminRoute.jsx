import React, { useEffect } from 'react';
import { AdminHome, AdminUser, AdminRecharge, AdminWithdraw, AdminLogin } from './importPages';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import { Suspense } from 'react';
import { AuthState } from '../Atoms/AuthState';
import { useRecoilValue } from 'recoil';

function AdminRoute() {
  const adminAuth = useRecoilValue(AuthState);
  const navigate = useNavigate();



  return (
    <Routes>
      <Route
        path="/admin/home"
        element={
          <Suspense fallback={<Loader />}>
            <AdminHome />
          </Suspense>
        }
      />
      <Route
        path="/admin/user"
        element={
          <Suspense fallback={<Loader />}>
            <AdminUser />
          </Suspense>
        }
      />
      <Route
        path="/admin/recharge"
        element={
          <Suspense fallback={<Loader />}>
            <AdminRecharge />
          </Suspense>
        }
      />
      <Route
        path="/admin/withdraw"
        element={
          <Suspense fallback={<Loader />}>
            <AdminWithdraw />
          </Suspense>
        }
      />
      <Route
        path="/admin"
        element={
          <Suspense fallback={<Loader />}>
            <AdminLogin />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default AdminRoute;
