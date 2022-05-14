import React from 'react'
import {glossary} from '../../data/glossary'

function ShipTerms()    {


return  (
    <>    
    <div>
        {/* className="header" needs to be changed to tailwind css equivalent for blue color */}
        <div className = "header">
            <h1>Ship Terms</h1>
        </div>

        {glossary.map((item) => (
        
            <div>
                <p>title: {item.title}</p>
                <p>desc: {item.desc}</p>
            </div>

        ))}

    </div>
    </>
    )
}

export default ShipTerms