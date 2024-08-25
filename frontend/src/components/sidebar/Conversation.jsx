const Conversation = () => {
  return (
    <>
      <div className="flex gap-4 items-center hover:bg-green-700 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://api.dicebear.com/8.x/lorelei/svg" alt="user avatar"/>
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-2 justify-between">
                <p className="font-bold text-violet-100">Maira Shetty</p>
                <span className="text-xl">🎃</span>
            </div>
        </div>
      </div>


      <div className="divider my-0 py-0 h-1"></div>
    </>
  )
};

export default Conversation;



//STARTER CODE 
// const Conversation = () => {
//     return (
//       <>
//         <div className="flex gap-2 items-center hover:bg-green-700 rounded p-2 py-1 cursor-pointer">
//           <div className="avatar online">
//               <div className="w-12 rounded-full">
//                   <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar"/>
//               </div>
//           </div>
//           <div className="flex flex-col flex-1">
//               <div className="flex gap-3 justify-between">
//                   <p className="font-bold text-violet-100">Hetal Maheshwari</p>
//                   <span className="text-xl">🎃</span>
//               </div>
//           </div>
//         </div>
  
  
//         <div className="divider my-0 py-0 h-1"></div>
//       </>
//     )
//   };
  
//   export default Conversation;
  
