import React, { useState } from 'react';
import RegisterModal from './components/RegisterModal';
import LoginModal from './components/LoginModal';


function App() {
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <div className='overflow-hidden relative'>
      <div className='homepage h-screen'>
     <div className="flex justify-between gap-96 mb-[700px]">
     <a onClick={() => setRegisterOpen(true)} href="#_" className="relative  items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
<span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
<span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
<span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
</span>
<span className="relative text-white">Button Text</span>
</a>

<a onClick={() => setLoginOpen(true)} href="#_" className="relative  items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
<span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
<span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
<span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
</span>
<span className="relative text-white">Button Text</span>
</a>
     </div>
        {/* ------------------------------ */}
      
      </div>
      {isRegisterOpen && <RegisterModal onClose={() => setRegisterOpen(false)} />}
      {isLoginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </div>
  );
}

export default App;
