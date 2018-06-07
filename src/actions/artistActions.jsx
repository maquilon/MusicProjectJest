import axios from 'axios';
import Constants from '../constants/';

const base = 'https://itunes.apple.com/search/';

class ArtistActions {
    static updateSearch(property, value) {
        return {
            type: Constants.UPDATE_SEARCH,
            property,
            value
        };
    }

    static loadArtistResults(results) {
        return {
            type: Constants.LOAD_RESULTS,
            results
        }
    }

    static loading(boolean) {
        return {
            type: Constants.LOADING,
            boolean
        }
    }

    // ===================================================================== //
    // ========================== API: ASYNC CALLS ========================= //
    // ===================================================================== //

    static searchArtistAsync(searchText) {
        return (dispatch) => {
            axios.get(`${base}?term=` + searchText + "&media=music")
                .then((response) => {
                    dispatch(ArtistActions.loading(true));
                    dispatch(ArtistActions.loadArtistResults(response.data.results))
                    dispatch(ArtistActions.updateSearch('search',''))
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(ArtistActions.loading(true));
                })
        }
    }
}

export default ArtistActions;