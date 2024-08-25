import React from 'react';
import SearchInput from './SearchInput.jsx';
import Conversations from './Conversations.jsx';
import LogoutButton from './LogoutButton.jsx';

const Sidebar = () => {
  return (
    <div className='border-r border-violet-100 flex-col'>

      <SearchInput/>
      <div className='divider px-3'></div>
      <Conversations/>
      <LogoutButton/>

    </div>
  )
}

export default Sidebar;



//STARTER CODE 
// import React from 'react';
// import SearchInput from './SearchInput.jsx';
// import Conversations from './Conversations.jsx';
// import LogoutButton from './LogoutButton.jsx';

// const Sidebar = () => {
//   return (
//     <div className='border-r border-violet-100 flex-col'>

//       <SearchInput/>
//       <div className='divider px-3'></div>
//       <Conversations/>
//       <LogoutButton/>

//     </div>
//   )
// }

// export default Sidebar;

