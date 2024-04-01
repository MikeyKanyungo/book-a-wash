import { BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/homePage';
import loginPage from './pages/loginPage';
import signUpPage from './pages/signUpPage';
import services from './pages/services';
import confirmwashDetails from './pages/confirmWashDetails';
import checkout from './pages/checkout';
import paymentMethod from './pages/paymentMethod';
import pickWashDate from './pages/pickWashDate';
import location from './pages/location';
import landingPage from './pages/landingPage';
import SelectVehiclePage from './pages/selectVehiclePage';

export default function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { landingPage}> </Route>
          <Route path='/HomePage' element = { HomePage }> </Route>
          <Route path='/loginPage' element = { loginPage }> </Route>
          <Route path='/signUpPage' element = { signUpPage }> </Route>
          <Route path='./selectVehiclePage' element = { SelectVehiclePage }> </Route>
          <Route path='/services' element = { services }> </Route>
          <Route path='/confirmwashDetails' element={confirmwashDetails} > </Route>
          <Route path='/checkout' element = {checkout}></Route>
          <Route path='/paymentMethod' element = {paymentMethod}> </Route>
          <Route path='/pickWashDate' element = {pickWashDate}> </Route>
          <Route path='/location' element = {location}> </Route>
        </Routes>
      </BrowserRouter>
  );
}