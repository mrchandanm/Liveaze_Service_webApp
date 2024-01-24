import React from 'react'
import Header from './Header';
import Footer from './Footer';
import  { Toaster } from 'react-hot-toast';

export default function Layout(props) {
  return (
    <div>
        <Header />
      <main style={{minHeight:"80vh"}}>
        <Toaster/>
        {props.children}
        </main>
   
      <Footer/>
    </div>
  )
}


