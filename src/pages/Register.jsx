
import { Link } from 'react-router';

const Register = () => {
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
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="confirm password" className="input input-bordered" required />
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Register</button>
        </div>
      <p className='my-4 text-sm font-light'>Allready Have an account? Please <Link to={"/login"}className='text-primary'>Login Now</Link></p>
      </form>
      
    </div>
  </div>
</div>
  )
}

export default Register
