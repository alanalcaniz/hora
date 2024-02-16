$fecha= document.querySelector('#fecha');

function Relojdigital(){
    let calendar=new Date(),
    dia= calendar.getDate(),
    mes= calendar.getMonth()+1,
    anio= calendar.getFullYear(),
    diaSemana=calendar.getDay();
    diaMes=calendar.getMonth();

    dia= ('0'+dia).slice(-2);
    mes=('0'+mes).slice(-2)

    let semana=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
    let mesnombre=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    let showSemana= (semana[diaSemana])
    let showMes= (mesnombre[diaMes])
    $fecha.innerHTML = `${showSemana}, ${dia} de ${showMes} de ${anio}`
}
setInterval(() =>{
    Relojdigital()
},1000);

function currentTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;
    let reloj = document.querySelector('#reloj');
    reloj.innerHTML = time;
}

setInterval(currentTime, 1000);