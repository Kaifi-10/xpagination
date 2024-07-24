import React from 'react'
import styles from './Homepage.module.css'

function Pagination({ currentPage, itemsPerPage, totalItems, paginate }) {

    const totalPages = Math.ceil(totalItems / itemsPerPage)
    
    const nextPage = () =>{
        if(currentPage < totalPages){
            paginate(currentPage + 1)
        }
    }

    const prevPage = () =>{
        if(currentPage > 1){
            paginate(currentPage - 1)
        }
    }

    
  return (
    <div className={styles.pagination}>
        <button onClick={prevPage}>Previous</button>
        <div className={styles.page}>{currentPage}</div>
        <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default Pagination