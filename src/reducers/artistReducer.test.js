import { artistReducer } from './artistReducer';
import Immutable from 'immutable';

describe('Artist Reducer', () => {
    it('should return the initial state', () => {
        expect(artistReducer(undefined, "")).toEqual(
            Immutable.fromJS({
                search: '',
                loaded: true,
                results: []
            })
        )
    })
})