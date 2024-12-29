import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Button from './Button'

import { useTask } from '../../store/hooks'



export function AddTaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const {createTask} = useTask()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() && description.trim()) {
      setTitle('')
      setDescription('')
      createTask(title, description)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la tarea"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción de la tarea"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400 h-24 resize-none"
        />
      </div>
      <Button type={'submit'} width={'100%'}>Añadir tarea</Button>
    </form>
  )
}

interface ITask {
  _id: string,
  title: string,
  description: string,
  status: boolean
}

export function EditTaskForm({task}: {task: ITask}) {

  const {id} = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)

  const {updateTaskInfo} = useTask()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() && description.trim() && id) {
      console.log('Entro al if');
      setTitle('');
      setDescription('');
      updateTaskInfo(id, title, description);
      navigate('/')
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la tarea a editar"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción de la tarea a editar"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400 h-24 resize-none"
        />
      </div>
      {/* <Link to={'/'}></Link> */}
      <Button type={'edit'} width={'100%'}>Editar tarea</Button>
    </form>
  )
}