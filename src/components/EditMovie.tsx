import React, { useState } from 'react'
import CheckList from './CheckList'
import PropTypes from 'prop-types'
import { MovieResponse } from '../models/interfaces'

export default function EditMovie ({ movie, isEdit, onSubmit, onClose }: { movie: MovieResponse, isEdit: boolean, onSubmit: Function, onClose: Function }): JSX.Element {
  const [editMovie, setEditMovie] = useState({
    name: movie.title,
    description: ''
  })
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const name = event.target.name
    setEditMovie({
      ...editMovie,
      [name]: event.target.value
    })
  }
  return (
        <div className='overlay'>
            <div className='edit-movie-box modal'>
                <button className='close' onClick={() => onClose()}>x</button>
                <h2>{isEdit ? 'Edit' : 'Add'} Movie</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='layout'>

                        <div className="left">
                            <label>
                                Name:
                                <input value={editMovie.name} onChange={(e) => handleChange(e)} type="text" name="name" placeholder='Select Name' />
                            </label>
                            <label>
                                Movie URL:
                                <input type="text" name="url" placeholder='https://' />
                            </label>
                            <span>
                                Genre:
                                <CheckList />
                            </span>
                        </div>
                        <div className='right'>
                            <label>
                                Release Date:
                                <input type="date" name="release" />

                            </label>
                            <label>
                                Rating:
                                <input type="number" name="rating" placeholder='7.8' />
                            </label>
                            <label>
                                Runtime:
                                <input type="number" name="runtime" placeholder='minutes' />
                            </label>
                        </div>
                        <div className='bottom'><label>
                            Overview:
                            <textarea rows={5} placeholder='Movie description'></textarea>
                        </label>
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button type="reset" onClick={() => onSubmit()}>Reset</button>
                        <button type="submit" className='confirm' onClick={() => onSubmit()}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

EditMovie.defaultProps = {
  isEdit: false
}
EditMovie.propTypes = {
  isEdit: PropTypes.bool, movie: PropTypes.object
}
