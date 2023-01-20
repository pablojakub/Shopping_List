import {describe, expect } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Input from './Input';

afterEach(cleanup)

describe('Input component testing', () => {
    it('should receive green border on focus', () => {
        //arrange
        render(<Input placeholder='price' type={'number'} min={1}/>);
        const input = screen.getByPlaceholderText('price')

        // assert
       input.focus();
       expect(getComputedStyle(input).borderColor).toBe('#1ad1b9');
    })
})