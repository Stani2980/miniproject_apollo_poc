import React from 'react';
import { Mutation } from "react-apollo";
import { ADD_USER, LIKE_LOCATION_BLOG } from '../statements/mutations'

export const AddUser = () => {
    let userName;
    let password;
    let firstName;
    let lastName;
    let email;

    return (<Mutation mutation={ADD_USER}>
        {(createUser, { data }) => (
            <div>
                Add User
            <form
                    onSubmit={e => {
                        e.preventDefault();
                        createUser({
                            variables: {
                                userName: userName.value,
                                password: password.value,
                                firstName: firstName.value,
                                lastName: lastName.value,
                                email: email.value
                            }
                        });
                        userName.value = "";
                        password.value = "";
                        firstName.value = "";
                        lastName.value = "";
                        email.value = "";
                    }}
                >
                    Username
              <input placeholder='username'ref={node => { userName = node }} />
                <br/>
                    Password
              <input placeholder='password'ref={node => { password = node }} />
                <br/>
                    Firstname
              <input placeholder='first name'ref={node => { firstName = node }} />
                <br/>
                    Lastname
              <input placeholder='last name' ref={node => { lastName = node }} />
                <br/>
                    Email
              <input type='email' placeholder='email' ref={node => { email = node }} />
                <hr/>
                    <button type="submit">Add User</button>
                </form>
            </div>
        )}
    </Mutation>
    );
};

export const LikeLocationBlog = () => {
    let userId;
    let locationBlogId;

    return (
        <Mutation mutation={LIKE_LOCATION_BLOG}>
            {(likeBlog, { data }) => (
                <div>
                    Like Location Blog
                    <hr/>
            <form onSubmit={e => {
                        e.preventDefault();
                        likeBlog({
                            variables: {
                                userId: userId.value,
                                locationBlogId: locationBlogId.value,
                            }
                        });
                        userId.value = "";
                        locationBlogId.value = "";
                    }}
                    >
                        user id
              <input ref={node => { userId = node }} />
              <hr/>
                        blog id
              <input ref={node => { locationBlogId = node }} />
              <hr/>
                        <button type="submit">Add Location Blog</button>
                    </form>
                </div>
            )}
        </Mutation>
    );
};