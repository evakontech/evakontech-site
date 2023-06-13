import { NavigationBar } from '../navigation-bar/navigation-bar.component';
import './welcome-area.styles.css';

export const WelcomeArea = () => {
    return (
        <section className='welcome-area-wrapper'>

            <div className="welcome-area-overlay-bg">

                <NavigationBar />

                <div className='welcome-area-text flex flex-col items-center justify-center text-center'>

                    <h1 className='text-4xl sm:text-6xl text-white font-extrabold '>
                        Lorem ipsum dolor sit amet, consectetur
                    </h1>

                    <p className='my-7 text-white '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.
                    </p>

                    <div className='flex flex-col sm:flex-row justify-center items-center gap-4 common-btn-style'>
                        <button>
                            Start a project
                        </button>

                        <button>
                            contact us
                        </button>
                    </div>

                </div>


            </div>

        </section>
    )
}
