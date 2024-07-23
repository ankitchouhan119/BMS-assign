import React from 'react';

const Thankyou = () => {
  return (
    <>
    <div class="flex items-center justify-center h-screen">
    <div class="p-4 rounded w-[80vw] lg:w-[30vw] text-center shadow-lg ring ring-orange-500">
        <div class="flex flex-col items-center space-y-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 class="text-4xl font-bold mb-6">Thank You !</h1>
            <p className='mb-5'>Thank you for your interest! Check your email for a link to the guide.</p>
            <a
                class="inline-flex items-center px-4 py-2 text-white bg-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 focus:outline-none focus:ring">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <a class="text-sm font-medium" href='/'>
                    Home
                </a>
            </a>
        </div>
    </div>
</div>
    </>
  )
};

export default Thankyou;
