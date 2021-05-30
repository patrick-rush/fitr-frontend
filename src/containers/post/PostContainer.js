// PostContainer will display author, post info (date, likes, shares, replies), post content (text, image), replies

// Author info will display clickable avatar, name, and username

// Post info will display date posted, number of likes, number of shares, number of replies

// Post content can be text, an image, or both

// Replies will be displayed under the post content

import React from 'react';

const PostContainer = () => {
    return (
        <div>
            <div>
                <div>
                    {/* Author Info (avatar, name, username) */}
                </div>
                <div>
                    {/* Date Posted */}
                </div>
            </div>
            <div>
                {/* Post Text/Image */}
            </div>
            <div>
                {/* Post Info (number likes, number shares, number replies) */}
            </div>
            <div>
                {/* Replies */}
            </div>
        </div>
    )
}

export default PostContainer;