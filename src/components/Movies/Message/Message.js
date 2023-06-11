import './Message.css';

function Message({message, src, ...props}) {
  return (
    <section className='message' aria-label='message'>
      <div className='message__container'>
        <img className='message__image' src={src} alt="icon" />
        <p className='message__paragraph'>
          {message}
        </p>
      </div>
    </section>
  )
}

export default Message;
