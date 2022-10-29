import picture from '../assets/prifile_picture.png'
import Links from '../component/Links'

function Home(){
    return(
        <div className="container mx-auto px-4 pb-8 pt-16 relative text-[#101828]">
            <header className='flex items-center flex-col mb-8'>
                <div className='h-10 w-10  mb-8 rounded-full border border-dashed border-[#D0D5DD] flex items-center justify-center absolute top-11 right-4'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99998 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53975 10.4602 9.16666 9.99998 9.16666C9.53974 9.16666 9.16665 9.53975 9.16665 9.99999C9.16665 10.4602 9.53974 10.8333 9.99998 10.8333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.8333 10.8333C16.2935 10.8333 16.6666 10.4602 16.6666 9.99999C16.6666 9.53975 16.2935 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53975 15 9.99999C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.16665 10.8333C4.62688 10.8333 4.99998 10.4602 4.99998 9.99999C4.99998 9.53975 4.62688 9.16666 4.16665 9.16666C3.70641 9.16666 3.33331 9.53975 3.33331 9.99999C3.33331 10.4602 3.70641 10.8333 4.16665 10.8333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="h-[5.5rem] w-[5.5rem] rounded-full overflow-hidden mb-6">
                    <img src={picture} id="profile_img" />
                </div>
                <h3 className='text-lg font-bold'>Olushola Bambe</h3>
                <span id='twitter'><i className="fa-brands fa-twitter"></i> lilrex_cyc</span>
                <span id='slack' className='hidden'><i className="fa-brands fa-slack"></i> loyalsfc</span>
            </header>
            <main>
                <Links
                    id="twitter"
                    href="https://twitter.com"
                    linkText="Home"
                />
                <Links
                    id="btn__zuri"
                    href="https://training.zuri.team/"
                    linkText="Zuri Team"
                />
                <Links
                    id="books"
                    href="http://books.zuri.team"
                    linkText="Zuri Books"
                />
                <Links
                    id="book__python"
                    href="https://books.zuri.team/python-for-beginners?ref_id=loyalsfc"
                    linkText="Python Books"
                />
                <Links
                    id="Pitch"
                    href="https://background.zuri.team"
                    linkText="Background Check for Coders"
                />
                <Links
                    id="book__design"
                    href="https://books.zuri.team/design-rules"
                    linkText="Design Books"
                />
                <div className='flex items-center justify-center py-6'>
                    <svg width="25" height="24" viewBox="0 0 25 24" className='mr-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3752 11.2498C21.4106 11.2498 22.25 10.4104 22.25 9.37496C22.25 8.33952 21.4105 7.50012 20.3751 7.50012C19.3395 7.50012 18.5 8.33959 18.5 9.37512V11.2498H20.3752ZM15.125 11.2498C16.1605 11.2498 17 10.4103 17 9.3748V4.12512C17 3.08959 16.1605 2.25012 15.125 2.25012C14.0895 2.25012 13.25 3.08959 13.25 4.12512V9.3748C13.25 10.4103 14.0895 11.2498 15.125 11.2498Z" fill="#2EB67D"/>
                        <path d="M4.62484 12.7502C3.58939 12.7502 2.75 13.5896 2.75 14.625C2.75 15.6605 3.58947 16.4999 4.62492 16.4999C5.66045 16.4999 6.5 15.6604 6.5 14.6249V12.7502H4.62484ZM9.875 12.7502C8.83947 12.7502 8 13.5897 8 14.6252V19.8749C8 20.9104 8.83947 21.7499 9.875 21.7499C10.9105 21.7499 11.75 20.9104 11.75 19.8749V14.6252C11.75 13.5897 10.9105 12.7502 9.875 12.7502Z" fill="#E01E5A"/>
                        <path d="M13.2501 19.8752C13.2501 20.9106 14.0895 21.75 15.125 21.75C16.1604 21.75 16.9998 20.9105 16.9998 19.8751C16.9998 18.8395 16.1603 18 15.1248 18L13.2501 18L13.2501 19.8752ZM13.2501 14.625C13.2501 15.6605 14.0896 16.5 15.1251 16.5L20.3748 16.5C21.4103 16.5 22.2498 15.6605 22.2498 14.625C22.2498 13.5895 21.4104 12.75 20.3748 12.75L15.1251 12.75C14.0896 12.75 13.2501 13.5895 13.2501 14.625Z" fill="#ECB22E"/>
                        <path d="M11.7498 4.12484C11.7498 3.08939 10.9104 2.25 9.87496 2.25C8.83952 2.25 8.00012 3.08947 8.00012 4.12492C8.00012 5.16045 8.83959 6 9.87512 6L11.7498 6L11.7498 4.12484ZM11.7498 9.375C11.7498 8.33947 10.9103 7.5 9.8748 7.5L4.62512 7.5C3.58959 7.5 2.75012 8.33947 2.75012 9.375C2.75012 10.4105 3.58959 11.25 4.62512 11.25L9.8748 11.25C10.9103 11.25 11.7498 10.4105 11.7498 9.375Z" fill="#36C5F0"/>
                    </svg>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4627_392617)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0C5.8724 0 0.5 5.3808 0.5 12.0204C0.5 17.3304 3.938 21.8364 8.7068 23.4252C9.3068 23.5356 9.5252 23.1648 9.5252 22.8456C9.5252 22.5612 9.5156 21.804 9.5096 20.802C6.1712 21.528 5.4668 19.1904 5.4668 19.1904C4.922 17.8008 4.1348 17.4312 4.1348 17.4312C3.0452 16.6872 4.2176 16.7016 4.2176 16.7016C5.4212 16.7856 6.0548 17.94 6.0548 17.94C7.1252 19.776 8.864 19.2456 9.5468 18.9384C9.6572 18.162 9.9668 17.6328 10.31 17.3328C7.646 17.0292 4.844 15.9972 4.844 11.3916C4.844 10.08 5.312 9.006 6.0788 8.166C5.9552 7.8624 5.5436 6.6396 6.1964 4.986C6.1964 4.986 7.2044 4.662 9.4964 6.2172C10.4753 5.95022 11.4853 5.81423 12.5 5.8128C13.52 5.8176 14.546 5.9508 15.5048 6.2172C17.7956 4.662 18.8012 4.9848 18.8012 4.9848C19.4564 6.6396 19.0436 7.8624 18.9212 8.166C19.6892 9.006 20.1548 10.08 20.1548 11.3916C20.1548 16.0092 17.348 17.0256 14.6756 17.3232C15.1064 17.694 15.4892 18.4272 15.4892 19.5492C15.4892 21.1548 15.4748 22.452 15.4748 22.8456C15.4748 23.1672 15.6908 23.5416 16.3004 23.424C18.69 22.6225 20.7672 21.0904 22.2386 19.0441C23.7099 16.9977 24.501 14.5408 24.5 12.0204C24.5 5.3808 19.1264 0 12.5 0Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_4627_392617">
                                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </main>
        </div>
    )
}

export default Home