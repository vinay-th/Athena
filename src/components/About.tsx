import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimateText from './AnimateText';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-32 flex flex-col items-center gap-5">
        <h2 className="font-general lg:text-[1.5rem] uppercase md:text-[10px]">
          Welcome to Athena!
        </h2>

        <AnimateText
          title="Disc<b>o</b>ver the world's top Des<b>i</b>gners & Cre<b>a</b>tives."
          containerClass="mt-5 !text-black !text-center"
        />

        <div className="about-subtext">
          <p>Level up your digital life: The Game of Development.</p>
          <p>Powering innovation, connecting developers worldwide.</p>
        </div>
      </div>

      <div id="clip" className="h-dvh w-screen">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="About"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
