import { Rocket, SearchCode, Smartphone } from 'lucide-react';

const Services = () => (
    <section id="services" className="container-width py-16">
        {/* Title  */}
        <div className="w-full lg:w-4/5 m-auto">
            <p className="text-4xl sm:text-6xl font-extrabold text-center">we provide the best digital services</p>
            <p className="mt-4 text-center text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste
                ipsum officiis deleniti asperiores sit.
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
        </div>
    </section>
);

export default Services;
