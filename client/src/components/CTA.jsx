import { Link } from 'react-router-dom';

const CTA = () => (
    <section className="py-20 bg-gray-100">
        <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl  text-center">
                <div className="isolate flex justify-center -space-x-2">
                    <img
                        className="relative z-30 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                        src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/279575077_803739760966008_8880273309683742698_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-tiqfOrN0GkAX_ugWNn&_nc_ht=scontent.fktm16-1.fna&oh=00_AfAYZLjxxktf_4txwInrZ4sEfa_qn0ozsNomYlhyQAilOQ&oe=64AFACB5"
                        alt="Dan_Abromov"
                    />
                    <img
                        className="relative z-20 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                        src="https://i.ibb.co/GR0wZbp/1651667138404.jpg"
                        alt="Guillermo_Rauch"
                    />
                    <img
                        className="relative z-10 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                        src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
                        alt="Lee_Robinson"
                    />
                    <img
                        className="relative z-0 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                        src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
                        alt="Delba"
                    />
                </div>

                <h2 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
                    Join <span className="border-b-8 text-[#1563cb] border-yellow-300">8+</span> other developers
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base text-gray-600 md:mt-10 lg:text-xl px-3 md:px-0">
                    We are committed to promoting the remote work in Nepal's experience and shaping the future of the
                    software industry.
                </p>
                <Link to="/career">
                    <button
                        type="button"
                        className="mt-8 rounded-md bg-[#1563cb] px-4 py-3 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Join our team
                    </button>
                </Link>
            </div>
        </div>
    </section>
);

export default CTA;
