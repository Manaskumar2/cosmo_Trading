import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/Iconcosmo.css';
import './App.css'
import {AppRoutes}  from './routes/AppRoutes';
import AdminRoute from './routes/AdminRoute';

function App() {



  return (
    
    <>
    <AdminRoute/>
      <AppRoutes/>
    </>
  );
}

export default App;
