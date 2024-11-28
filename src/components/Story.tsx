import { useRef } from 'react';
import gsap from 'gsap';
import AnimateText from './AnimateText';
import RoundedCorners from './RoundedCorners';
import Button from './Button';

const Story = () => {
  const frameRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: 'power1.inout',
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.inout',
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          The multiversal ip world
        </p>
        <div className="relative size-full">
          <AnimateText
            title="<b>T</b>he st<b>o</b>ry of hidd<b>e</b>n re<b>a</b>lm"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container mt-[-6.35rem] lg:mt-0">
            <div className="story-img-mask">
              <div
                ref={frameRef}
                className="story-img-content"
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
              >
                <img
                  src="/img/entrance.webp"
                  alt="story"
                  className="object-contain "
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="mt-[-16rem] flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-[-4.5rem] max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              We're building a future where the unseen is visible and the
              unheard is heard. Our platform empowers individuals to connect,
              create, and collaborate in the digital realm.
            </p>

            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
