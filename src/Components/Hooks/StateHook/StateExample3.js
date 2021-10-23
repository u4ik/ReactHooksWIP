import { useState, useEffect } from 'react';



const StateExample3 = ({ setRCount, rCount }) => {
    const [colorSelect, setColorSelect] = useState('');
    const [colorsArray, setColorsArray] = useState(['red', 'green', 'blue', 'yellow']);

    useEffect(() => {
        setRCount(prev => prev + 1)
    },[colorSelect])


    return (
        <div style={{ borderRadius: '15px', padding: '', border: '1px solid black', borderTop: 'none', width: 'auto', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2%', cursor: 'pointer', userSelect:'none',maxWidth:"400px" }} onClick={() => {
            setColorSelect(colorsArray[Math.floor(Math.random() * colorsArray.length)])
        }} >

            <div style={{ zIndex: -2, background: colorSelect, border: 'solid 1px black', height: '20px', width: 'auto', borderRadius: ' 10px 10px 0px 0px' }}></div>

            <p className=''>Render Count:</p>
            <p className='renderNumber'>{rCount}</p>
        
        </div>
    );
};

export default StateExample3;




{/* <div style={{border:'solid 1px black', width:'20%', marginLeft:'auto', marginRight:'auto', borderRadius:'15px', padding:'2%'}}> */ }