import React from "react"
import Avatar from "../avatar/Avatar"

function Profile(props) {

    return (
        <div className="container">
            <Avatar 
            avatarData = {{imageUrl: props.avatar_url, 
                imageAlt: props.login}} 
            avatarDetailData ={{joinedDate: props.created_at, 
                pageUrl: props.html_url, 
                name: props.name}}
            />
        </div>
    );
    
}

export default Profile