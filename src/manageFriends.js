const initialState = { 
  friends: []
};

export function manageFriends(state = initialState, action) {
  // your code here
  switch (action.type) {
    case "friends/add":
      return {
        ...state,
        friends: [...state.friends, action.payload]
      };
    case "friends/remove":
      return { 
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.payload)
      };
    default:
      return state;
  }
}

// let friend = { id: 100, name: "Avi", hometown: "NYC" };
// const result = initialState.filter((friend.id = id))

const addFriendAction = {
  type: 'friends/add',
  payload: {
    name: 'Chrome Boi',
    hometown: 'NYC',
    id: 1
  }
};

const removeFriendAction = {
  type: 'friends/remove',
  payload: 1
};