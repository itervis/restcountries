import React, { useState, useEffect } from 'react'
import * as ROUTES from '../constants/routes'

function CountryList() {
    const [countries, setCountries] = useState([]);   

    useEffect(()=>{   
        async function getCountries() {
            const resp = await fetch(`${ROUTES.API_HTTP}`)
            const countries = await resp.json()
            setCountries(countries)
        }
        getCountries()    
    }, [])


  return (
    <div>
        {countries.map((country) =>{
            const { name, region, area } = country
            return <div key={name}> 
                <p>{name}, {region}, {area}</p>
            </div>
        })}
    </div>
  )
}

export default CountryList