import React, { useState } from 'react'
import { links } from './Mylinks'

const SearchBar = ({ changeVisibility, isVisible }) => {
    const list = require("./searchList.json")
    function runAnalysis(links) {
        const list = []
        links.map(link => {
            if (link.submenu) {
                list.push(...runAnalysis(link.sublinks))
            }
            else {
                list.push({ "name": link.name, "link": link.link })
            }
        })
        return list
    }
    function find(value) {
        const searchValue = new RegExp(value, "ig")
        return runAnalysis(links).filter(link => searchValue.test(link.name))
    }
    const [results, setResults] = useState(list)


    return (
        <div className='flex justify-center items-center flex-col pb-4  bg-white'>
            <input type="text" placeholder="Search" className="searchBar px-4 py-2 " onInput={(e) => {
                setResults(find(e.target.value))
                changeVisibility(true)
                if (e.target.value === "") changeVisibility(false)
            }} />
            <div className={`${isVisible ? "flex" : "hidden"} z-50 flex-col w-[80%] overflow-y-auto items-center max-h-96 rounded-2xl`}>
                {results.map(value => (
                    <a href={value.link} className="normal-case p-2 border-b-2 bg-gray-200 border-black/10 w-full" >{value.name}</a>
                ))}
            </div>
        </div >
    )
}

export default SearchBar