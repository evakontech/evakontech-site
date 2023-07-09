import { Rocket, SearchCode, Smartphone, DivideSquare, Pencil, Phone } from 'lucide-react';

const Services = () => (
    <section id="services" className="container-width py-32">

        <div className="w-[90%]  md:w-3/4 lg:w-3/5 m-auto text-center">
            <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl">
                we provide the <span className='text-[#1563cb]'>Best Digital Services</span>
            </h2>
            <p className="mt-9 text-slate-600">
                We connect people and technology, helping you envision, plan, and bring automation to life with great business solutions.
            </p>
        </div>

        <div className="mt-20 flex justify-center gap-20 flex-wrap">
            <div className="w-[320px] flex flex-col items-center justify-center text-center">
                <div className="bg-[#ECE0F5] w-20 h-20 rounded-md  flex justify-center items-center">
                    <SearchCode width="30px" height="30px" color="#BE63F9" />
                </div>

                <p className="text-2xl font-bold my-4">IT Solution</p>

                <p className="text-gray-600">
                    Our IT solutions provide customized technology services to help businesses of all sizes streamline
                    their operations, improve efficiency & achieve their goals.
                </p>

                <p className="text-sm font-semibold mt-5">Learn More</p>
            </div>

            <div className="w-[320px] flex flex-col items-center justify-center text-center">
                <div className="bg-[#F5DEDB] w-20 h-20 rounded-md  flex justify-center items-center">
                    <Rocket width="30px" height="30px" color="#FC573C" />
                </div>

                <p className="text-2xl font-bold my-4">Web Development</p>

                <p className="text-gray-600">
                    Our web development service is focused on creating high-quality, custom web solutions that meet the
                    specific needs of your business.
                </p>

                <p className="text-sm font-semibold mt-5">Learn More</p>
            </div>

            <div className="w-[320px] flex flex-col items-center justify-center text-center">
                <div className="bg-[#DAEDF0] w-20 h-20 rounded-md  flex justify-center items-center">
                    <Smartphone width="30px" height="30px" color="#26C6DA" />
                </div>

                <p className="text-2xl font-bold my-4">App Development</p>

                <p className="text-gray-600">
                    Our web development service is focused on creating high-quality, custom web solutions that meet the
                    specific needs of your business.
                </p>

                <p className="text-sm font-semibold mt-5">Learn More</p>
            </div>

            <div className="w-[320px] flex flex-col items-center justify-center text-center">
                <div className="bg-[#ECE0F5] w-20 h-20 rounded-md  flex justify-center items-center">
                    <Phone width="30px" height="30px" color="#BE63F9" />
                </div>

                <p className="text-2xl font-bold my-4">Digital Marketing</p>

                <p className="text-gray-600">
                    Our objective is to provide meaningful insights from your data through our Data Analysis services, enabling you to guide your business towards the correct path.
                </p>

                <p className="text-sm font-semibold mt-5">Learn More</p>
            </div>

            <div className="w-[320px] flex flex-col items-center justify-center text-center">
                <div className="bg-[#F5DEDB] w-20 h-20 rounded-md  flex justify-center items-center">
                    <Pencil width="30px" height="30px" color="#FC573C" />
                </div>

                <p className="text-2xl font-bold my-4">Graphics Designing</p>

                <p className="text-gray-600">
                    We specialize in creating top-notch graphics for a wide range of purposes, including events, content, social media, flyers, business cards, and company profiles.
                </p>

                <p className="text-sm font-semibold mt-5">Learn More</p>
            </div>

            <div className="w-[320px] flex flex-col items-center justify-center text-center">
                <div className="bg-[#DAEDF0] w-20 h-20 rounded-md  flex justify-center items-center">
                    <DivideSquare width="30px" height="30px" color="#26C6DA" />
                </div>

                <p className="text-2xl font-bold my-4">UI/UX </p>

                <p className="text-gray-600">
                    Our team utilizes cutting-edge design tools to craft captivating and delightful designs, ensuring an exceptional user-friendly experience.
                </p>

                <p className="text-sm font-semibold mt-5">Learn More</p>
            </div>
        </div>
    </section>
);

export default Services;
