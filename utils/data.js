const users = [
    {
      username: 'john123',
      email: 'john@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'jane456',
      email: 'jane@example.com',
      thoughts: [],
      friends: [],
    },
  ];
  
  const thoughts = [
    {
      thoughtText: 'This is my first thought!',
      username: 'john123',
      reactions: [],
    },
    {
      thoughtText: 'Just had a great day!',
      username: 'jane456',
      reactions: [],
    },
  ];
  
  module.exports = { users, thoughts };
  