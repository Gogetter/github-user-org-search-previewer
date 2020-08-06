import React from "react"

function AvatarDetail(props) {
    return (
        <div>
            Joined GitHuB on: {props.joinedDate}

            <br />

            <a href={props.pageUrl}> View {props.name}'s profile</a>
        </div>

    );
}

export default AvatarDetail