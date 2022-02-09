'use strict';

class Post {
    static getList(url) {
        return fetch(url, { method: 'GET' })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error(response.status);
                }
            });
    }
}

export default Post;

