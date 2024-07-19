const { User } = require('../models/User.model');

const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

const getUserById = async (id) => {
  const user = User.findByPk(id);

  return user;
};

const createUser = async (name) => {
  const newUser = await User.create({ name });

  return newUser;
};

const updateUser = async (id, name) => {
  await User.update({ name }, { where: { id } });

  return getUserById(id);
};

const deleteUser = async (id) => {
  await User.destroy({
    where: {
      id,
    },
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
