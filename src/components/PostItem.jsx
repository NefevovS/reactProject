import React from 'react';
import s from "../App.module.css";

const PostItem = (post) => {

    return (
        <div>
            <div className={s.postItem}>
                <div>
                    <div>
                        <strong>{post.postName}</strong>
                    </div>
                    <div>
                        {post.postDescription}
                    </div>
                </div>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;