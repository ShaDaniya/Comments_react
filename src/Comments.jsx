import './App.css'
import Comment from './Comment'
import AddComment from './AddComment'
import React, { useEffect, useState } from 'react'

export const Comments = () => {

  const [comment, setComment] = useState([])
  const [newComment, setNewComment] = useState('')

  const handleSumbitNewComment = (e) => {
    e.preventDefault()
    if (!newComment) return
    addComment(newComment)
    setNewComment('')
  }

  const addComment = (nextComment) => {
    const id = comment.length ? comment[comment.length - 1].id + 1 : 1
    const addedComment = { id: id, text: nextComment}
    comment.push(addedComment)
    localStorage.setItem('comments list', JSON.stringify(comment))
  }

useEffect(() => {
  setComment(JSON.parse(localStorage.getItem('comments list')))
}, [])

  return (
    <main>
      <AddComment 
      newComment={newComment}
      setNewComment={setNewComment}
      handleSubmit={handleSumbitNewComment}/>
      <ul>
        {comment.map((item) => (
        <Comment name={item.text} key={item.id.toString()} className={comment[comment.length - 1] ? "red" : "green"}/>))
        }
        </ul>
    </main>
  )
}
