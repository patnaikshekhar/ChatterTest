jest.dontMock('../src/components/Login');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Login = require('../src/components/Login').default;

describe('Login', () => {
    it("shows the text login", () => {
        const login = TestUtils.renderIntoDocument(
            <Login />
        );
        
        const loginNode = ReactDOM.findDOMNode(login);
        
        expect(loginNode.textContent).toEqual('Login Route');
    });
});