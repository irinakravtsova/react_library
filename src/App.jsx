import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Grid from './Components/Grid/Grid'
import Link from './Components/Link/Link'
import Button from './Components/Button/button'
import Input from './Components/Input/Input'
import Title2 from './Components/Title/Title'
import Logo from './Components/Logo/Logo'
import Menu from './Components/Menu/Menu'
import Form from './Components/Form/Form'
import Card from './Components/Card/Card'
import Header from './Components/Header/Header.jsx'
import Main from './Components/Main/Main.jsx'
import Footer from './Components/Footer/Footer.jsx'
import PseudoElement from './components/pseudoElement/pseudoElement.jsx'
import FlexPosition from './components/FlexPosition/FlexPosition.jsx'
import FlexCard from './components/FlexCard/FlexCard.jsx'
import ModuleCard from './components/ModuleCard/ModuleCard.jsx'
import SliderFromII from './components/SliderFromII/SliderFromII.jsx'
import AdaptivText from './components/AdaptivText/AdaptivText.jsx'

function App() {
  return (
    <>
    {/* < AdaptivText /> */}
    {/* < SliderFromII /> */}
    {/* < ModuleCard/> */}
    {/* < FlexCard /> */}
    {/* < FlexPosition /> */}
    {/* < PseudoElement /> */}
   
     < Header /> 
     {/* < Main />
     < Footer /> */}
{/* 
    <div className="container">  
  
    <Link />
    <Button/>
    < Input />
    < Title2 />
    < Logo />
    < Menu />
    < Form />
    < Card />

   </div> */}
   </>  
   
  )
}

export default App
