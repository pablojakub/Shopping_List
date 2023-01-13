import { assertState } from "./assertFunctions";
import { describe, expect, it } from 'vitest'

describe('#asserFunction', () => {
    it('throws an Error when type is not assert', () => {
        //arrange 
        const state = {
            type: 'EDIT_MODE'
        }
        expect(() => assertState(state, 'LOADING_MODE')).toThrowError('Invalid');
    })
})