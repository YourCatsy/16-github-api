'use strict';

class Post {
    static LOGIN_PLACEHOLDER = '{{login}}';
    static GET_USER_URL = `https://api.github.com/users/${Post.LOGIN_PLACEHOLDER}`;
    
    static getList(userName) {
        const url = Post.GET_USER_URL.replace(Post.LOGIN_PLACEHOLDER, userName);
        return fetch(url, { method: 'GET' })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error(NOT_FOUND_MESSAGE);
                }
            });
    }
}

export default Post;

