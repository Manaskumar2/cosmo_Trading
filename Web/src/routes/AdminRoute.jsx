import React, { useEffect } from 'react';
import { AdminHome, AdminUser, AdminRecharge, AdminWithdraw, AdminLogin, AdminPrime ,PremiumUser,UploadPopUpAndNews,ResetPasswordAdmin,CreateGiftCard,TotalProfit,GrowAndRiseProfit,TotalRecharge,TotalWithdraw,Downline, GiftCodeHistory} from './importPages';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import AdminLoader from '../pages/Admin/adminLoading/AdminLoading';
import { Suspense } from 'react';
import { AdminAuthState } from '../Atoms/AdminAuthState';
import { useRecoilValue } from 'recoil';

function AdminRoute() {
  const adminAuth = useRecoilValue(AdminAuthState);
  const navigate = useNavigate();


  return (
    <Routes>
      <Route
            path="/admin"
            element={
              <Suspense fallback={<AdminLoader />}>
                <AdminLogin />
              </Suspense>
            }
          />
      {!adminAuth ? (
        <>
        <Route path="/admin/home" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/user" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/recharge" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/withdraw" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/adminResetPassword" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/prime" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/premiumUsers" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/uploadNewsAndImage" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/giftCodeHistory" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/totalProfit" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/totalWithdraw" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/totalRecharge" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/RiseUpAndGrowUpProfit" element={<Navigate to="/admin" replace />} />
        <Route path="/admin/downline" element={<Navigate to="/admin" replace />} />
        </>
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
          <Route
            path="/admin/createGiftCard"
            element={
              <Suspense fallback={<AdminLoader />}>
                <CreateGiftCard/>
              </Suspense>
            }
          />
          <Route
            path="/admin/giftCodeHistory"
            element={
              <Suspense fallback={<AdminLoader />}>
                < GiftCodeHistory/>
              </Suspense>
            }
          />
          <Route
            path="/admin/totalProfit"
            element={
              <Suspense fallback={<AdminLoader />}>
                <TotalProfit/>
              </Suspense>
            }
          />
          <Route
            path="/admin/downline"
            element={
              <Suspense fallback={<AdminLoader />}>
                <Downline/>
              </Suspense>
            }
          />
          <Route
            path="/admin/RiseUpAndGrowUpProfit"
            element={
              <Suspense fallback={<AdminLoader />}>
                <GrowAndRiseProfit/>
              </Suspense>
            }
          />
          <Route
            path="/admin/totalRecharge"
            element={
              <Suspense fallback={<AdminLoader />}>
                <TotalRecharge/>
              </Suspense>
            }
          />
          <Route
            path="/admin/totalWithdraw"
            element={
              <Suspense fallback={<AdminLoader />}>
                <TotalWithdraw/>
              </Suspense>
            }
          />
        </>
      )}
    </Routes>
  );
}

export default AdminRoute;
