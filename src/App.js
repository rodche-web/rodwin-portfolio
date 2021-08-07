import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/' exact>
                    <Homepage />
                </Route>
                <Route path='/projects' exact>
                    <ProjectsPage />
                </Route>
                <Route path='/contact' exact>
                    <ContactPage />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App
