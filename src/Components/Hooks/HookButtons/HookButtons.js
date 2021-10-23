import './HookButtons.css'

import { useHistory, Switch, BrowserRouter as Router, Route } from 'react-router-dom'

const HookButtons = () => {


    let history = useHistory()
    return (
        <div style={{ display: 'flex', minHeight: '50vh', alignItems: 'center', justifyContent: 'center' }}>
            <div className='HookButtonWrap'>
                <Router>
                    <button className='HookButton' onClick={() => {
                        history.push('/usestate')
                    }}>useState</button>
                    <button className='HookButton' onClick={() => {
                        history.push('/useeffect')
                    }}>useEffect</button>
                    <button className='HookButton' onClick={() => {
                        history.push('/usememo')
                    }}>useMemo</button>
                    <button className='HookButton' onClick={() => {
                        history.push('/useref')
                    }}>useRef</button>
                    <button className='HookButton' onClick={() => {
                        history.push('/usereducer')
                    }}>useReducer</button>
                    <button className='HookButton' onClick={() => {
                        history.push('/usecallback')
                    }}>useCallback</button>
                </Router>
            </div>

        </div>
    )
}

export default HookButtons;