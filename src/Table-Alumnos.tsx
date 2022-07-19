
import { Alumno } from "./interfaces";
import {
  AlumnosTable,
  TableHead,
  HeadCeld,
  TableBody,
  TableRow,
  Title,
  Button,
  BodyCeld,
} from "./Styles";

const TableAlumnos = (props: { datosAlumno: [Alumno], eliminarAlumno:(alumnoId:number) => void, editarAlumno:(alumnoId:number, alumnoName:string, alumnoCorreo:string, alumnoCalificacion:number) => void} ) => {

    const alumnosAprobados = props.datosAlumno.filter((cont) => cont.calificacion > 5);
    const alumnosReprobados = props.datosAlumno.filter((cont) => cont.calificacion < 6);
    
  return (
    <AlumnosTable>
      <Title>Todos los alumnos</Title>
      <TableHead>
        <HeadCeld>
          <h4>Id</h4>
        </HeadCeld>
        <HeadCeld>
          <h4>Nombre</h4>
        </HeadCeld>
        <HeadCeld>
          <h4>Correo</h4>
        </HeadCeld>
        <HeadCeld>
          <h4>Calificación</h4>
        </HeadCeld>
      </TableHead>
      <TableBody>
        {alumnosAprobados.map((alumno, index:number) => (
            <TableRow key={index}>
                <BodyCeld >{alumno.id}</BodyCeld>
                <BodyCeld >{alumno.name}</BodyCeld>
                <BodyCeld >{alumno.email}</BodyCeld>
                <BodyCeld color="#3EC70B"> {alumno.calificacion} </BodyCeld>
                <BodyCeld >Aprobado</BodyCeld>
                <BodyCeld ><Button onClick={() => {props.editarAlumno(alumno.id, alumno.name, alumno.email, alumno.calificacion)}}>Editar</Button></BodyCeld>
                <BodyCeld ><Button onClick={() => {props.eliminarAlumno(alumno.id)}}>Eliminar</Button></BodyCeld>
            </TableRow>
            ))}
        {alumnosReprobados.map((alumno, index:number) => (
            <TableRow key={index}>
                <BodyCeld >{alumno.id}</BodyCeld>
                <BodyCeld >{alumno.name}</BodyCeld>
                <BodyCeld >{alumno.email}</BodyCeld>
                <BodyCeld color="#D61C4E">{alumno.calificacion}</BodyCeld>
                <BodyCeld >Reprobado</BodyCeld>
                <BodyCeld ><Button onClick={() => {props.editarAlumno(alumno.id, alumno.name, alumno.email, alumno.calificacion)}}>Editar</Button></BodyCeld>
                <BodyCeld ><Button onClick={() => {props.eliminarAlumno(alumno.id)}}>Eliminar</Button></BodyCeld>
            </TableRow>
            ))}
      </TableBody>
    </AlumnosTable>
  );
};

export default TableAlumnos;

//