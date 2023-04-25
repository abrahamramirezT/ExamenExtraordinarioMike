//////// consulta 1
 fetch("http://localhost:3000/api/consulta1").then((response)=>response.json()).then((data)=>{
    console.log(data);
    consulta1(data);
 }).catch((error)=>{
     console.log(error)
 });

 const consulta1 = (alumnos)=>{
    const contenido = document.getElementById("consulta1");
    alumnos.forEach((alumno) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${alumno.codigo_cliente}</td>
        <td>${alumno.nombre_cliente}</td>
        <td>${alumno.nombre_contacto}</td>
        <td>${alumno.apellido_contacto}</td>
        <td>${alumno.telefono}</td>
        <td>${alumno.fax}</td>
        <td>${alumno.linea_direccion1}</td>
        <td>${alumno.linea_direccion2}</td>
        <td>${alumno.ciudad}</td>
        <td>${alumno.region}</td>
        <td>${alumno.pais}</td>
        <td>${alumno.codigo_postal}</td>
        <td>${alumno.codigo_empleado_rep_ventas}</td>
        <td>${alumno.limite_credito}</td>
        </tr>
        `;
    });
 }

///// consulta 2
fetch("http://localhost:3000/api/consulta2").then((response)=>response.json()).then((data)=>{
    console.log(data);
    consulta2(data);
 }).catch((error)=>{
     console.log(error)
 });

const consulta2 = (alumnos)=>{
    const contenido = document.getElementById("consulta2");
    alumnos.forEach((alumno) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${alumno.codigo_cliente}</td>
        <td>${alumno.nombre_cliente}</td>
        <td>${alumno.nombre_contacto}</td>
        <td>${alumno.apellido_contacto}</td>
        <td>${alumno.telefono}</td>
        <td>${alumno.fax}</td>
        <td>${alumno.linea_direccion1}</td>
        <td>${alumno.linea_direccion2}</td>
        <td>${alumno.ciudad}</td>
        <td>${alumno.region}</td>
        <td>${alumno.pais}</td>
        <td>${alumno.codigo_postal}</td>
        <td>${alumno.codigo_empleado_rep_ventas}</td>
        <td>${alumno.limite_credito}</td>



        </tr>
        `;
    });
 }



 //////////// consulta 3 
 fetch("http://localhost:3000/api/consulta3").then((response)=>response.json()).then((data)=>{
    console.log(data);
    consulta3(data);
 }).catch((error)=>{
     console.log(error)
 });

 const consulta3 = (alumnos)=>{
    const contenido = document.getElementById("consulta3");
    alumnos.forEach((alumno) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${alumno.codigo_cliente}</td>
        <td>${alumno.nombre_cliente}</td>
        <td>${alumno.nombre_contacto}</td>
        <td>${alumno.apellido_contacto}</td>
        <td>${alumno.telefono}</td>
        <td>${alumno.fax}</td>
        <td>${alumno.linea_direccion1}</td>
        <td>${alumno.linea_direccion2}</td>
        <td>${alumno.ciudad}</td>
        <td>${alumno.region}</td>
        <td>${alumno.pais}</td>
        <td>${alumno.codigo_postal}</td>
        <td>${alumno.codigo_empleado_rep_ventas}</td>
        <td>${alumno.limite_credito}</td>

        </tr>
        `;
    });
 }


 ///// consulta 4
fetch("http://localhost:3000/api/consulta4").then((response)=>response.json()).then((data)=>{
    console.log(data);
    consulta4(data);
 }).catch((error)=>{
     console.log(error)
 });

const consulta4 = (alumnos)=>{
    const contenido = document.getElementById("consulta4");
    alumnos.forEach((alumno) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${alumno.nombre_cliente}</td>
        <td>${alumno.limite_credito}</td>
        </tr>
        `;
    });
 }



 ///// consulta 5
fetch("http://localhost:3000/api/consulta5").then((response)=>response.json()).then((data)=>{
    console.log(data);
    consulta5(data);
 }).catch((error)=>{
     console.log(error)
 });

const consulta5= (alumnos)=>{
    const contenido = document.getElementById("consulta5");
    alumnos.forEach((alumno) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${alumno.codigo_empleado}</td>
        <td>${alumno.nombre}</td>
        <td>${alumno.apellido1}</td>
        <td>${alumno.apellido2}</td>
        <td>${alumno.extension}</td>
        <td>${alumno.email}</td>
        <td>${alumno.codigo_oficina}</td>
        <td>${alumno.codigo_jefe}</td>
        <td>${alumno.puesto}</td>





        </tr>
        `;
    });
 }



 ///// consulta 6
fetch("http://localhost:3000/api/consulta6").then((response)=>response.json()).then((data)=>{
    console.log(data);
    consulta6(data);
 }).catch((error)=>{
     console.log(error)
 });

 const consulta6= (alumnos)=>{
    const contenido = document.getElementById("consulta6");
    contenido.innerHTML = ''; // Limpia el contenido previo
    alumnos.forEach((alumno) => {
        contenido.innerHTML += `
        <tr>
        <td>${alumno.count}</td>
        </tr>
        `;
    });
}



 ///// consulta 7
fetch("http://localhost:3000/api/consulta7").then((response)=>response.json()).then((data)=>{
    console.log(data);
    consulta7(data);
 }).catch((error)=>{
     console.log(error)
 });

const consulta7 = (alumnos)=>{
    const contenido = document.getElementById("consulta7");
    alumnos.forEach((alumno) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${alumno.pais}</td>
        <td>${alumno.cantidad_clientes}</td>
        </tr>
        `;
    });
 }

//////////// consulta 8
fetch("http://localhost:3000/api/consulta8").then((response)=>response.json()).then((data)=>{
    console.log(data);
    consulta8(data);
 }).catch((error)=>{
     console.log(error)
 });

 const consulta8 = (alumnos)=>{
    const contenido = document.getElementById("consulta8");
    alumnos.forEach((alumno) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${alumno.pago_medio}</td>
        </tr>
        `;
    });
 }




//////////// consulta 9
 fetch("http://localhost:3000/api/consulta9").then((response)=>response.json()).then((data)=>{
    console.log(data);
    consulta9(data);
 }).catch((error)=>{
     console.log(error)
 });

 const consulta9 = (alumnos)=>{
    const contenido = document.getElementById("consulta9");
    alumnos.forEach((alumno) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${alumno.estado}</td>
        <td>${alumno.num_pedidos}</td>
        </tr>
        `;
    });
 }


 ///// consulta 10
fetch("http://localhost:3000/api/consulta10").then((response)=>response.json()).then((data)=>{
    console.log(data);
    consulta10(data);
 }).catch((error)=>{
     console.log(error)
 });

const consulta10 = (alumnos)=>{
    const contenido = document.getElementById("consulta10");
    alumnos.forEach((alumno) => {
        contenido.innerHTML = `
        ${contenido.innerHTML}
        <tr>
        <td>${alumno.nombre_cliente}</td>
        <td>${alumno.limite_credito}</td>
        </tr>
        `;
    });
 }

 