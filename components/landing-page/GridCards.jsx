import Image from "next/image";

export function GridCards() {
  return (
    <>
      <div>
        <div className="grid grid-cols-6 grid-rows-4 lg:grid-rows-2 gap-5 2xl:gap-x-10 px-2 sm:px-10 3xl:px-0">
          <div className="col-start-1 col-end-7 row-start-1 lg:col-start-1 lg:col-end-4 lg:row-start-1 rounded-3xl p-5 w-full min-h-[220px] bg-secondary">
            <h3 className="text-2xl text-white sm:text-3xl font-bold pt-2">
              Local Expertise
            </h3>
            <p className="pt-5 text-xl text-white/65 font-medium">
              We have a deep understanding of regional needs and challenges, which allows us to tailor our services to effectively address local issues and deliver impactful results.
            </p>
          </div>
          <div className="col-start-1 col-end-7 row-start-2 lg:col-start-4 lg:col-end-7 lg:row-start-1 rounded-3xl p-5 w-full min-h-[220px] bg-primary">
            <h3 className="text-2xl sm:text-3xl font-bold pt-2">
              Sustainable Practices
            </h3>
            <p className="pt-5 text-xl text-secondary/70 font-medium">
              Our focus is on environmentally-friendly and long-lasting solutions, ensuring that our projects contribute to sustainable development and minimize environmental impact.
            </p>
          </div>
          <div className="col-start-1 col-end-7 row-start-3 lg:col-start-1 lg:col-end-4 lg:row-start-2 rounded-3xl p-5 w-full min-h-[220px] bg-accent">
            <h3 className="text-secondary text-2xl sm:text-3xl font-bold pt-2">
              Comprehensive Service
            </h3>
            <p className="pt-5 text-xl text-secondary/70 font-medium">
              From initial consultation to project completion, we manage every phase with precision and care, providing a seamless experience and ensuring that all aspects of the project are handled efficiently.
            </p>
          </div>
          <div className="col-start-1 col-end-7 row-start-4 lg:col-start-4 lg:col-end-7 lg:row-start-2 rounded-3xl p-5 w-full min-h-[220px] bg-muted">
            <h3 className="text-2xl sm:text-3xl font-semibold pt-2">
              Commitment to Quality
            </h3>
            <p className="pt-5 text-xl text-accent-TextHover font-medium">
              We uphold high standards in every aspect of our work, from materials and craftsmanship to service delivery, ensuring that each project meets our rigorous quality criteria.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 grid-rows-1 mt-5 lg:space-x-5 px-2 sm:px-10 3xl:px-0">
        <div className="col-start-1 hidden lg:block">
          <Image
            src={"/services-1.jpg"}
            width={290}
            height={264}
            alt="service image"
            className="h-full object-cover rounded-2xl"
          />
        </div>
        <div className="col-start-1 col-end-7 lg:col-start-2 lg:col-end-7 rounded-3xl p-5 min-h-[220px] bg-destructive">
          <h3 className="text-2xl sm:text-3xl font-semibold pt-2">
            Efficient Project Management
          </h3>
          <p className="pt-5 text-xl text-accent-TextHover font-medium">
            We utilize streamlined processes and advanced project management techniques to ensure that all projects are delivered on time and within budget, maximizing efficiency and client satisfaction.
          </p>
        </div>
      </div>
    </>
  );
}
