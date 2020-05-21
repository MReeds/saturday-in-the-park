import React from "react"
import Area from "./Area"

const AreaList = props => {
    return (
        <>
        <article>
            {
                props.areas.map(area =>
                    <Area key={area.id}
                        getAttractions={props.getAttractions}
                        area={area} />)
            }
        </article>
        </>
    )
}

export default AreaList