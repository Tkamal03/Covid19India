import React, { Component } from "react";
import { StateData, renderStateTitle } from "./state-data";
import Autocomplete from "react-autocomplete";
import { Link } from "react-router-dom";

class Autosearch extends Component {
  state = { val: "", placeholder: "e.g Tamilnadu" };

  render() {
    return (
      <div className="autocomplete-wrapper searchBox">
        <Autocomplete
          value={this.state.val}
          items={StateData()}
          getItemValue={(item) => item.title}
          shouldItemRender={renderStateTitle}
          placeholder="Hai"
          renderMenu={(item) => (
            <div className="autoComplete-options">{item}</div>
          )}
          renderItem={(item, isHighlighted) => (
            <Link to={`/state/${item.shortCode}`}>
              <div className={`item ${isHighlighted ? "selected-item" : ""}`}>
                {item.title}
                <span className="float-right shortCode badge badge-warning">
                  {item.shortCode}
                </span>
              </div>
            </Link>
          )}
          onChange={(event, val) => this.setState({ val })}
          onSelect={(val) => this.setState({ val })}
        />
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-search"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
      </div>
    );
  }
}

export default Autosearch;
