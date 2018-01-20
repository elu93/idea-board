import React from 'react'
import Idea from './Idea'

const IdeasList = (props) => {

    return (
        <div>
            {props
                .ideas
                .map((idea) => {
                    return (<Idea idea={idea} {...props} key={idea._id}/>)
                })
}
        </div>
    )
}

export default IdeasList