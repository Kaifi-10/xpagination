import React, { useEffect, useState } from 'react'
import Table from './Table'
import Pagination from './Pagination'
import styles from './Homepage.module.css'
import axios from 'axios'

function HomePage() {

    const URL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10 // Number of items per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL)
                setData(response.data)
                console.log("data", response.data);
            } catch (error) {
                alert('failed to fetch data');
            }
        }
        fetchData()
    }, [])

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage)

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

    return (
        <div>
            <h1 className={styles.heading}>Employee Data Table</h1>
            <Table data={currentItems}/>
            <Pagination 
                currentPage={currentPage} 
                itemsPerPage={itemsPerPage} 
                totalItems={data.length} 
                paginate={(pageNumber) => setCurrentPage(pageNumber)} 
            />
    </div>
  )
}

export default HomePage
