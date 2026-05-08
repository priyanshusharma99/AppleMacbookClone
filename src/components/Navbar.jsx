import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple Logo" />
            <ul>
                {[
                    {label: 'store'},
                    {label: 'mac'},
                    {label: 'iPhone'},
                    {label: 'watch'},
                    {label: 'vision'},
                    {label: 'airpods'},
                ].map((item, index) => (
                    <li key={index}><a href={`/${item.label.toLowerCase()}`}>{item.label}</a></li>
                ))}
            </ul>
            <div className='flex-center gap-3'>
                <button>
                    <img src="/search.svg" alt="search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
