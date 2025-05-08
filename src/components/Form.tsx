//import { FormEvent, useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
function Form() {
  const Schema = z.object({
    name: z.string().min(3, { message: 'name must be at least 3 characters' }),
    age: z
      .number({ invalid_type_error: 'Age field is required' })
      .min(18, { message: 'Age must be at least 18' }),
  });

  type formData = z.infer<typeof Schema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(Schema) });
  const onSubmit = (data: FieldValues) => console.log(data);

  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const Person = {
  //   name: '',
  //   age: 0,
  // };
  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault();
  //   console.log(Person);
  //   // if (nameRef.current !== null) Person.name = nameRef.current.value;
  //   // if (ageRef.current !== null) Person.age = parseInt(ageRef.current.value);
  // }

  // const [Person, setPerson] = useState({
  //   name: '',
  //   age: 0,
  // });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        <input
          {...register('name')}
          // onChange={(event) =>
          //   setPerson({ ...Person, name: event.target.value })
          // }
          id="name"
          type="text"
          //value={Person.name}
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:
        </label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        <input
          {...register('age', { valueAsNumber: true })}
          // onChange={(event) => {
          //   setPerson({ ...Person, age: parseInt(event.target.value) });
          // }}
          id="age"
          type="number"
          //value={Person.age}
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
