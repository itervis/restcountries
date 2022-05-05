import React from 'react'
import { List, ListItem, ListItemText, Box, Divider } from '@material-ui/core'
import { useStyles } from '../styles/useStyles'

const CountryList = ({filteredCountries}) => {
    const classes = useStyles()
    
    
    
  return (
    <List className={classes.styledList}>
    {filteredCountries.length === 0 ? (<h1> Sorry, no countries found ... </h1>): filteredCountries.map((country) =>{
        const { name, region, area } = country
        return (
        <ListItem key={name}>
            <Box className={classes.box}>
            <ListItemText primary={name} secondary={`Region: ${region}`}/>
            <ListItemText secondary={`Area: ${area} sq.km`}/>

            <Divider light variant='fullWidth' />
            </Box>
            
        </ListItem>
        )}

    )}        
    </List>
  )
}

export default CountryList