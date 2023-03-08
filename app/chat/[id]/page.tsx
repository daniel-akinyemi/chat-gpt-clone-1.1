import Chat from "components/Chat"
import ChatInput from "components/ChatInput"

type Props = {
  params:{
    id:string
  }
}

const Chatpage = ({params: {id}} : Props) => {


  return (

    <div className="flex flex-col h-screen overflow-hidden">
      {/* Chat window */}
      <Chat chatId={id}/>
      <ChatInput chatId={id} />
      {/* Chat Input */}
    </div>
  )
}

export default Chatpage