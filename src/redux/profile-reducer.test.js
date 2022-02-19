import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hi, what\'s up?', likesCount: 15 },
        { id: 2, message: 'The best or nothing', likesCount: 25 }
    ]
}


test('length of posts should increase', () => {
    // 1 test data
    let action = addPostCreator('place for new post');

    // 2 action 
    let newState = profileReducer(state, action);

    // 3 expectation
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    // 1 test data
    let action = addPostCreator('The Best');

    // 2 action 
    let newState = profileReducer(state, action);

    // 3 expectation
    expect(newState.posts[2].message).toBe('The Best');
});

test('length of posts should decrease', () => {
    // 1 test data
    let action = deletePost(1);

    // 2 action 
    let newState = profileReducer(state, action);

    // 3 expectation
    expect(newState.posts.length).toBe(1);
});

test(`length of posts shouldn't be changed if id is incorrect`, () => {
    // 1 test data
    let action = deletePost(1000);

    // 2 action 
    let newState = profileReducer(state, action);

    // 3 expectation
    expect(newState.posts.length).toBe(2);
});
