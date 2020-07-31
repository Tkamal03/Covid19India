import React from "react";
import Autocomplete from "react-autocomplete";
import { Link } from "react-router-dom";

import { renderStateTitle } from "./stateSuggestion";

class AutoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: "" };
  }

  handleSelect(val) {
    this.setState({ val });
    console.log(val);
  }

  render() {
    return (
      <div className="autocomplete-wrapper">
        <Autocomplete
          value={this.state.val}
          items={this.props.autoSuggestion}
          getItemValue={(item) => item.stateName}
          shouldItemRender={renderStateTitle}
          renderMenu={(item) => (
            <div className="autoComplete-options">{item}</div>
          )}
          renderItem={(item, isHighlighted) => (
            <Link
              to={{
                pathname: `/state/${item.stateCode}`,
                state: { detail: item },
              }}
              key={item.stateCode}
              data={item}
              className="clearfix block-element"
            >
              <div className={`item ${isHighlighted ? "selected-item" : ""}`}>
                <span className="dropItem">{item.stateName}</span>
                <span className="shortCode m-auto badge badge-warning">
                  {item.stateCode}
                </span>
              </div>
            </Link>
          )}
          onChange={(event, val) => this.setState({ val })}
          onSelect={this.handleSelect.bind(this)}
        />
      </div>
    );
  }
}

export default AutoSearch;
