import AceternityButton from '@/components/component/button'
import { HeroParallaxDemo } from '@/components/component/hero-parallax-demo';
import { SparklesPreview } from '@/components/component/sparkle-preview';
import { ThreeDCardDemo } from '@/components/component/three-d-card-demo';

export default function Home() {
  return (
    <div>
      <div className="h-full w-full relative flex items-start justify-center bg-white dark:bg-black bg-grid-black/[0.1] dark:bg-grid-white/[0.1]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex justify-center items-center mt-16 px-6"> 
          <div className="h-full w-full max-w-[95rem] z-20 pb-20 pt-[3rem] sm:pt-[2rem] md:pt-[4rem] px-2 sm:px-8 md:px-7 grid grid-cols-1 xl:grid-cols-2 items-start">
            <div className="grid grid-cols-1 items-center justify-center pt-0 md:pt-[4rem]" style={{height: 'auto'}}>
              <h1 className="flex justify-center items-center text-4xl sm:text-5xl md:text-5xl text-left max-w-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-900 py-8 dark:text-white">
                We offer seamless websites, putting businesses online.
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl font-normal text-left max-w-2xl pb-7">
                We are a team of developers and designers who are passionate about creating websites that help businesses grow.
              </p>
              <AceternityButton />
            </div>
            <div>
              <ThreeDCardDemo />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[15rem] bg-white dark:bg-black">
        <SparklesPreview />
      </div>
      <div className="w-full h-[300vh] sm:h-[350vh] bg-white dark:bg-black">
        <HeroParallaxDemo />
      </div>
      <div className="w-full h-[88rem] bg-white dark:bg-white">
      </div>
    </div>
  );
}
