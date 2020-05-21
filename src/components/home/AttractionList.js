import React from "react"
import Attraction from "./Attraction"

const AttractionList = props => {
    return (
        <>
            <article className="explorerList">
                {
                    props.attractions.map(attraction =>
                        <Attraction key={attraction.id} attraction={attraction} {...props} />)
                }
            </article>
        </>
    )
}

export default AttractionList