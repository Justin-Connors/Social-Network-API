const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

connection.once('open', async () => {
    
    // console.log('connected');
    
    // // Clear existing data
    // await User.deleteMany({});
    // await Thought.deleteMany({});

    // // Create users
    // const createdUsers = await User.insertMany(users);
    // const createdThoughts = [];

    // // Associate thoughts with users
    // for (let i = 0; i < thoughts.length; i++) {
    //   const { _id: userId } = createdUsers.find(
    //     (user) => user.username === thoughts[i].username
    //   );
    //   const thought = { ...thoughts[i], username: userId };
    //   const createdThought = await Thought.create(thought);
    //   createdThoughts.push(createdThought);
    // }

    // // Update users with thoughts
    // for (let i = 0; i < createdThoughts.length; i++) {
    //   const { _id: thoughtId } = createdThoughts[i];
    //   await User.findOneAndUpdate(
    //     { _id: thoughts[i].username },
    //     { $push: { thoughts: thoughtId } }
    //   );
    // }

    console.log('Database seeded successfully!');
    process.exit(0);
});

