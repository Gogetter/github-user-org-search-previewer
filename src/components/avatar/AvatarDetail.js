import React from "react"

function AvatarDetail(props) {
    return (
        <div className="container">
            <h3>{props.name}</h3>
            
            <br/>

            <h3>Joined GitHuB on: {props.joinedDate}</h3>

            <br />

            <h3>
                <a href={props.pageUrl}> View {props.name}'s profile</a>
            </h3>
        </div>

    );
}

export default AvatarDetail