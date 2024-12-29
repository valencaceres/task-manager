import React from 'react'
import { PlusCircle, Edit, Delete, CheckCircle, LogIn, UserPlus, XCircle, ArrowLeft} from 'lucide-react'

const Button = ({children, type, width, height, onClick, status}: any) => {
  if(type === 'submit'){
    return (
        <button
        type="submit"
        style={{width, height}}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 rounded-md hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
        onClick={onClick}
      >
        <PlusCircle className="mr-2" />
        {children}
      </button>
    )
  }
  if(type === 'back'){
    return (
        <button
        type="submit"
        style={{width, height}}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 rounded-md hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center absolute top-10 left-5"
      >
        <ArrowLeft/>
      </button>
    )
  }
  if(type === 'login'){
    return (
        <button
        type="submit"
        style={{width, height}}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 rounded-md hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
        onClick={onClick}
      >
        <LogIn className="mr-2" />
        {children}
      </button>
    )
  }
  if(type === 'signup'){
    return (
        <button
        type="submit"
        style={{width, height}}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 rounded-md hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
      >
        <UserPlus className="mr-2" />
        {children}
      </button>
    )
  }
  if(type === 'edit'){
    return (
        <button
        type="submit"
        style={{width, height}}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 rounded-md hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
      >
        <Edit/>
      </button>
    )
  }
  if(type === 'delete'){
    return (
        <button
        type="submit"
        style={{width, height}}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 rounded-md hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
        onClick={onClick}
      >
        <Delete/>
      </button>
    )
  }
  if(type === 'check'){
    return (
        <button
        type="submit"
        style={{width, height}}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 rounded-md hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
        onClick={onClick}
      >
        {status ? (
          <XCircle/>
        ):
        (
          <CheckCircle/>
        )}
      </button>
    )
  }
}

export default Button