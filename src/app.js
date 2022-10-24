import React from 'react'
import 'bootsrap/dist/css/bootstrap.min.css';
import Header from './components/header/header'
import ToDO from './components/todo/form';
import Footer from './components/Footer/footer'


function App () {
    return(
        <>
        <Header />
        <ToDO />
        <Footer />
        </>
    )
}

export default App;
