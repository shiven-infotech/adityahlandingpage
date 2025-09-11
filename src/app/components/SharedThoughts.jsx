import React from 'react'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux";
import { CreateSharedThoughts } from '../../../Redux/Api/LandingPageFormsApi';
import { useEffect, useState } from "react";


const SharedThoughts = () => {
    const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      comment: "",
      // rating: 5,
      mobileNo: "",
      reference:"blogs"
    });

    const dispatch = useDispatch()
    
      const handleChange = (e) =>{
        setFormData((prev)=>({
          ...prev,
          [e.target.name]: e.target.value,
        }))
      }
    
      const handleSubmit = async(e) => {
    
        e.preventDefault();
        if (formData.mobileNo.length !== 10) {
              toast.error("Mobile number should be 10 digits");
              return;
            }
        
            console.log("Form submitted:", formData);
            await dispatch(CreateSharedThoughts(formData))
            setFormData({
            firstname: "",
            lastname: "",
            mobileNo: "",
            city: "",
            query: "",
            comment:"",
            rating: 5,
            reference:"blogs"
            })
            toast.success("Form submitted successfully");
    
      }
  return (
    <section
  className="bg-[#e3ffe0] py-8 px-6"
  data-aos="fade-up"
>
  <h3 className="text-2xl font-bold text-center text-green-700 mb-6">
    Leave a Comment
  </h3>

  <form
    onSubmit={(e) => {
      e.preventDefault();
      alert("Your comment has been submitted!");
    }}
    className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg shadow-lg p-6"
  >
    {/* First Name */}
    <div>
      <label className="block mb-1 font-medium text-gray-700">
        First Name
      </label>
      <input
        type="text"
        placeholder="Enter your first name"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        required
        name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
      />
    </div>

    {/* Last Name */}
    <div>
      <label className="block mb-1 font-medium text-gray-700">
        Last Name
      </label>
      <input
        type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}        
        placeholder="Enter your last name"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />
    </div>

    {/* Mobile Number */}
    <div className="md:col-span-2">
      <label className="block mb-1 font-medium text-gray-700">
        Mobile Number
      </label>
      <input
        type="tel"
                            name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
        placeholder="Enter your mobile number"
        pattern="[0-9]{10}"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />
    </div>

    {/* Comment */}
    <div className="md:col-span-2">
      <label className="block mb-1 font-medium text-gray-700">
        Comment
      </label>
      <textarea
        placeholder="Write your comment..."
        rows="4"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        required
                      value={formData.comment}
              name="comment"
              onChange={handleChange}
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="md:col-span-2 flex justify-center">
      <button
        onClick={handleSubmit}

        type="submit"
        className="bg-green-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-800 transition duration-300"
      >
        Submit
      </button>
    </div>
  </form>
</section>
  )
}

export default SharedThoughts