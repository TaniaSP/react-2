import React from 'react'

export default function DeleteMvoie ({ onConfirm, onClose }: { onConfirm: Function, onClose: Function }): JSX.Element {
  return (
        <div className='overlay'>
            <div className='delete-movie-box modal'>
                <button className='close' onClick={() => onClose()}>x</button>
                <h2>Delete Movie</h2>
                <p>Are you sure you want to delete this movie?</p>
                <div className="modal-buttons">
                    <button className='confirm' onClick={() => onConfirm()}>Confirm</button>
                </div>
            </div>
        </div>
  )
}
