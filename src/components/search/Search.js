import React, { Component } from "react"

import Profile from "../profile/Profile";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            isOrganizationSearchChecked: false,
            isLoading: false,
            data: {}
        }
    }

    toggleSearchOptionChange = (event) => {
        this.setState({ isOrganizationSearchChecked: event.target.checked });
    }

    handleSearchTextChange = (event) => {
        this.setState({ searchText: event.target.value })
    }

    handleSearchTextKeyPress = (event) => {
        if (event.charCode === 13 && this.state.searchText) {

            this.setState({ searchText: event.target.value });

            const usersSearchLinkPrefix = "https://api.github.com/users/";
            const orgsSearchLinkPrefix = "https://api.github.com/orgs/";

            let searchLink;
            if (this.state.searchText) {
                if (this.state.isOrganizationSearchChecked) {
                    searchLink = orgsSearchLinkPrefix.concat(this.state.searchText);

                } else {
                    searchLink = usersSearchLinkPrefix.concat(this.state.searchText);
                }
            }

            fetch(searchLink, {
                headers: { 'Accept': 'application/vnd.github.v3+json' }})
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        this.setState({ data: {} })
                    }
                })
                .then(responseData => this.setState({
                    data: responseData,
                    isLoading: false
                }));
        }
    }

    isEmptyObject(obj) {
        var name;
        for (name in obj) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className="form__group">
                <input className="form__input"
                    type="text"
                    placeholder="User/Organization name"
                    name="searchText"
                    value={this.state.searchText}
                    onKeyPress={this.handleSearchTextKeyPress}
                    onChange={this.handleSearchTextChange}
                />

                <br />

                <label className="form__label">
                    <span></span>
                    <input className="form__checkbox"
                        type="checkbox"
                        checked={this.state.isOrganizationSearchChecked}
                        onChange={this.toggleSearchOptionChange} />

                    GitHub Organization Search?
                </label>

                <br />
                <br />

                {this.isEmptyObject(this.state.data) ? <div /> : <Profile {...this.state.data} />}
            </div>
        )
    }
}

export default Search;