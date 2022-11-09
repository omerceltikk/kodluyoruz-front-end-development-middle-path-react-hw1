import {useState} from 'react'
import List from './list'
import Footer from './footer'
import Context from './input'
import './styles.css'
const initialState = [
  { todo: "Learn React", done: false },
  { todo: "Have a Life", done: false },
  { todo: "Learn JavaScript", done: true }
]

function Container() {
    const [contacts, setContacts] = useState(initialState)

    const handleComplete = i => {
      const mapped = contacts.map((item,index) => index === i ? {...item, done: !item.done} : {...item})
      setContacts(mapped)
    }
    const handleCompleteCount = () => {
      return contacts.filter(item => item.done === false).length
    }
    const [status, setStatus] = useState("all")

    const handleStatus = (type) => {
      if(type === "active"){
        setStatus("active")
      }else if(type === "completed"){
        setStatus("completed")
      }else{
        setStatus("all")
      }
    }
    const handleClear = () => {
      const clear = contacts.filter(item => item.done !== true)
      setContacts(clear)
    }

    const removeItem = (i) => {
      const clear = contacts.filter((item,idx)=> idx!== i)
      setContacts(clear)
    }
  return (
    <div className='container'>
        <Context addContact={setContacts} contacts={contacts} />
        <List contacts={contacts} handleComplete={handleComplete} status={status} removeItem={removeItem} />
        <Footer contacts={contacts} itemCount={handleCompleteCount} handleStatus={handleStatus} handleClear={handleClear} />
    </div>
  )
}
export default Container