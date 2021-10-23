const Effect = ({ docLink }) => {
    return (
        <div className='HookContentWrap'>
            <div className='HookContent'>
                <div className='p-text'>
                    <p>Allows us to store a variable into a state, which our components can keep track of and remember. We are also provided with a function that allows us to update the value contained within that state.</p>
                </div>


            </div>
            <a rel='noreferrer' target='_blank' href={docLink}>useEffect Documentation</a>
        </div>
    )
}

export default Effect;