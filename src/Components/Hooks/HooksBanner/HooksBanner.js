import { Switch, BrowserRouter as Router, Route, useLocation, useHistory } from 'react-router-dom';

import ReactLogo from '../../../Assets/logo.svg';
import Arrow from '../../../Assets/arrow.svg';

import './HooksBanner.css'

const HooksBanner = ({ selected }) => {

    const location = useLocation();
    const history = useHistory();

    return (
        <>
            <div className="HooksBanner">
                <Router>
                    <Switch>
                        <Route >
                            {location.pathname.includes('use') &&
                                <div className='BackButton' onClick={() => history.push("/")}>
                                <img alt='arrow' className='BackArrow' src={Arrow} />
                            </div>
                            }
                        </Route>
                    </Switch>
                </Router>
                <img draggable='false' className="ReactLogo1" src={ReactLogo} alt='react' />
                <h1 className="HooksTitle">{selected}</h1>
                <img draggable='false' className="ReactLogo2" src={ReactLogo} alt='react' />
            </div>
        </>
    )
}

export default HooksBanner;