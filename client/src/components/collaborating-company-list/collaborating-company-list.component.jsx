import { Carousel } from "./Carousel";
import './Carousel.css';



export const CollaboratingCompaniesList = () => {
  return (
    <section className="container-width py-32 text-center">

      <div className="w-4/5 md:w-3/4 lg:w-3/5 m-auto">
        <p className="text-4xl sm:text-6xl font-extrabold">
          we are working with
        </p>
        <p className="mt-9 text-slate-600">
          We drive digital transformation for visionary companies and clients, propelling businesses to new heights. Experience our innovative solutions, where expertise meets elegance on the path to success.
        </p>
      </div>



      <div className="w-full md:w-4/5 lg:w-[40%] m-auto mt-16 company-logo-crousel">
        <Carousel />
      </div>

    </section>
  )
}
