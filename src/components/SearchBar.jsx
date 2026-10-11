import React from 'react'
import { Search, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SearchBar() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/category/${search.toLowerCase()}`)
    }
    // const cat="zain"
    return (
        <div className='mt-10 w-full max-w-3xl'>
            <form onSubmit={handleSubmit} className='relative overflow-hidden rounded-full'>
                <Search
                    size={20}
                    className='absolute left-5 top-1/2 z-30 -translate-y-1/2 text-white/70'
                />

                <input

                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                    value={search}
                    type='text'
                    placeholder='Search for nature, people, architecture...'
                    className='w-full rounded-full border border-white/20 bg-white/10 py-4 px-14 text-sm text-white backdrop-blur-md shadow-xl placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:text-base'
                />
                <button type='submit'>
                    <ArrowRight
                        size={20}
                        className='absolute h-full hover:bg-white/20 px-3 w-12 bg-white/10 right-0 top-1/2 z-30 -translate-y-1/2 text-white/70'
                    />
                </button>
            </form>
        </div>
    )
}

export default SearchBar
