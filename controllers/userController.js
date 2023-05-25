const User = require('../models/User');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  },

  async getUserById(req, res) {
    try {
      const user = await User.findOne(req.params.userId)
        .populate('thoughts')
        .populate('friends');
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  async addFriend(req, res) {
    try {
      const user = await User.findById(req.params.userId);
      const friend = await User.findById(req.params.friendId);
      if (!user || !friend) {
        return res.status(404).json({ error: 'User or friend not found' });
      }
      user.friends.push(friend._id);
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add friend' });
    }
  },

  async removeFriend(req, res) {
    try {
      const user = await User.findById(req.params.userId);
      const friend = await User.findById(req.params.friendId);
      if (!user || !friend) {
        return res.status(404).json({ error: 'User or friend not found' });
      }
      user.friends.pull(friend._id);
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to remove friend' });
    }
  }
};
