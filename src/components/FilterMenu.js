import React, { useState } from 'react'
import { AppBar, Toolbar, Button, Hidden, FormControl, InputLabel, Select, MenuItem, InputBase, SwipeableDrawer, Divider } from '@material-ui/core'
import { useStyles } from '../styles/useStyles'

const FilterMenu = ({onSearchChange, onDescendingSort, onAscendingSort, onRegionChange, listOfRegions, regionSelection, sizeSelection, onSizeChange}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky' className={classes.styledAppBar} elevation={0}>
      <Hidden mdDown>
      <InputBase className={classes.styledInputBase} 
        placeholder="Search Country…"
        onChange={onSearchChange}
      />
      <Toolbar className={classes.styledToolBar}>
         <Button className={classes.btn} onClick={onDescendingSort}>DESC</Button>
        <Button className={classes.btn} onClick={onAscendingSort}>ASC</Button>
        
        <div className={classes.menuSelectBlock}>
                     
        <FormControl variant='outlined' className={classes.styledFormControl} size='small'>
          <InputLabel  >--Sort by Region--</InputLabel>
          <Select value={regionSelection} label="--Sort by Region--" onChange={onRegionChange}>
            {listOfRegions.map((region, index) => 
              <MenuItem value={region} key={index}>{region}</MenuItem>
            )}
          </Select>
        </FormControl>
        
        <FormControl variant='outlined' className={classes.styledFormControl} size='small'>
          <InputLabel  >--Sort by Sizen--</InputLabel>
          <Select value={sizeSelection} label="--Sort by Size--" onChange={onSizeChange}>
            <MenuItem value='smallCountries'>Small</MenuItem>
            <MenuItem value='largeCountries'>Large</MenuItem>
          </Select>
        </FormControl>
        </div>
              
          </Toolbar>
      </Hidden>
      <Hidden lgUp>
        <Toolbar className={classes.toolBarMobile}>
          <InputBase className={classes.styledInputBase} 
          placeholder="Search Country…"
          onChange={onSearchChange}
          />
          <Button className={classes.mobileMenuBtn} onClick={() => setOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </Button>
          </Toolbar>                      
      </Hidden>
      <SwipeableDrawer anchor='right' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <Button className={classes.mobileMenuBtn} onClick={() => setOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </Button>
        <Divider />
        <Button className={classes.btnMobile} onClick={onDescendingSort}>Desc</Button>
        <Button className={classes.btnMobile} onClick={onAscendingSort}>Asc</Button>
        <FormControl variant='outlined' className={classes.styledFormControlMobile} size='small'>
        <InputLabel  >--Sort by Region--</InputLabel>
        <Select value={regionSelection} label="--Sort by Region--" onChange={onRegionChange}>
          {listOfRegions.map((region, index) => 
            <MenuItem value={region} key={index}>{region}</MenuItem>
          )}
        </Select>
        </FormControl>
        
        <FormControl variant='outlined' className={classes.styledFormControlMobile} size='small'>
          <InputLabel  >--Sort by Sizen--</InputLabel>
          <Select value={sizeSelection} label="--Sort by Size--" onChange={onSizeChange}>
            <MenuItem value='smallCountries'>Small</MenuItem>
            <MenuItem value='largeCountries'>Large</MenuItem>
          </Select>
        </FormControl>
      </SwipeableDrawer>
    </AppBar>
  )
}

export default FilterMenu