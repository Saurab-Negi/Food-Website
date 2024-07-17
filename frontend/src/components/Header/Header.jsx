import './Header.css'
import {assets} from '../../assets/assets'

const Header = () => {
  return (
    <div className='header m-16 shadow-custom'>
        
        <div className="header-content">
            <h2 className='text-6xl font-bold text-white'>Order your favourite food here</h2>
            <p className='text-white text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est reiciendis temporibus nisi similique maiores dolores quam? Id saepe eveniet, assumenda quo, ut earum officiis sint expedita beatae harum praesentium dolor!</p>
            <button className='border-none px-5 py-3 bg-white text-[#747474] text-base font-medium rounded-3xl shadow-customBtn'>View Menu</button>
        </div>

    </div>
  )
}

export default Header
