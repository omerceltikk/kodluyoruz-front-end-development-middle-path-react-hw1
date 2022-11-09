import { useState } from 'react'

function Context({addContact, contacts}) {
  const [form,setForm] = useState();

  const onChangeInput = (e) => (
    setForm(e.target.value) 
  )
  // const handleSumbit = (e) => {
  //   e.preventDefault();
  //   setForm(((prevState) => [
  //     ...prevState, {todo: form , done: false}
  //   ]))

  // }
  const keyPress = (e) => {
    if(form.todo === ""){
      return false
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      addContact((prevState) => [
      ...prevState, {todo: form , done: false}
    ])
    }
  }
  
  return (
    <div>
      
      <input className='mainInput' placeholder="what needs to be done?" onChange={onChangeInput} onKeyDown={keyPress} />
      
    </div>
  )
}

export default Context