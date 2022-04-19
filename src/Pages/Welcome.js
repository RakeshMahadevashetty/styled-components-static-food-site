import { lazy, Suspense } from 'react'
const Navigations = lazy(() => import('../_components/Navigations'));
const Home = lazy(() => import('../_components/Home'));
const About = lazy(() => import('../_components/About'));
const Menu = lazy(() => import('../_components/Menu'));
const Contact = lazy(() => import('../_components/Contact'));
const Footer = lazy(() => import('../_components/Footer'));

const Welcome = () => {
    
    return <Suspense fallback={<div>loading...</div>}>
        <Navigations/>
        <Home/>
        <About/>
        <Menu/>
        <Contact/>
        <Footer />
    </Suspense>
}

export default Welcome;