import { useState, useEffect } from 'react';

const StateExample2 = ({setRCount}) => {
    const [style, setStyle] = useState(undefined);

    useEffect(() => {
        setRCount(prev => prev + 1)
    }, [style])


    return (
        <div className={style === 'dark' ? 'darkTheme' : style=== 'light' ? 'lightTheme' : null} style={{borderRadius:'15px',padding:'1%',border: '1px solid black', width:'auto', marginLeft:'auto',marginRight:'auto',marginBottom:'2%',maxWidth:"400px"}} >
            <button className='darkButton' onClick={() => setStyle('dark')}>Dark</button>
            <button className='lightButton'onClick={() => setStyle('light')}>Light</button>
        </div>
    );
};

export default StateExample2;





{/* <div style={{border:'solid 1px black', width:'20%', marginLeft:'auto', marginRight:'auto', borderRadius:'15px', padding:'2%'}}> */ }