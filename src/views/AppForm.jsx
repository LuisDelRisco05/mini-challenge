import { useForm } from "react-hook-form"
import { useRequestApi } from "../hooks/useRequestApi";


export const AppForm = () => {


  const { register, formState:{ errors }, handleSubmit } = useForm();

  const { postPeopleApi } = useRequestApi()

  const onSubmit = (data) => {
    console.log(data);
    postPeopleApi(data);
  }

  return (

    <div className="vh-100">
      <form onSubmit={ handleSubmit( onSubmit ) } className="w-50 mx-auto pt-4 mt-5 rounded bg-primary ">
          <h1 className="text-center">Form</h1>
          <div className="mx-3">
              <label htmlFor="exampleName" className="form-label mt-4">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleName"
                {...register('name', { required: true})}
              />
              {errors.name?.type === 'required' && <div class="alert alert-danger p-1 mt-1 text-center"> Name required </div> }
          </div>

          <div className="mx-3">
              <label htmlFor="exampleNumber" className="form-label mt-4">Age</label>
              <input 
                type="number" 
                className="form-control" 
                id="exampleNumber" 
                {...register('age', { required: true})}
              />
              {errors.age?.type === 'required' && <div class="alert alert-danger p-1 mt-1 text-center"> Age required </div> }
          </div>

          <div className="mx-3">
              <label htmlFor="exampleCareer" className="form-label mt-4">Career</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleCareer" 
                {...register('career', { required: true})}
              />
              {errors.career?.type === 'required' && <div class="alert alert-danger p-1 mt-1 text-center"> Career required </div> }
          </div>

          <div className="mx-3">
              <label htmlFor="exampleHobbie" className="form-label mt-4">Hobbie</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleHobbie" 
                {...register('hobbie', { required: true})}
              />
              {errors.hobbie?.type === 'required' && <div class="alert alert-danger p-1 mt-1 text-center"> Hobbie required </div> }
          </div>

          <div className="mx-3 mt-2">
            <button 
              type="submit" 
              className="btn btn-success bg-gradient my-4 w-100"
            >Submit</button>
          </div>

          
      </form>
    </div>
  )
}   
