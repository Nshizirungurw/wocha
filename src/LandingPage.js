import './App.css';

function LandingPage() {
  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-500 to-pink-400">
      <div className='langing-text'>
        <h1 className='text-7xl text-white text-center font-bold'>Welcome to WOCHA</h1>
        <p className='text-center text-white pt-10 text-xl'>Connect,Collaborate,Communicate</p>
      </div>
      <div className='flex justify-center pt-9 m-4'>
        <button className='w-40 h-10 bg-white rounded-full text-blue-700 font-bold'>Get started</button>
        <button className='w-40 h-10 border-solid border-2 ml-3 border-white rounded-full text-white font-bold'>Learn more</button>
      </div>
      <div className='w-full flex justify-center'>
        <div className='p-10 h-30 w-auto bg-slate-300 rounded-md m-5 bg-opacity-20'>
          <h2 className='text-center text-white font-bold'>Connect</h2>
          <p className='text-white'>Experiance seamless connect with WOCHA'S intuitive platiform</p>
        </div>
        <div className='p-10 h-30 w-auto bg-slate-300 rounded-md m-5 bg-opacity-20'>
          <h2 className='text-center text-white font-bold'>Collaborate</h2>
          <p className='text-white'>Experiance seamless collaborate with WOCHA'S intuitive platiform</p>
        </div>
        <div className='p-10 h-30 w-auto bg-slate-300 rounded-md m-5 bg-opacity-20'>
          <h2 className='text-center text-white font-bold'>Communicate</h2>
          <p className='text-white'>Experiance seamless communicate with WOCHA'S intuitive platiform</p>
        </div>
        
      </div>
      <div className='text-2'>
        <h2 className='text-center text-white pt-10 text-xl'>Ready to transform your communication</h2>
      </div>
      <div className='join flex justify-center m-5'>
        <button className=' p-2 pr-10 pl-10 bg-white rounded-full  text-blue-700 font-bold'>Join WOCHA today</button>
      </div>
    </div>
  );
}

export default LandingPage;
