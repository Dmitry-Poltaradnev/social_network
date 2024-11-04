import { v1 } from "uuid";

export const initialPostState = {
    profilePage: {
        myPosts: [
            { id: v1(), text: 'This is my first post', likes: 10 },
            { id: v1(), text: 'This is my second post', likes: 20 },
            { id: v1(), text: 'This is my third post', likes: 30 },
        ],
    },
};

export const postReducer = (state = initialPostState, action: any) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    myPosts: [...state.profilePage.myPosts, { id: v1(), text: action.payload.text, likes: 0 }],
                },
            };
        case 'DELETE-POST':
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    myPosts: state.profilePage.myPosts.filter(post => post.id !== action.payload.id),
                },
            };
        default:
            return state;
    }
};

