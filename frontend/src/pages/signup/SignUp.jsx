import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";


const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmpassword:'',
    gender:''
  });

  const { loading ,  signup } = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className = "h-full w-96 bg-green-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-0 bg-opacity-5 border-0 border-gray-100 shadow-3xl">
      <h1 className='text-4xl font-semibold text-center text-white-300'>SignUp
      <span className='text-green-700'> ChatApp</span>
      </h1>
      
    <form onSubmit={handleSubmit}>
      <div>   
          <label className='label p-2'>
            <span className='text-base label-text'>Full Name</span>
          </label>
          <input type='text' placeholder='Shambhu' className='w-full input input-bordered h-10'
          value={inputs.fullName}
          onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}          
          />
        </div>


        <div>   
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input type='text' placeholder='shambhuyadav_' className='w-full input input-bordered h-10'
          value={inputs.username}
          onChange={(e)=>setInputs({...inputs, username:e.target.value})}
          />
        </div>

        <div>
          <label className='label'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input type='password' placeholder='Enter Password' className='w-full input input-bordered'
          value={inputs.password}
          onChange={(e)=> setInputs({...inputs, password: e.target.value})}
          />
        </div>

        <div>
          <label className='label'>
            <span className='text-base label-text'>Confirm Password</span>
          </label>
          <input type='password' placeholder='Confirm Password' className='w-full input input-bordered'
          value={inputs.confirmPassword}
          onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
          />
        </div>

        <GenderCheckbox onCheckboxChange ={handleCheckboxChange} selectedGender={inputs.gender}/>

        <Link to='/login' className='text-sm hover:underline hover:text-green-700 mt-4 inline-block'>
         Already have an account?
        </Link>

        <div>
          <button className='btn btn-block btn-sm  hover:text-green-700 mt-4'
          disabled={loading}
          >
            {loading ? <span className="loading loading-spinner"></span>:"Sign Up"}
          </button>

        </div>

      </form>
    </div>
  </div>
  )
};

export default SignUp;



//STARTER CODE
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className = "h-full w-96 bg-green-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-0 bg-opacity-5 border-0 border-gray-100 shadow-3xl">
//       <h1 className='text-4xl font-semibold text-center text-white-300'>SignUp
//       <span className='text-green-700'> ChatApp</span>
//       </h1>
//       <form>

//       <div>   
//           <label className='label p-2'>
//             <span className='text-base label-text'>Full Name</span>
//           </label>
//           <input type='text' placeholder='Shambhu' className='w-full input input-bordered h-10'/>
//         </div>


//         <div>   
//           <label className='label p-2'>
//             <span className='text-base label-text'>Username</span>
//           </label>
//           <input type='text' placeholder='shambhuyadav_' className='w-full input input-bordered h-10'/>
//         </div>

//         <div>
//           <label className='label'>
//             <span className='text-base label-text'>Password</span>
//           </label>
//           <input type='password' placeholder='Enter Password' className='w-full input input-bordered'/>
//         </div>

//         <div>
//           <label className='label'>
//             <span className='text-base label-text'>Confirm Password</span>
//           </label>
//           <input type='password' placeholder='Confirm Password' className='w-full input input-bordered'/>
//         </div>

//         <GenderCheckbox/>

//         <a href='#' className='text-sm hover:underline hover:text-green-700 mt-4 inline-block'>
//          Already have an account?
//         </a>

//         <div>
//           <button className='btn btn-block btn-sm  hover:text-green-700 mt-4'>Signup</button>

//         </div>

//       </form>
//     </div>
//   </div>
//   )
// };

// export default SignUp;
