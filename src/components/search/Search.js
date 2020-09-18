import React, { useState } from "react"

import Profile from "../profile/Profile";

export default function Search() {
    const [searchText, setSearchText] = useState("");
    const [isOrganizationSearchChecked, setSearchOptionChange] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setSearchData] = useState({});

    function handleToggleSearchOptionChange(event) {
        setSearchOptionChange( event.target.checked );
    }

    function handleSearchTextChange(event) {
        setSearchText( event.target.value );
    }

    function handleSearchTextKeyPress(event) {
        setSearchData(() => {
            if (event.charCode === 13 && searchText) {

                setSearchText(event.target.value);

                const usersSearchLinkPrefix = "https://api.github.com/users/";
                const orgsSearchLinkPrefix = "https://api.github.com/orgs/";

                let searchLink;
                if (searchText) {
                    if (isOrganizationSearchChecked) {
                        searchLink = orgsSearchLinkPrefix.concat(searchText);

                    } else {
                        searchLink = usersSearchLinkPrefix.concat(searchText);
                    }
                }

                fetch(searchLink, {
                    headers: { 'Accept': 'application/vnd.github.v3+json' }})
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            return {}
                        }
                    })
                    .then(responseData => {
                        setIsLoading(false);
                        setSearchData(responseData);
                    });
            }
        });
    }

    function isEmptyObject(obj) {
        let name;
        for (name in obj) {
            return false;
        }
        return true;
    }

    return (
        <div className="form__group">
            <input className="form__input"
                   type="text"
                   placeholder="User/Organization name"
                   name="searchText"
                   value={searchText}
                   onKeyPress={handleSearchTextKeyPress}
                   onChange={handleSearchTextChange}
            />

            <br />

            <label className="form__label">
                <span />
                <input className="form__checkbox"
                       type="checkbox"
                       checked={isOrganizationSearchChecked}
                       onChange={handleToggleSearchOptionChange} />

                GitHub Organization Search?
            </label>

            <br />
            <br />

            {isEmptyObject({...data}) ? <div /> : <Profile {...data} />}
        </div>
    )
}