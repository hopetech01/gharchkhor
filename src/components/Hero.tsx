import ShimmerButton from "./ui/shimmer-button";


export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center gap-10 overflow-x-hidden py-5 md:py-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              DataFlux
            </span>
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Global AI Infrastructure
            </span>
          </h2>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          On-demand GPUs, seamless model training, and scalable deployments—fully managed, pay-as-you-go. Accelerate your AI projects with a few lines of code.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
        <ShimmerButton className="w-full md:w-1/3 shadow-2xl bg-green-500 dark:bg-green-500 hover:bg-green-600 active:bg-green-700">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
            Get Started
          </span>
        </ShimmerButton>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        {/* <GlobeDemo /> */}
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
