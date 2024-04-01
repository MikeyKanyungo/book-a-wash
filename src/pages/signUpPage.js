import React from 'react';
import './signUpPage.css';

export const signUpPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='header'>
        <h1 className="text-6xl font-bold mb-4 text-black">Sign Up</h1>
        <h6 className="text-sm mb-6">
          <p className='text-black text-2xl font-bold'>Create an account to get started.</p>
        </h6>
      </div>

      <div className='form'>
        <form>

          <div className="mb-4">
            
            <input type="text" id="fullName" name="fullName" placeholder='John Doe' className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            
            <input type="email" id="email" name="email" placeholder='someone@something.com' className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            
            <input type="tel" id="phone" name="phone" placeholder='123-456-7890' className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            
            <input type="password" id="password" name="password" placeholder='**********' className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder='**********' className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <button type="submit" className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
          </div>

        </form>

        <div className="mb-4">
          <p className="text-sm">Already have an account? <a href="/login" className="text-blue-500">Log in</a></p>
        </div>
      </div>
    </div>
  );
}

export default signUpPage();