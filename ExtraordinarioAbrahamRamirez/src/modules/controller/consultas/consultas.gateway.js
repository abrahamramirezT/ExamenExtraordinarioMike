const { query } = require('../../../utils/mysql'); //funciones exportadas sin default se mandan a traer sin llaves


const findAll = async () => { //Esto es como el dao
    const sql = `SELECT * FROM cliente WHERE codigo_cliente NOT IN (SELECT codigo_cliente FROM pago)`;
    return await query(sql, [])
}

const findAll2 = async () => {
    const sql = `SELECT * FROM cliente WHERE codigo_cliente NOT IN (SELECT codigo_cliente FROM pedido)`;
    return await query(sql, [])
}


const findAll3 = async () => { //Esto es como el dao
    const sql = `SELECT * FROM cliente WHERE codigo_cliente NOT IN (
        SELECT codigo_cliente
       FROM pago
        )
       UNION
      SELECT *
      FROM cliente
      WHERE  codigo_cliente NOT IN (
      SELECT codigo_cliente
      FROM pedido
       )`;
    return await query(sql, [])
}
const findAll4 = async () => {
    const sql = `SELECT * FROM empleado WHERE codigo_oficina IS NULL`;
    return await query(sql, [])
}

const findAll5 = async () => {
    const sql = `SELECT * FROM empleado WHERE codigo_empleado NOT IN (SELECT codigo_empleado_rep_ventas FROM cliente)`;
    return await query(sql, [])
}

const findAll6 = async () => {
    const sql = `SELECT COUNT(*) as count FROM empleado`;
    return await query(sql, [])
}

const findAll7 = async () => {
    const sql = `SELECT pais, COUNT(codigo_cliente) as cantidad_clientes FROM cliente GROUP BY pais`;
    return await query(sql, [])
}

const findAll8 = async () => {
    const sql = `SELECT AVG(total) as pago_medio 
    FROM pago 
    WHERE fecha_pago BETWEEN '2009-01-01' AND '2009-12-31'`;
    return await query(sql, [])
}

const findAll9 = async () => {
    const sql = `SELECT estado, COUNT(estado) AS num_pedidos 
    FROM pedido 
    GROUP BY estado 
    ORDER BY num_pedidos DESC`;
    return await query(sql, [])
}


const findAll10 = async () => {
    const sql = `SELECT nombre_cliente, limite_credito FROM cliente ORDER BY limite_credito DESC LIMIT 1`;
    return await query(sql, [])
}


module.exports = {
    findAll,
    findAll2,
    findAll3,
    findAll4,
    findAll5,findAll6,
    findAll7,
    findAll8,findAll9,
    findAll10
    
}