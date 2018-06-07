import artistActions from './artistActions';
import Constants from '../constants/';

describe('Artist Actions ', () => {
    it('should create an action to set the loaded flag', () => {
        const expectedAction = {
            type: Constants.LOADING,
            boolean: true
        }
        expect(artistActions.loading( true )).toEqual(expectedAction)
    })
})