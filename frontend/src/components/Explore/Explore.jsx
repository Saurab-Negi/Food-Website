import './Explore.css'
import { menu_list } from '../../assets/assets'

const Explore = ({category, setCategory}) => {
  return (
    <div className='explore flex flex-col gap-8 mx-16' id='explore'>
      
      <h1 className='text-6xl text-[#262626] font-semibold'>Explore our menu</h1>
      <p className='explore-text max-w-[60%] text-[#808080]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, corporis? Nemo doloremque vero provident maxime repellat placeat, nesciunt excepturi fugiat accusantium? Alias nemo laboriosam iure atque maiores quas quia rerum!</p>
      <div className="explore-list flex justify-between items-center text-center gap-8 my-7 overflow-x-scroll">
        {
            menu_list.map((item, i) =>{
                return(
                    <div onClick={() =>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} key={i} className="explore-list-item flex flex-col gap-4">
                        <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
        }
      </div>
      <hr className='mb-8 mx-20 h-1 bg-[#e2e2e2]' />

    </div>
  )
}

export default Explore
