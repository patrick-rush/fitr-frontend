// Should get User data from Redux store (avatar, name, bio, age, location)
// Should get UserPosts from Redux store
// Should import Widget components
// Renders header with user data
// Renders LeftWidgets, Feed and RightWidgets components
// Pass UserPosts to Feed as props
// Pass Widget components to LeftWidgets and RightWidgets as props

import React from 'react';

const ProfileContainer = () => {
    return (
        <div>
            <div>Header Thingy (banner, profile picture, basic info)</div>
            <div>Left Side Container Thingy</div>
            <div>Main Content</div>
            <div>Right Side Container Thingy</div>
        </div>
    )
}

export default ProfileContainer;