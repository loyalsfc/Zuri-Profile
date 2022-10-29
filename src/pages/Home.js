import picture from '../assets/prifile_picture.png'

function Home(){
    return(
        <div className="container mx-auto px-4 pb-8 pt-16 relative">
            <header className='flex items-center flex-col'>
                <div className='h-10 w-10 rounded-full border border-dashed border-[#D0D5DD] flex items-center justify-center absolute top-11 right-4'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99998 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53975 10.4602 9.16666 9.99998 9.16666C9.53974 9.16666 9.16665 9.53975 9.16665 9.99999C9.16665 10.4602 9.53974 10.8333 9.99998 10.8333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.8333 10.8333C16.2935 10.8333 16.6666 10.4602 16.6666 9.99999C16.6666 9.53975 16.2935 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53975 15 9.99999C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.16665 10.8333C4.62688 10.8333 4.99998 10.4602 4.99998 9.99999C4.99998 9.53975 4.62688 9.16666 4.16665 9.16666C3.70641 9.16666 3.33331 9.53975 3.33331 9.99999C3.33331 10.4602 3.70641 10.8333 4.16665 10.8333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="h-[5.5rem] w-[5.5rem] rounded-full overflow-hidden mb-6">
                    <img src={picture} />
                </div>
                <h3 className='text-[#101828] text-lg font-bold'>Olushola Bambe</h3>
            </header>
        </div>
    )
}

export default Home