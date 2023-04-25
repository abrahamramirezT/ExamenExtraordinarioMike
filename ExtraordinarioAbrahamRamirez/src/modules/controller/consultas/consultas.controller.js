const { response, Router } = require('express');
const { validateError } = require('../../../utils/functions');
const { findAll ,findAll2,findAll3,findAll4,findAll5,findAll6,findAll7,findAll8,findAll9,findAll10} = require('./consultas.gateway');

//1
const getALL = async (req, res = Response) => {
    try {
        const users = await findAll();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });

    };

};

//2
const getALL2 = async (req, res = Response) => {
    try {
        const users = await findAll2();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });

    };

};


//3
const getALL3 = async (req, res = Response) => {
    try {
        const users = await findAll3();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });

    };

};

//4
const getALL4 = async (req, res = Response) => {
    try {
        const users = await findAll4();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });

    };

};


//5
const getALL5 = async (req, res = Response) => {
    try {
        const users = await findAll5();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });

    };

};

//6
const getALL6 = async (req, res = Response) => {
    try {
        const users = await findAll6();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });

    };

};

//7
const getALL7 = async (req, res = Response) => {
    try {
        const users = await findAll7();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });

    };

};

//8
const getALL8 = async (req, res = Response) => {
    try {
        const users = await findAll8();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });

    };

};

//9
const getALL9 = async (req, res = Response) => {
    try {
        const users = await findAll9();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });

    };

};




//10
const getALL10 = async (req, res = Response) => {
    try {
        const users = await findAll10();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });

    };

};


const consulta1Router = Router();
consulta1Router.get('/', getALL);

const consulta2Router = Router();
consulta2Router.get('/', getALL2);

const consulta3Router = Router();
consulta3Router.get('/', getALL3);

const consulta4Router = Router();
consulta4Router.get('/', getALL4);

const consulta5Router = Router();
consulta5Router.get('/', getALL5);

const consulta6Router = Router();
consulta6Router.get('/', getALL6);

const consulta7Router = Router();
consulta7Router.get('/', getALL7);

const consulta8Router = Router();
consulta8Router.get('/', getALL8);

const consulta9Router = Router();
consulta9Router.get('/', getALL9);

const consulta10Router = Router();
consulta10Router.get('/', getALL10);





module.exports = {
    consulta1Router,
    consulta2Router,
    consulta3Router,
    consulta4Router,
    consulta5Router,
    consulta6Router,
    consulta7Router,
    consulta8Router,
    consulta9Router,
    consulta10Router
}