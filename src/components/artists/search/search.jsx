import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtistActions from '../../../actions/artistActions';

class SearchForm extends Component {

    dispatchSearch() {
        this.props.dispatch(ArtistActions.loading(false));
        this.props.dispatch(ArtistActions.searchArtistAsync(this.props.artist.get('search')));
    }

    handleKeyDown(event) {
        if (event.keyCode === 13) {
            event.preventDefault(); 
            this.dispatchSearch();
        }
    }

    handleOnClick() {
        this.dispatchSearch();
    }

    render() {
        return (
            <div className="row col-lg-12" style={{ marginTop: 80, marginBottom: 30, marginLeft: 3 }}>
                <form className="form-inline my-4 my-lg-0" >
                    <input
                        className="form-control mr-sm-3"
                        style={{ width: 538, topMargin: 20 }}
                        type="text"
                        name="search"
                        placeholder="Search by Artist"
                        onChange={(e) => this.props.dispatch(ArtistActions.updateSearch('search', e.target.value))}
                        value={this.props.artist.get('search')}
                        onKeyDown={(e) => this.handleKeyDown(e)}
                    />
                    <button
                        className="btn btn-primary custom-btn ml-3 my-sm-0"
                        type="button"
                        onClick={() => this.handleOnClick()}
                    > Search
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        artist: state.artist
    };
}

export default connect(mapStateToProps)(SearchForm);