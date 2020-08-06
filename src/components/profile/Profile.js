import React from "react"

import Avatar from "../avatar/Avatar"

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {},
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch("https://api.github.com/users/gogetter", {
            headers: {'Accept': 'application/vnd.github.v3+json'}})
        .then(response => response.json())
        .then(responseData => this.setState({
            data: responseData,
            isLoading: false
        }));
    }

    render() {
        return (
            <div>
                <Avatar 
                avatarData = {{imageUrl: this.state.data.avatar_url, 
                    imageAlt: this.state.data.login}} 
                avatarDetailData ={{joinedDate: this.state.data.created_at, 
                    pageUrl: this.state.data.html_url, 
                    name: this.state.data.name}}
                />
                
            </div>
        );
    }
    
}

export default Profile