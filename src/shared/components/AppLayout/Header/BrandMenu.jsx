import React from 'react';

// Assuming BranchMenu and MainMenu are React components
export const BranchMenu = () => {
  return (
    <div className="EduHeader_headerNavigation__3Li1o">
      <div className="EduBrandBar_container__1av_b">
        <div className="EduBrandBar_searchFlyout__s8Ypv">
          <form
            className="EduBrandBar_searchForm__2lmqo"
            data-formtype="search"
          >
            <div className="EduBrandBar_searchBarContainer__2l1nu">
              <label
                htmlFor="searchBar"
                className="EduBrandBar_searchBarLabel__1OV6d"
              >
                Search UChicago
              </label>
              <input
                id="searchBar"
                className="EduBrandBar_searchBar__36kVg"
                type="search"
                aria-label="Search UChicago"
                placeholder=""
                tabIndex="-1"
                defaultValue=""
              />
            </div>
            <div className="fa fa-search" aria-hidden="true">
              <input type="submit" tabIndex="-1" value="Submit Search" />
            </div>
            <div className="PeopleDirectoryLink">
              <a
                href="http://directory.uchicago.edu/"
                className="peopleLink"
                target="_blank"
                rel="noopener"
                data-chevron="true"
              >
                <span className="linkText">Search for People</span>
              </a>
            </div>
          </form>
          <button
            aria-label="Close search form"
            className="EduBrandBar_close__tIfwg fa fa-close"
            tabIndex="-1"
            aria-hidden="true"
          ></button>
        </div>
      </div>
    </div>
  );
};