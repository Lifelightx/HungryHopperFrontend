import React, { useContext, useState } from 'react';
import { StoreContext } from '../Contex';

function Order() {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(formData); // Uncomment this line to handle form submission
    console.log(formData); // For testing purposes
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-8">
      <div className="w-full lg:w-1/2 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Delivery Information</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 flex flex-col sm:flex-row gap-2">
            <div className="w-full">
              <label htmlFor="firstName" className="block text-gray-700 text-sm mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastName" className="block text-gray-700 text-sm mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="street" className="block text-gray-700 text-sm mb-2">Street Address</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4 flex flex-col sm:flex-row gap-2">
            <div className="w-full">
              <label htmlFor="city" className="block text-gray-700 text-sm mb-2">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="state" className="block text-gray-700 text-sm mb-2">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>

          <div className="mb-4 flex flex-col sm:flex-row gap-2">
            <div className="w-full">
              <label htmlFor="postalCode" className="block text-gray-700 text-sm mb-2">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="phone" className="block text-gray-700 text-sm mb-2">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Update Address
          </button>
        </form>
      </div>

      <div className="w-full lg:w-1/2 max-w-md mx-auto bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Payment Information</h1>
        <div className="border p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold">Cart Totals</h2>
          <hr />
          <div className="flex justify-between my-3">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <p>Delivery Fee</p>
            <p>$3</p>
          </div>
          <hr />
          <div className="flex justify-between my-4">
            <b>Total:</b>
            <b>${getTotalCartAmount() ? getTotalCartAmount() + 3 : 0}</b>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center ps-4 border border-orange-400 rounded">
            <input
              id="cod"
              type="radio"
              value="cod"
              name="paymentMethod"
              className="w-4 h-4"
            />
            <label htmlFor="cod" className="w-full py-4 ms-2 text-sm text-orange-500 font-medium cursor-pointer">
              COD
            </label>
          </div>
          <div className="flex items-center ps-4 border border-orange-400 rounded">
            <input
              id="card"
              type="radio"
              value="card"
              name="paymentMethod"
              className="w-4 h-4"
            />
            <label htmlFor="card" className="w-full py-4 ms-2 text-sm text-orange-500 font-medium cursor-pointer">
              <i className="fa fa-credit-card"></i> Card (Debit/Credit)
            </label>
          </div>
        </div>

        <div className="mt-5">
          <button
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
