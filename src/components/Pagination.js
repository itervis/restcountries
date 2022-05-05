import React from 'react'
import { Toolbar, ListItem, Link} from '@material-ui/core'
import { useStyles } from '../styles/useStyles'

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
    const classes = useStyles()
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
      }
  
  
    return (
    <Toolbar className={classes.paginationToolBar}>        
        {pageNumbers.map(number => (
            <ListItem key={number}>
                <Link onClick={() => paginate(number)} href='!#' className={classes.styledLink}>
                {number}
                </Link>
          
            </ListItem>
        ))}
    </Toolbar>
  )
}

export default Pagination