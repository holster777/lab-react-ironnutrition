import React, {useState} from 'react'
import { Input } from 'antd';



function SearchBar(props) {

    const [search, setSearch] = useState('')

    const handleChange = (e) => {

        setSearch(e.target.value)
        props.search(e.target.value)

    }

  return (
    <form>
        <Input type="text" value={search} onChange={handleChange}/>
    </form>
  )
}

export default SearchBar