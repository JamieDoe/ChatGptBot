import '../index.css'
import ChatInput from '../components/ChatInput';

export default function ResponseWindow() {
  return (
    <div className='response-window-wrapper'>
      <h1>
        <ChatInput/>
      </h1>
    </div>
  )
}