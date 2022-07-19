import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alumno } from "./interfaces";
import { Form, Input, Title, Button } from "./Styles";
import TableAlumnos from "./Table-Alumnos";

const FormAlumnno = () => {
  // -> Creamos nuestro hook con la estrucutra de una hook.
  /**
   * register: es el primer elemento del hook, nos ayudar a registar el valor de los diferentes campos del formulario, es decir va a registrar 
   un campo con determiado nombre
   * handleSubmit: es la accion del sumbit del formulario. Nos ayuda a gestionar el submit de nuestro formulario
   * errors: nos ayuda a controlar los errores de nuestro fomulario.
   * 
   -> Ejemplo
   <form>
    <div>
      <label >Nombre</label>
      <input type="text" {...register('nombre', {
        required: true,
        maxLength: 10
      })} />
      {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
      {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
    </div>
    <div>
      <label >Email</label>
      <input type="text" {...register('email', {
        pattern: <expresion-regular>
      })} />
      {errors.email?.type === 'pattern' && <p>El email es incorrecto</p>}
    </div>
   </form>
   
    */
  const data = {
    id: undefined,
    name: "",
    email: "",
    calificacion: undefined,
  };

  const { handleSubmit, reset, register,errors } = useForm<Alumno>({});

  const [datosAlumno, setdatosAlumno] = useState<any>([]);

  
  const editarAlumno = (alumnoId: number, alumnoName: string, alumnoCorreo: string, alumnoCalificacion: number) => {

    const objetodeTabla = {
      id: alumnoId,
      name: alumnoName,
      email: alumnoCorreo,
      calificacion: alumnoCalificacion,
    }
    debugger
      reset({...objetodeTabla});
      console.log('funciona', objetodeTabla);
  };

  const eliminarAlumno = (alumnoId: number) => {
    setdatosAlumno(datosAlumno.filter((alumno: any) => alumno.id !== alumnoId));
  };

  const guardarDatos = async (values: any) => {
    let json = {
      id: values.id,
      name: values.name,
      email: values.email,
      calificacion: values.calificacion,
    };
    if (
      !datosAlumno.some(
        (alumno: {
          id: number;
          name: string;
          email: string;
          calificacion: number;
        }) => alumno.id === json.id
      )
    ) {
      setdatosAlumno([...datosAlumno, json]);
      reset({ ...data });
    } else {
      alert("El alumno ya existe");
    }
  };
  console.log(datosAlumno);
  return (
    <>
      <Form onSubmit={handleSubmit(guardarDatos)}>
        <Title>Ingresa los datos del alumno</Title>
        <Input
          name={`id`}
          placeholder="Id del alumno"
          ref={register({
            required: { value: true, message: "Campo Obligatorio" },
          })}
        />
        <span>{errors?.id?.message}</span>
        <Input
          type="text"
          placeholder="Nombre del alumno"
          name={`name`}
          ref={register({
            required: { value: true, message: "Campo Obligatorio" },
          })}
        />
        <Input
          type="email"
          placeholder="Correo del alumno"
          name={`email`}
          ref={register({
            required: { value: true, message: "Campo Obligatorio" },
          })}
        />
        <Input
          type="text"
          placeholder="Calificacion del alumno"
          id="calificacion"
          name={`calificacion`}
          ref={register({
            required: { value: true, message: "Campo Obligatorio" },
          })}
        />
        <Button type="submit">Guardar</Button>
      </Form>
      <TableAlumnos
        datosAlumno={datosAlumno}
        eliminarAlumno={(alumnoId: number) => {
          eliminarAlumno(alumnoId);
        }}
        editarAlumno={(
          alumnoId: number,
          alumnoName: string,
          alumnoCorreo: string,
          alumnoCalificacion: number
        ) => {
          editarAlumno(alumnoId, alumnoName, alumnoCorreo, alumnoCalificacion);
        }}
      />
    </>
  );
};

export default FormAlumnno;

//dispach es un ejecutador.

//react hook form , ref,register, watch, useform, control, reset , defaultvalues, errors, message
