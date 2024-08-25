import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username,setUsername]=useState("");
  const [password, setPassword]=useState("");

  const {loading,login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password)
  }


  return (
  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className = "h-full w-96 bg-green-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-0 bg-opacity-5 border-0 border-gray-100 ">
      <h1 className='text-4xl font-semibold text-center text-white-300'>Login
      <span className='text-green-700'> ChatApp</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>   
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input type='text' 
          placeholder='Enter username' 
          className='w-full input input-bordered h-10'
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className='label'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input type='password'
           placeholder='Enter Password' 
           className='w-full input input-bordered'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <Link to='/signup' className='text-sm hover:underline hover:text-green-700 mt-4 inline-block'>
         {"Don't"} have an account?
        </Link>

        <div>
          <button className='btn btn-block btn-sm  hover:text-green-700 mt-4'
             disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span>:"Login"}
            </button>
            

        </div>

      </form>
    </div>
  </div>
  );
};

export default Login;

//STARTER CODE FOR THIS FILE

// const Login = () => {
//   return (
//   <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className = "h-full w-96 bg-green-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-0 bg-opacity-5 border-0 border-gray-100 ">
//       <h1 className='text-4xl font-semibold text-center text-white-300'>Login
//       <span className='text-green-700'> ChatApp</span>
//       </h1>
//       <form>
//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'>Username</span>
//           </label>
//           <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'/>
//         </div>

//         <div>
//           <label className='label'>
//             <span className='text-base label-text'>Password</span>
//           </label>
//           <input type='password' placeholder='Enter Password' className='w-full input input-bordered'/>
//         </div>
//         <a href='#' className='text-sm hover:underline hover:text-green-700 mt-4 inline-block'>
//          {"Don't"} have an account?
//         </a>

//         <div>
//           <button className='btn btn-block btn-sm  hover:text-green-700 mt-4'>Login</button>

//         </div>

//       </form>
//     </div>
//   </div>
//   );
// };

// export default Login;
