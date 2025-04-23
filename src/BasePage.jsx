import React from 'react'
import NavBar from './components/Global/NavBar'
import Footer from './components/Global/Footer'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify';
import GlobalSpinner from './components/Global/GlobalSpinner';
import { useNavigation } from 'react-router';

function BasePage() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
        {isNavigating && <GlobalSpinner />}
        <NavBar />
        <Outlet />
        <Footer />
        <ToastContainer />
    </div>
  )
}

export default BasePage