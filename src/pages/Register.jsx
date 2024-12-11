

import { Link } from 'react-router';
import useAuth from './../hooks/useAuth';
import { useForm } from 'react-hook-form';


const Register = () => {
  
  const {CreateUser} = useAuth();
  // eslint-disable-next-line no-unused-vars
  const {register,handleSubmit,watch,formState:{errors},} = useForm()
  const onSub =(data)=>{
    CreateUser(data.email, data.password);
  };
  return (
    <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
      <form onSubmit={handleSubmit(onSub)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {
            ...register('email', {required:true})
          } />
          {errors.email && <p className='text-sm font-light text-red-500'>Email is Required</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {
            ...register('password', {required:true, minLength:6,})
          } />
          {errors.password?.type === "required" && ( <p className='text-sm font-light text-red-500'>Password is Required</p>)}
          {errors.password?.type === "minLength" && <p className='text-sm font-light text-red-500'>Password must have at 6 characters</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="confirm password" className="input input-bordered" {
            ...register('confirmPassword', {required:true, validate:(value)=>{
              if(watch('password') != value){
                return "Your Password Do not match!"
              }
            }})
          } />
          {errors.confirmPassword && (<p className='text-sm font-light text-red-500'>Both Password Must Match</p>)}
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary" type='submit'>Register</button>
        </div>
      <p className='my-4 text-sm font-light'>Allready Have an account? Please <Link to={"/login"}className='text-primary'>Login Now</Link></p>
      </form>
      
    </div>
  </div>
</div>
  )
}

export default Register
