import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Content from './pages/Contents'

const NavRoutes = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/ask-services-content" element={<Content/>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default NavRoutes