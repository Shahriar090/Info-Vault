import SearchBar from './SearchBar'

export default function Navbar({docs}) {
  return (
    <nav className='w-full h-20 bg-purple-500 px-6 flex items-center justify-between'>
      {/* Logo */}
      <div className="text-white text-xl font-bold">
        Info Vault
      </div>

      {/* Search Bar */}
      <div className="flex-1 px-6">
        <SearchBar docs={docs}/>
      </div>

      {/* Navigation Items */}
      <div className="">
        <ul className='flex items-center gap-6 text-white font-medium'>
          <li>Docs</li>
          <li>About Us</li>
          <li>Latest</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  )
}
