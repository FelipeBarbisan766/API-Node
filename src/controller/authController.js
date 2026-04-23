import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../model/UsersModel.js';

export async function register(req,res){
    const { username, userEmail, password } = req.body;
    const [data , message ] = await UserModel.GetByEmail(userEmail);

    // if (data?.length > 0) {
    //     return res.status(400).json({ message: 'Usuário já existe' });
    // }

    const hashedPassword = await bycrypt.hash(password, 10);
    const response = await UserModel.Post({ username, userEmail, password: hashedPassword });

    res.status(201).json({ message: 'Usuário criado com sucesso', response });
};

export const login = async (req, res) => {

};

export const logout = async (req, res) => {

};