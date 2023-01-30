import React from 'react'
import { FaPlus} from 'react-icons/fa'

function AddComment({newComment, setNewComment, handleSubmit}) {

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='addComment'>Add Comment</label>
        <textarea name="addComment" id="addComment" cols="30" rows="10" placeholder="Add Comment Here..." value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
        <button type="submit" aria-label="Add Comment">
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddComment
