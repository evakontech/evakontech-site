import './welcome-area.styles.css';

export const WelcomeArea = () => {
    return (
        <section className='welcome-area-wrapper pt-20 pb-20 md:pb-52 lg:pb-64'>

            <div className='container-width welcome-area'>

                <div className='welcome-area-text'>

                    <h1 className='text-4xl sm:text-6xl text-white font-extrabold'>
                        Lorem ipsum dolor sit amet, consectetur
                    </h1>

                    <p className='my-7 text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.
                    </p>

                    <div className='flex gap-x-4'>
                        <button>
                            Start a project
                        </button>

                        <button>
                            contact us
                        </button>
                    </div>

                </div>

                <div className='welcome-area-img flex justify-center items-center'>
                    <img src="https://evakon.tech/assets/images/hero-banner.png" alt="" className='w-full banner-animation' />
                </div>

            </div>

            <div class="shape">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="#FFFFFF">
                    <path class="shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                </svg>
            </div>

        </section>
    )
}
