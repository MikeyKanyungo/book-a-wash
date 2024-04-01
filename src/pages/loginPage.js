import './loginPage.css';

export const loginPage = () => {
  return (
    <div className="flex flex-col min-h-screen main">
      <div className='header'>
        <h1 className="text-6xl font-bold mb-4 text-black">book a wash </h1>
        <h6 className="text-sm mb-6">
          <p className='text-black text-2xl font-bold'>we're glad you are here.</p>
          <p className='text-black text-2xl font-bold'>Log in to continue.</p>
        </h6>
      </div>

      <div className='form'>
        <form>

          <div className="mb-4">
            
            <input type="text" id="emailPhone" name="emailPhone" placeholder='someone@something.com' className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            
            <input type="password" id="password" name="password" placeholder='**********' className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-2 leading-tight" />
            <label htmlFor="rememberMe" className="text-sm">Remember me</label>
            <a href="/forgot-password" className="text-blue-500 text-sm absolute right-4">Forgot password?</a>
          </div>

          <div className="mb-4">
            <button type="submit" className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log In</button>
          </div>
          
          <br></br>
          <div className="mb-4">
            <p className="text-sm text-center">Or log in with:</p>
            <div className="flex">
              <a href="#" className="bg-yellow-300 text-white font-bold py-2 px-4 rounded mr-2">Google</a>
              <a href="#" className="bg-yellow-300 text-white font-bold py-2 px-4 rounded absolute right-4">Facebook</a>
            </div>
          </div>

        </form>

        <div className="mt-4">
          <p className="text-sm">Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default loginPage();