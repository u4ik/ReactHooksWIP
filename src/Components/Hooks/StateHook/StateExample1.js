import { useState, useEffect } from 'react';

const StateExample1 = ({setRCount}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setRCount(prev => prev + 1)
    }, [count])

    return (
        <div  >
            <p>count = {count}</p>
            <span>
                <button onClick={() => setCount(count + 1)} className='countButton'>Increase Count</button> = {`onClick{() => setCount(${count}+1)}`}
            </span>
        </div>
    );
};

export default StateExample1;





{/* <div style={{border:'solid 1px black', width:'20%', marginLeft:'auto', marginRight:'auto', borderRadius:'15px', padding:'2%'}}> */ }