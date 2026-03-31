import React from 'react'
import { useAuthStore } from "../Store/useAuthStore"
import BorderAnimatedContainer from '../components/BorderAnimatecontainer';
import ProfileHeader from '../components/ProfileHeader';
import ActiveTabSwitch from '../components/ActiveTabSwitch';
import ChatContainer from "../components/ChatContainer"
import NoConverstaionPlaceholder from '../components/NoConverstaionPlaceholder';
import Chatslist from '../components/Chatslist';
import { useChatStore } from '../Store/useChatStore';
import ContactList from "../components/contactList"


function Chatpage() {
  const { logout} = useAuthStore() ;
  const {activeTab , selectedUser} = useChatStore();


// Add this temporarily just to debug
console.log("selectedUser:", selectedUser);


  return (
    <div className='relative w-full max-w-6xl h-[800px]'>
      
      <BorderAnimatedContainer>
        <div className='w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col'  
         >
        
        <ProfileHeader/>

        <ActiveTabSwitch /> 
        <div className='flex-1 overflow-y-auto p-4 space-y-2'>
            {activeTab === "chats"? <Chatslist/> : <ContactList/>}
        </div>
</div>

<div className='flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm'>{
  selectedUser ?<ChatContainer/> : <NoConverstaionPlaceholder/>

}</div>



      </BorderAnimatedContainer>
    </div>
  )
}

export default Chatpage
