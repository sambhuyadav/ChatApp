import React from 'react';

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img
                alt='Tailwind CSS chat bubble component'
                src={'https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/364166184_299048215818187_7896173802520820519_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGS0DWXZwiZ0vr8K7ZgQZ3DrbdISBAG2natt0hIEAbadmSXEXiY6loCLUvXUxUrg2AyLb04aZPTJG4U1ttiWL-W&_nc_ohc=SOEKXevOXY8Q7kNvgGjjVDv&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYBzYiwgLVvRJ3C0UcYtqQ5A3Z0to-S91jeBuZiShftY7A&oe=66577FE6'
                 }
                />
            </div>
        </div>
        <div className={'chat-bubble text-white bg-green-700'}>Hi! What is up?</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>7:00</div>
    </div>
  );
}

export default Message;
