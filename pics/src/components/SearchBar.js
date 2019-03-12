import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: 'Hi there!' };

  onFormSubmit = event => {
    const { onSubmit } = this.props;
    event.preventDefault();

    onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
