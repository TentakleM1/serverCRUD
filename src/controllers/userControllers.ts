import { Handler } from "express";
import { UserService } from "../services/UserService";

export const getAllUsers: Handler = async (_, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).send({
      payload: {
        users: users
      }
    });
  } catch (err) {
    next(err);
  }
};

export const getUser: Handler = async (req, res, next) => {
  try {
    const userDB = await UserService.getUserById(Number(req.params.userId));
    res.status(200).send({
      payload: {
        user: userDB
      }
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUser: Handler = (req, res, next) => {
  try {
    UserService.deleteUser(Number(req.params.userId));
    res.sendStatus(200);
  } catch (err) {
    next(err)
  }
};

export const editUser: Handler = async (req, res, next) => {
  try {
    const userDB = await UserService.editUser(req.body);
    res.status(201).send({
      payload: {
        user: userDB
      }
    });
  } catch (err) {
    next(err)
  }
};

export const changePassword: Handler = async (req, res, next) => {
  try {
    await UserService.changePasswordUser(Number(req.params.userId), req.body.password);
    res.status(201).send({ message: 'Password changed'});
  } catch (err) {
    next(err)
  }
};
