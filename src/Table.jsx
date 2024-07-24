import React from 'react'
import styles from './Homepage.module.css'

function Table({data}) {
  return (
    <div>
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {data.map((item) => (
                    <>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                
                    </>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table
