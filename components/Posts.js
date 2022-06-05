import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import Post from './Post';
import { db } from "../firebase";
const Posts = ({ posts }) => {
    const [realtimePosts] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    );

    return (
        <div>
            {realtimePosts ?
                realtimePosts?.docs.map(post => (
                    <Post
                        key={post.id}
                        name={post.data().name}
                        message={post.data().message}
                        email={post.data().email}
                        timestamp={post.data().timestamp}
                        image={post.data().image}
                        postImage={post.data().postImage}
                    />
                )) :
                posts.map((post) => (
                    <Post
                        key={posts.id}
                        name={posts.name}
                        message={posts.message}
                        email={posts.email}
                        timestamp={posts.timestamp}
                        image={posts.image}
                        postImage={posts.postImage}
                    />
                ))}
        </div>
    )
}

export default Posts