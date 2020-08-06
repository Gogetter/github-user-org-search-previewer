import React from "react"

import AvatarDetail from "./AvatarDetail"

// preferring a function component as we do not need to manage state
function Avatar (props) {
    
    return(
        <div>
            <img
                src={props.avatarData.imageUrl}
                alt={props.avatarData.imageAlt}
            />

            <AvatarDetail {...props.avatarDetailData}/>
        </div>
    );
}

export default Avatar