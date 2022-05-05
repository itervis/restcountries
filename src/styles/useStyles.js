import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles({

  styledAppBar: {
    boxShadow:'0 2px 6px rgba(29, 0, 62, 0.07)',
    backgroundColor: '#E4FFE4'
  },

  styledToolBar:{
    padding: '0 70px 0 20px',
    backgroundColor: '#E4FFE4'
  },

  paginationToolBar:{
    backgroundColor: '#E4FFE4',
    padding: '1% 30%'
  },

  btn: {
    fontSize: '16px',
    textTransform:'none',
    color:'#FFFFFF',
    backgroundColor: '#92FE97', 
    borderRadius: '8px 8px 8px 8px',
    
    margin: '15px',
    height: '35px',
    width:'150px',
    '&:hover': {
      backgroundColor:'#6ADB6D',
      boxShadow: '0 1px 4px #6ADB6D' 
    }
  },

  btnMobile: {
    fontSize: '16px',
    textTransform:'none',
    color:'#FFFFFF',
    backgroundColor: '#92FE97', 
    borderRadius: '4px ',
    margin: '10px',
    height: '35px',
    width:'175px',
    '&:hover': {
      backgroundColor:'#6ADB6D',
      boxShadow: '0 1px 4px #6ADB6D' 
    }
  },

  mobileToolBar:{
    minHeight:'70px',
    padding: '0 27px 0 29px',
    backgroundColor: '#E4FFE4'
  },

  mobileMenuBtn: {
    height:'50px',
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: '#FFFFFF'
    }      
    
  },

  menuSelectBlock:{
    marginLeft: 'auto'
  },

  styledInputBase:{
    color: 'inherit',
    width: '250px',
    backgroundColor: '#f2f2f2',
    borderRadius: '8px 8px 8px 8px',
    margin: '15px 45px',
    padding: '0 25px'
  },

  styledList: {
    backgroundColor: '#E4FFE4'
  },

  styledFormControl:{
    width: '250px',
    margin: '15px'
  },

  styledFormControlMobile:{
    width: '175px',
    margin: '10px'
  },

  box:{
    width: '100%',
    backgroundColor: '#CDFECF',
    paddingLeft: '20px'
  },

  styledLink:{
    color: '#BEBEBE',
    '&:hover': {
      fontSize: '26px',
      fontWeight: 'bold',
      
    },
   
  }

})
  