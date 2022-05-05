import React,{ useEffect, useState } from 'react'
import './App.css';
import * as ROUTES from './constants/routes'
import CountryList from './components/CountryList';
import FilterMenu from './components/FilterMenu';
import { ThemeProvider} from '@material-ui/core'
import { theme } from './styles/theme';
import Pagination from './components/Pagination';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{   
    async function getCountries() {
        const resp = await fetch(`${ROUTES.API_HTTP}`)
        const countries = await resp.json()
        setCountries(countries)                                   
    }
    getCountries()    
  }, [])

  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [searchBox, setSearchBox] = useState('') 
  const [regionSelection, setRegionSelection] = useState('')
  const [sizeSelection, setSizeSelection] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(25)


  const onDescendingSort = () => {
      const reverseCountries =[...countries].sort((a, b) => b.name.localeCompare(a.name))
      setFilteredCountries(reverseCountries)
  }
  const onAscendingSort = () => {
      const reverseCountries =[...countries].sort((a, b) => a.name.localeCompare(b.name))
      setFilteredCountries(reverseCountries)
  }

  const onSearchChange = (e) => {
      const searchString = e.target.value.toLocaleLowerCase()
      setSearchBox(searchString)
  }

  const onRegionChange = (e) => {
      const selectedRegion = e.target.value
      setRegionSelection(selectedRegion)
  }
  
  const onSizeChange = (e) => {
       const selectedSize = e.target.value
       setSizeSelection(selectedSize)
  }


  let listOfRegions = [...new Map([...countries].map((item) => [item['region']]))].flat().filter((element) => {
      return element !== undefined;
  });
  
  useEffect(() => {    
      const searchedCountries = countries.filter((country) => {
      return country.name.toLocaleLowerCase().includes(searchBox)
  })
      setFilteredCountries(searchedCountries)
      
  }, [countries, searchBox])
  
  useEffect(() => {    
      const filteredByRegion = countries.filter((country) => {
      return country.region.includes(regionSelection)
  })
  setFilteredCountries(filteredByRegion)          
  }, [regionSelection])

  useEffect(() => {
      const filterLithuania = countries.filter((country)=>{
          return country.name.toLocaleLowerCase().includes('lithuania')
      })

      const areaOfLithuania = filterLithuania.map((item)=> [item['area']]).flat()[0]

      if('largeCountries' === sizeSelection){
          const bigCountries = countries.filter(are => are.area > areaOfLithuania)
          setFilteredCountries(bigCountries)
     
      } else if('smallCountries' === sizeSelection) {
          const smallCountries = countries.filter(are => are.area < areaOfLithuania)
          setFilteredCountries(smallCountries)
      }
  }, [sizeSelection])

  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <ThemeProvider theme={theme}>
      <FilterMenu 
        onSearchChange={onSearchChange} 
        onDescendingSort={onDescendingSort}
        onAscendingSort={onAscendingSort}
        onRegionChange={onRegionChange}
        listOfRegions={listOfRegions}
        onSizeChange={onSizeChange}
        regionSelection={regionSelection}
        sizeSelection={sizeSelection}
      />
      <CountryList 
        filteredCountries={currentCountries} 
      />
      <Pagination 
        countriesPerPage={countriesPerPage}
        totalCountries={filteredCountries.length}
        paginate={paginate}
      />
  
    </ThemeProvider>      
  )
}

export default App
