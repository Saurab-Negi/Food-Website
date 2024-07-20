import './Order.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Order = () => {

  const { getTotalCartAmt}= useContext(StoreContext);

  return (
    <form className='order flex flex-col items-start justify-between m-6 sm:flex-row sm:m-16 sm:gap-12 md:gap-20 lg:gap-40'>
      
      <div className="order-left w-full my-6 sm:m-0">
        <p className='title font-semibold text-xl mb-6 sm:mb-16 sm:text-2xl lg:text-3xl'>Delivery Informaton</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <textarea className='p-2 text-sm md:text-base' type="text" placeholder='Address' rows="3" />
        <input type="number" placeholder='Contact No' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='Postal Code' />          
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='State' />
          <input type="text" placeholder='Country' />
        </div>        
      </div>
      <div className="order-right w-full sm:w-3/4">
      <div className="cart-total flex flex-1 flex-col mb-8 gap-12">
          <h2 className='font-semibold text-xl sm:text-2xl lg:text-3xl'>Cart Total</h2>
          <div className="">
          <div className="card-total-details">
              <p>Subtotal</p>
              <p>&#8377; {getTotalCartAmt()}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>Delivery Fee</p>
              <p>&#8377; {getTotalCartAmt()===0 ? 0 : 30}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <b>Total</b>
              <p>&#8377; {getTotalCartAmt()===0 ? 0 : getTotalCartAmt()+30}</p>
            </div>
          </div>
          <button className='text-white bg-[tomato] rounded-xl py-3 '>Proceed To Payment</button>
        </div>
      </div>

    </form>
  )
}

export default Order
