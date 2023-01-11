import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const LoginForm = () => {
    const [username, setUsername] = userState('');
    const [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password);
    };

    return (
        <form onSubmit={submit} className="login-form">
            <label htmlFor="username">Username</label>

            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              onChange={e => setUsername(e.target.value)}
            />

            <label htmlFor="password">Password</label>

            <input
              type="text"
              placeholder="Password"
              name="password"
              requiredonChange={e => setPassword(e.target.value)}
            />

            <button type="submit">Log In</button>
        </form>
    );
};
