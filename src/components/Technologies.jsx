import { useEffect, useRef } from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiWordpress, SiDjango, SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";
import { FaJs } from "react-icons/fa";

const Technologies = () => {
  const containerRef = useRef(null);
  const iconsRef = useRef([]);
  const titleRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset animations when entering view
            iconsRef.current.forEach((icon) => {
              if (icon) {
                icon.style.transform = 'translateY(30px)';
                icon.style.opacity = '0';
              }
            });
            if (titleRef.current) {
              titleRef.current.style.transform = 'translateY(20px)';
              titleRef.current.style.opacity = '0';
            }

            // Animate title
            setTimeout(() => {
              if (titleRef.current) {
                titleRef.current.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
                titleRef.current.style.transform = 'translateY(0)';
                titleRef.current.style.opacity = '1';
              }
            }, 100);

            // Animate icons with staggered delay
            iconsRef.current.forEach((icon, index) => {
              setTimeout(() => {
                if (icon) {
                  icon.style.transition = `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), 
                                         opacity 0.8s ease`;
                  icon.style.transform = 'translateY(0)';
                  icon.style.opacity = '1';
                }
              }, 300 + index * 200); // Longer delay between icons (200ms)
            });

            hasAnimatedRef.current = true;
          } else if (hasAnimatedRef.current) {
            // Reset when scrolling back up
            iconsRef.current.forEach((icon) => {
              if (icon) {
                icon.style.transition = 'none';
                icon.style.transform = 'translateY(30px)';
                icon.style.opacity = '0';
              }
            });
            if (titleRef.current) {
              titleRef.current.style.transition = 'none';
              titleRef.current.style.transform = 'translateY(20px)';
              titleRef.current.style.opacity = '0';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="pb-4" ref={containerRef}>
      <h2 
        ref={titleRef}
        className="my-20 text-center text-4xl"
        style={{
          opacity: 0,
          transform: 'translateY(20px)'
        }}
      >
        Technologies
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-x-6">
        {[
          <RiReactjsLine key="react" className="text-7xl text-cyan-400" />,
          <SiWordpress key="wordpress" className="text-6xl text-blue-600" />,
          <SiDjango key="django" className="text-6xl text-green-600" />,
          <FaJs key="js" className="text-6xl text-yellow-400" />,
          <SiTailwindcss key="tailwind" className="text-7xl text-teal-500" />,
          <SiMysql key="mysql" className="text-7xl text-blue-500" />
        ].map((icon, index) => (
          <div
            key={icon.key}
            ref={(el) => (iconsRef.current[index] = el)}
            style={{
              opacity: 0,
              transform: 'translateY(30px)'
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;