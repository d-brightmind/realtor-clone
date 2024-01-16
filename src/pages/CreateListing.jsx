import React, { useState } from 'react'

export default function CreateListing() {
    const [formData, setFormData] = useState({
        type: 'rent',
        name: '',
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address: '',
        description: '',
        offer: false,
        regularPrice: 0,
        discountedPrice: 0,
    });
    const { 
        type, 
        name, 
        bedrooms, 
        bathrooms, 
        parking, 
        furnished, 
        address, 
        description, 
        offer, 
        regularPrice, 
        discountedPrice,
    } = formData;
    function onChange(e) {
        let boolean = null;
        if(e.target.value === "true") {
            boolean = true;
        }
        if(e.target.value === "false") {
            boolean = false;
        }
        if(e.target.files) {
            setFormData((prevState)=>({
                ...prevState,
                images: e.target.files,
            }));
        }
        if(!e.target.files) {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.id]: boolean ?? e.target.value,
            }));
        }
    }
  return (
    <main className='max-w-md mx-auto px-2'>
        <h1 className='text-3xl font-bold mt-6 text-center'>Create Listing</h1>
        <form>
            <p className='text-lg font-semibold mt-6'>Sell / Rent</p>
            <div className="flex">
                <button type="submit" className={`w-full mr-3 px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg transition ease-in-out duration-200 active:shadow-lg ${type === "rent" ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} id='type' value="sale" onClick={onChange}>
                    sell
                </button>
                <button type="submit" className={`w-full ml-3 px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg transition ease-in-out duration-200 active:shadow-lg ${type === "sale" ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} id='type' value="rent" onClick={onChange}>
                    rent
                </button>
            </div>
            <p className='text-lg font-semibold mt-6'>Name</p>
            <input type="text" id="name" value={name} onChange={onChange} placeholder='Name' minLength={10} maxLength={30} required className='w-full py-2 px-4 text-xl text-gray-700 mb-6 border border-slate-300 focus:bg-white bg-white rounded transition ease-in-out duration-200 focus:border-slate-600'/>
            <div className="flex space-x-6">
                <div className="">
                    <p className='text-lg font-semibold'>Beds</p>
                    <input type="number" id="bedrooms" value={bedrooms} onChange={onChange} min='1' max='50' className='w-full py-2 px-4 text-xl text-gray-700 mb-6 border border-slate-300 focus:bg-white bg-white rounded transition ease-in-out duration-200 focus:border-slate-600'/>
                </div>
                <div className="">
                    <p className='text-lg font-semibold'>Baths</p>
                    <input type="number" id="bathrooms" value={bathrooms} required onChange={onChange} min='1' max='50' className='w-full py-2 px-4 text-xl text-gray-700 mb-6 border border-slate-300 focus:bg-white bg-white rounded transition ease-in-out duration-200 focus:border-slate-600'/>
                </div>
            </div>
            <p className='text-lg font-semibold'>Parking Slot</p>
            <div className="flex">
                <button type="submit" className={`w-full mr-3 px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg transition ease-in-out duration-200 active:shadow-lg ${!parking ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} id='parking' value={true} onClick={onChange}>
                    yes
                </button>
                <button type="submit" className={`w-full ml-3 px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg transition ease-in-out duration-200 active:shadow-lg ${parking ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} id='parking' value={false} onClick={onChange}>
                    no
                </button>
            </div>
            <p className='text-lg font-semibold mt-6'>Furnished?</p>
            <div className="flex">
                <button type="submit" className={`w-full mr-3 px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg transition ease-in-out duration-200 active:shadow-lg ${!furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} id='furnished' value={true} onClick={onChange}>
                    yes
                </button>
                <button type="submit" className={`w-full ml-3 px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg transition ease-in-out duration-200 active:shadow-lg ${furnished ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} id='furnished' value={false} onClick={onChange}>
                    no
                </button>
            </div>
            <p className='text-lg font-semibold mt-6'>Address</p>
            <textarea type="text" id="address" value={address} required onChange={onChange} placeholder='Address' className='w-full py-2 px-4 text-xl text-gray-700 mb-6 border border-slate-300 focus:bg-white bg-white rounded transition ease-in-out duration-200 focus:border-slate-600'/>
            <p className='text-lg font-semibold'>Description</p>
            <textarea type="text" id="description" value={description} required onChange={onChange} placeholder='Description' className='w-full py-2 px-4 text-xl text-gray-700 mb-6 border border-slate-300 focus:bg-white bg-white rounded transition ease-in-out duration-200 focus:border-slate-600'/>
            <p className='text-lg font-semibold'>Offer</p>
            <div className="flex">
                <button type="submit" className={`w-full mr-3 px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg transition ease-in-out duration-200 active:shadow-lg ${!offer ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} id='offer' value={true} onClick={onChange}>
                    yes
                </button>
                <button type="submit" className={`w-full ml-3 px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg transition ease-in-out duration-200 active:shadow-lg ${offer ? 'bg-white text-black' : 'bg-slate-600 text-white'}`} id='furnished' value={false} onClick={onChange}>
                    no
                </button>
            </div>
            <div className="">
                <div className="">
                    <p className='text-lg font-semibold mt-6'>Regular Price</p>
                    <div className="flex space-x-6 justify-center items-center w-full mb-6">
                        <input type="number" id="regularPrice" value={regularPrice} onChange={onChange} min='50' max='500000000' className='w-full py-2 px-4 text-xl text-gray-700 border border-slate-300 text-center focus:bg-white bg-white rounded transition ease-in-out duration-200 focus:border-slate-600'/>
                        {type === 'rent' && (
                            <p className='w-full'>$ / Month</p>
                        )}
                    </div>
                </div>
            </div>
            {offer && (
            <div className="">
                <div className="">
                    <p className='text-lg font-semibold mt-6'>Discounted Price</p>
                    <div className="flex space-x-6 justify-center items-center w-full mb-6">
                        <input type="number" id="discountedPrice" value={discountedPrice} onChange={onChange} min='50' max='500000000' className='w-full py-2 px-4 text-xl text-gray-700 border border-slate-300 text-center focus:bg-white bg-white rounded transition ease-in-out duration-200 focus:border-slate-600'/>
                        {type === 'rent' && (
                            <p className='w-full'>$ / Month</p>
                        )}
                    </div>
                </div>
            </div>
            )}
            <div className="mb-6">
                <p className='text-lg font-semibold'>Images</p>
                <p className='text-gray-600'>
                    The first image will be the cover (6)
                </p>
                <input type="file" id="images" onChange={onChange} accept='.jpg,.jpeg,.png' multiple required className='w-full px-3 py-1.5 border border-gray-300 transition ease-in-out duration-200 focus:bg-white focus:border-slate-600 text-gray-700' />
            </div>
            <button type="submit" className='mb-6 w-full py-3 px-7 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition ease-in-out duration-200 uppercase shadow-md font-medium text-sm focus:shadow-lg active:shadow-lg focus:bg-blue-800 hover:shadow-lg text-white rounded'>Create listing</button>
        </form>
    </main>
  )
}
