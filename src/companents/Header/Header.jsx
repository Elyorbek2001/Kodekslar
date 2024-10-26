import React from 'react'

const Header = () => {

    return (
        <>
            <div className='flex justify-between p-4 pl-14 pr-14  items-center bg-white-800 min-h-28'>
                <div>
                    <h1 className='text-2xl font-bold'>Kodeks24.uz</h1>
                    <p>Yuridik adabiyotlar</p>
                </div>
                <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4'>
                    <li><a href="">Bosh sahifa</a></li>
                    <li><a href="">Onlayn dokon</a></li>
                    <li><a href="">Biz haqimizda</a></li>
                    <li><a href="">Aloqa</a></li>
                </ul>
                <div>
                    <div class="relative inline-block">

                        <div class="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                            0
                        </div>


                        <span class="ml-4 text-gray-600">0 so'm</span>
                    </div>

                </div>
            </div>
        </>


    )
}

export default Header
