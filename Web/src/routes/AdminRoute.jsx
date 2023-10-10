import React, { useEffect } from 'react';
import { AdminHome, AdminUser, AdminRecharge, AdminWithdraw, AdminLogin, AdminPrime ,PremiumUser,UploadPopUpAndNews,ResetPasswordAdmin} from './importPages';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import AdminLoader from '../pages/Admin/adminLoading/AdminLoading';
import { Suspense } from 'react';
import { AdminAuthState } from '../Atoms/AdminAuthState';
import { useRecoilValue } from 'recoil';

function AdminRoute() {
  const adminAuth = useRecoilValue(AdminAuthState);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if adminAuth is not available, then redirect to the admin login page
  //   const authToken = JSON.parse(sessionStorage.getItem('authToken'));
  //   if (!authToken && !adminAuth) {
  //     navigate('/admin'); // Redirect to the admin login page
  //   }
  // }, [adminAuth, navigate]);

  return (
    <Routes>
      {!adminAuth ? (
        <Route
          path="/admin"
          element={
            <Suspense fallback={<AdminLoader />}>
              <AdminLogin />
            </Suspense>
          }
        />
      ) : (
        <>
          <Route
            path="/admin/home"
            element={
              <Suspense fallback={<AdminLoader />}>
                <AdminHome />
              </Suspense>
            }
          />
          <Route
            path="/admin/user"
            element={
              <Suspense fallback={<AdminLoader />}>
                <AdminUser />
              </Suspense>
            }
          />
          <Route
            path="/admin/recharge"
            element={
              <Suspense fallback={<AdminLoader />}>
                <AdminRecharge />
              </Suspense>
            }
          />
          <Route
            path="/admin/withdraw"
            element={
              <Suspense fallback={<AdminLoader />}>
                <AdminWithdraw />
              </Suspense>
            }
          />
          <Route
                        path="/admin/adminResetPassword"
                        element={
                            <Suspense fallback={<AdminLoader/>}>
                                    <ResetPasswordAdmin/>
                            </Suspense>
                        }
                    />
          <Route
            path="/admin/prime"
            element={
              <Suspense fallback={<AdminLoader />}>
                <AdminPrime />
              </Suspense>
            }
          />
          <Route
            path="/admin"
            element={
              <Suspense fallback={<AdminLoader />}>
                <AdminLogin />
              </Suspense>
            }
          />
          <Route
            path="/admin/premiumUsers"
            element={
              <Suspense fallback={<AdminLoader />}>
                <PremiumUser/>
              </Suspense>
            }
          />
          <Route
            path="/admin/uploadNewsAndImage"
            element={
              <Suspense fallback={<AdminLoader />}>
                <UploadPopUpAndNews/>
              </Suspense>
            }
          />
        </>
      )}
    </Routes>
  );
}

export default AdminRoute;
