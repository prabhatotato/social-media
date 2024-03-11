import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => {},
    deletePost: () => {},
}
export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: (postId) => {
        console.log(`delete post called for ${postId}`);
    },
})

const PostListReducer = (currPostList, action) => {
    return currPostList
}
const PostListProvider = ({children}) => {

    const [postList, dispatchPostList] = useReducer(PostListReducer, DEFAULT_POST_LIST)

    const addPost = () => {}
    const deletePost = (postId) => {
        console.log(`delete post called for ${postId}`)
    }
    
    
    return (
        <PostList.Provider value = {{postList, addPost, deletePost}}>
        {children}
        </PostList.Provider>
    )
}

const DEFAULT_POST_LIST = [{
    id:'1',
    title: 'Going to Mumbai',
    body: 'Hi friends, I am going to Mumbai for a vacation, hope to enjoy a lot. Peace out.',
    reactions: 2,
    userId: 'user-9',
    tags: ['vacation', 'mumbai', 'enjoying']
},{
    id:'2',
    title: 'Pass ho gya bhai',
    body: 'Bhai bina padhe pass. Unbelievable!',
    reactions: 15,
    userId: 'user-12',
    tags: ['exams', 'pass', 'unbelievable']
}]


export default PostListProvider