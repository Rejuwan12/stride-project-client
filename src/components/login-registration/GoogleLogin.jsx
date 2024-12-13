
import { useNavigate } from 'react-router';
import useAuth from './../../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";



const GoogleLogin = () => {
    const {GoogleLogin} = useAuth();
    const navigate = useNavigate();

    
    const handleGoogleLogin =()=>{
        GoogleLogin().then(()=>{
            navigate('/');    
        });
               
         }
  return (
    <div>
      <div className='divider'>
             OR
      </div>
      <div>
        <button className='w-full btn btn-primary btn-outline' onClick={handleGoogleLogin}> 
            <FcGoogle size={24} />Google</button>
      </div>
    </div>
  )
}

export default GoogleLogin
