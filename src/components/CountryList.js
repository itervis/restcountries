import React, { useState, useEffect } from 'react'
import * as ROUTES from '../constants/routes'

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const [searchBox, setSearchBox] = useState('') 
    const [regionOption, setRegionOption] = useState('')
    const [sizeSelection, setSizeSelection] = useState('')

  
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
        const selectedRegion = e.target.value.toLocaleLowerCase()
        setRegionOption(selectedRegion)
    }
    
    const onSizeChange = (e) => {
         const selectedSize = e.target.value
         setSizeSelection(selectedSize)
    }


    let listOfRegions = [...new Map([...countries].map((item) => [item['region']]))].flat().filter((element) => {
        return element !== undefined;
    });
      
    useEffect(()=>{   
        async function getCountries() {
            const resp = await fetch(`${ROUTES.API_HTTP}`)
            const countries = await resp.json()
            setCountries(countries)                                   
        }
        getCountries()    
    }, [])
    
    
    useEffect(() => {    
        const searchedCountries = countries.filter((country) => {
        return country.name.toLocaleLowerCase().includes(searchBox)
    })
        setFilteredCountries(searchedCountries)
        
    }, [countries, searchBox])
    
    useEffect(() => {    
        const filteredByRegion = countries.filter((country) => {
        return country.region.toLocaleLowerCase().includes(regionOption)
    })
    setFilteredCountries(filteredByRegion)          
    }, [regionOption])

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
    

    
  return (
    <div>
        <div>
        <input 
            className='search-box' 
            type='search'
            placeholder='Search Country'
            onChange={onSearchChange}
        />
        <button onClick={onDescendingSort}>
            Desc
        </button>
        <button onClick={onAscendingSort}>
            Asc
        </button>
       <select value={''} onChange={onRegionChange}>
            <option value='' disabled={true}>--Sort by Region--</option>
            {listOfRegions.map((region, index) => 
                <option key={index}>{region}</option>
            )}
        
        </select>
        <select value={''} onChange={onSizeChange}>
            <option value='' disabled={true}>--Sort by Size--</option>
            <option value='smallCountries'>Small</option>
            <option value='largeCountries'>Large</option>        
        </select>
        </div>
           {filteredCountries.length === 0 ? (<h1> Sorry, no countries found ... </h1>): filteredCountries.map((country) =>{
            const { name, region, area } = country
            return <div key={name}> 
                <p>{name}, {region}, {area}</p>
            </div>
        })}
        

    </div>
  )
}

export default CountryList