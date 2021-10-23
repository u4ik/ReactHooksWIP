import { useState, useEffect } from 'react';
import Pic1 from '../../../Assets/useState/Import.png'
import Pic2 from '../../../Assets/useState/Use1.png'
import Pic3 from '../../../Assets/useState/Use2.png'
import Pic4 from '../../../Assets/useState/Use3.png'
import Pic5 from '../../../Assets/useState/Use4.png'
import copy2clip from '../../../Assets/copy.svg'

import ReactTooltip from 'react-tooltip';

import styled from 'styled-components'

import './State.css'

import StateExample1 from './StateExample1';
import StateExample2 from './StateExample2';
import StateExample3 from './StateExample3';

const ClipboardInput = styled.input`
    background: rgba(96,211,242,.2);
    padding: 1em;
    min-width: 14em;
    border-radius: 5px;
    border: solid .2em black;
    outline: none;
    font-size: .7em;
    user-select: none; 
    pointer-events:none;
    font-weight: 530;
    `;

const ClipboardIcon = styled.img`
    width: 1.2em;
    cursor:pointer;
    padding: .2em .2em;
    margin: .2em .2em;
    box-size:border-box;
    border: .1em solid transparent;
    border-radius:5px;
    `;

const Row = styled.div`
    display:flex;
    justify-content:center;
    gap:.1em;
    `

function State({ docLink }) {

    function copyToClipboard(targetId) {
        let copyInputText = document.getElementById(targetId)     
        navigator.clipboard.writeText(copyInputText.value);
        setCopyText('Copied')
    }

    const [rCount, setRCount] = useState(-3);
    const [copyText, setCopyText] = useState('Copy');

    useEffect(() => {
        setTimeout(() => setCopyText('Copy'), 1000)
    }, [])


    return (
        <div className='HookContentWrap'>
            <div className='HookContent'>
                <div>
                    <a rel='noreferrer' target='_blank' href={docLink}>useState Documentation</a>
                </div>

                <div className='p-text'>
                    <p>Allows us to store a variable into a state, which our components can keep track of and remember. We are also provided with a function that allows us to update the value contained within that state.</p>
                </div>

                <p className='p-text bold'> Importing useState</p>
                <Row>
                    <ClipboardInput readOnly type="text" id='clipInput1' value="import { useState } from 'react'"></ClipboardInput>
                    <ClipboardIcon data-tip={copyText} className='copy2clipboard' id='clip1' alt='copy2clipboard' src={copy2clip}
                        onClick={(e) => {
                            copyToClipboard('clipInput1');
                        }}
                    />
                    <ReactTooltip place="top" type="dark" effect="solid" />
                    {/* <img className='Pic1' alt='import usestate' src={Pic1} /> */}
                </Row>

                <p className='p-text bold'> Use</p>
                <img className='Pic1' alt='import usestate' src={Pic2} />

                <div className='p-text'>
                    <p>Here we are setting up two variable names, along with a value that is 0. We're allowed to name these variables whatever we wish, but it makes sense to name them based on what they will do or provide.</p>
                    <img className='Pic1' alt='import usestate' src={Pic3} />
                    <p>We use array destructuring to utilize these variables from an array that the useState function returns. The [0] index will be our default/initial state. The [1] index of that array will provide a function to update the value of our state variable.</p>
                </div>

                <img className='Pic1' alt='import usestate' src={Pic4} />

                <p className='p-text'>As mentioned before, we can name these variables whatever we want. We can name the state just as we would with any variable declaration. And now that we know the second item in the array is an updater to our state, we can name it something like setCount, which is a function.</p>


                <p className='p-text'>This component will render this:</p>

                <StateExample1 setRCount={setRCount} />

                <p className='p-text'>The state of the default value changes, as we are initially passing that into the setCount function as an argument with 1 being added to it. This occurs each time we access the onClick event on our button, changing the value, and displaying it on the fly! </p>

                <p className='p-text'>We can even create state variables that can change CSS values!</p>

                <StateExample2 setRCount={setRCount} />

                <img className='Pic1' alt='import usestate' src={Pic5} />

                <p className='p-text'>We can accomplish this by storing a default state, which is undefined. We can name our variables something reasonable like style and setStyle. There are a multitude of different ways that we can implement state to control styles, in this case we wrote a ternary to check the state's current value. In addition to some buttons which have onclick handlers to change our style's state value when clicked. And based on that value, a CSS class will be applied to the div tag. </p>

                <StateExample3 rCount={rCount} setRCount={setRCount} />


                <p className='p-text'>Every time a state variable is changed, React will re-render that component.
                    Each example shown far above is a component with its own state. When that state changed, we have kept track of the render count which is shown in the component above. </p>
                <p className='p-text'>The render count component has its own state as well, you can click that component to see a change. When that change occurs to its state, the component is re-rendered. Which adds to our overall render count from each of these components reloading.</p>

            </div>



        </div>
    );
}

export default State;