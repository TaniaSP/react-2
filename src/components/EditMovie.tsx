import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import CheckList from './CheckList'
import PropTypes from 'prop-types'
import { MovieResponse } from '../models/interfaces'
import { useAddMovieMutation, useEditMovieMutation } from '../services/moviesService'

export default function EditMovie ({ movie, isEdit, onClose }: { movie: MovieResponse, isEdit: boolean, onClose: Function }): JSX.Element {
  const [addMovieCall, { error, isSuccess }] = useAddMovieMutation()
  const [editMovieCall, { error: errorEdit, isSuccess: isSuccessEdit }] = useEditMovieMutation()
  const [updateErrors, setUpdateErrors] = useState<string[]>([])
  const formatDate = (date: Date): string => {
    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset * 60 * 1000))
    return date.toISOString().split('T')[0]
  }
  const clearForm = {
    title: '', poster_path: '', release_date: formatDate(new Date()), vote_average: 0, runtime: 0, overview: '', genres: []
  }

  const { title, poster_path, release_date, vote_average, runtime, overview, genres } = movie // eslint-disable-line @typescript-eslint/naming-convention
  const initialValues = { title, poster_path, release_date, vote_average, runtime, overview, genres } // eslint-disable-line @typescript-eslint/naming-convention

  useEffect(() => {
    if (isSuccess || isSuccessEdit) {
      onClose()
    }
  }, [onClose, isSuccess, isSuccessEdit])

  useEffect(() => {
    let errorMessages: { messages: string[] } = { messages: [] }
    if (error !== undefined && 'data' in error) {
      errorMessages = error.data as any
    }
    if (errorEdit !== undefined && 'data' in errorEdit) {
      errorMessages = errorEdit.data as any
    }
    setUpdateErrors(errorMessages.messages)
  }, [error, errorEdit])

  return (
    <div className='overlay'>
      <div className='edit-movie-box modal'>
        <button className='close' onClick={() => onClose()}>x</button>
        <h2>{isEdit ? 'Edit' : 'Add'} Movie</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            (isEdit) ? await editMovieCall({ id: movie.id, ...values }) : await addMovieCall(values)
          }}>
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            resetForm
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='layout'>
                <div className="top-errors">
                  {updateErrors.length > 0 && <div>
                    <ul>{updateErrors.map((x: string, i: number) => <li key={i}>{x}</li>)}</ul>
                  </div>}
                </div>
                <div className="left">
                  <label>
                    Title:
                    <input onChange={handleChange} onBlur={handleBlur} value={values.title} type="text" name="title" placeholder='Select Title' />
                  </label>
                  <label>
                    Movie URL:
                    <input onChange={handleChange} onBlur={handleBlur} value={values.poster_path} type="text" name="poster_path" placeholder='https://' />
                  </label>
                  <span>
                    Genre:
                    <CheckList onSelected={(vals: string[]) => setFieldValue('genres', vals)} value={values.genres} />
                  </span>
                </div>
                <div className='right'>
                  <label>
                    Release Date:
                    <input onChange={(e) => setFieldValue('release_date', e.target.value)} onBlur={handleBlur} value={values.release_date} type="date" name="release_date" />
                  </label>
                  <label>
                    Rating:
                    <input onChange={handleChange} onBlur={handleBlur} value={values.vote_average} type="number" name="vote_average" placeholder='7.8' />
                  </label>
                  <label>
                    Runtime:
                    <input onChange={handleChange} onBlur={handleBlur} value={values.runtime} type="number" name="runtime" placeholder='minutes' />
                  </label>
                </div>
                <div className='bottom'><label>
                  Overview:
                  <textarea onChange={handleChange} onBlur={handleBlur} value={values.overview} rows={5} name="overview" placeholder='Movie description'></textarea>
                </label>
                </div>
              </div>
              <div className="modal-buttons">
                <button type="reset" onClick={() => resetForm({
                  values: clearForm
                })}>Reset</button>
                <button type="submit" className='confirm'>Submit</button>
              </div>
            </form>)}
        </Formik>
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
