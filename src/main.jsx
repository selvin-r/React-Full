import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//  import './index.css';
// import { Cart } from './FormSamples/Cart';
// import { UserDetails } from './FormSamples/UserDetails';
// import {RegFrm} from './FormSamples/RegFrm';
// import { Advice } from './FormSamples/Advice';
import {BMI} from "./BMI/BMI";





createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    {/* <Cart/> */}

    {/*<UserDetails /> */}
    {/* <RegFrm/> */}

    {/* <Advice /> */}

    <BMI/>


  </StrictMode>
)
