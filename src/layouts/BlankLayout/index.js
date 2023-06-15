import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlankLayout = () => {
    const navigate = useNavigate()
    return (
        <>12
        <div onClick={() => {
            navigate("/login");
        }}>link</div>
        </>
    )
}

export default BlankLayout