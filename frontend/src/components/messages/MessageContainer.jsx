import Messages from './Messages.jsx';
import MessageInput from './MessageInput.jsx';
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = true ;
  return (
    <div className='md:min-w-[450px] flex-col'>
      {noChatSelected ?(
        <NoChatSelected/>
      ):(
        <>
          {/*Header*/}
          <div className='bg-green-700  px-4 py-2 mb-2'>
          <span className='text-white-900 font-normal hover:font-bold'>  Shambhu</span>
          </div>
          <Messages/>  
        </>    
        )}
    </div>
  )
}

export default MessageContainer;

const NoChatSelected = () => {
  return(
   <div className="flex items-center justify-center w-full h-full">
    <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
      <p>Welcome👋 Shambhu</p>
      <p>Select a chat to start messaging</p>
      <TiMessages className='text-3xl md:text-6xl text-center'/>
    </div>
   </div>
  );
}
