import { useEffect, useRef, useState } from 'react';
import profilePic from '../assets/3.png';
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiWordpress, SiDjango, SiTailwindcss, SiMysql } from "react-icons/si";

const Hero = () => {
  const containerRef = useRef(null);
  const textElements = useRef([]);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const [currentTech, setCurrentTech] = useState(0);

  // Technologies data with icons and names
  const technologies = [
    { icon: <RiReactjsLine className="text-4xl text-cyan-400" />, name: "React" },
    { icon: <SiDjango className="text-4xl text-green-600" />, name: "Django" },
    { icon: <SiTailwindcss className="text-4xl text-teal-500" />, name: "Tailwind CSS" },
    { icon: <SiJavascript className="text-4xl text-yellow-400" />, name: "JavaScript" },
    { icon: <SiMysql className="text-4xl text-blue-500" />, name: "MySQL" },
    { icon: <SiWordpress className="text-4xl text-blue-600" />, name: "WordPress" }
  ];

  // Rotation effect (2 seconds per technology)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000); // Changed to 2 seconds
    return () => clearInterval(interval);
  }, [technologies.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset all elements to initial state
            textElements.current.forEach((el) => {
              el.style.transition = 'none';
              el.style.transform = 'translateX(-100px)';
              el.style.opacity = '0';
            });
            
            if (imageRef.current) {
              imageRef.current.style.transition = 'none';
              imageRef.current.style.transform = 'translateX(100px)';
              imageRef.current.style.opacity = '0';
            }
            
            if (buttonRef.current) {
              buttonRef.current.style.transition = 'none';
              buttonRef.current.style.transform = 'translateX(-100px)';
              buttonRef.current.style.opacity = '0';
            }

            // Trigger animations after reset
            setTimeout(() => {
              // Text elements slide in from left with stagger
              textElements.current.forEach((el, index) => {
                const delay = 500 + (index * 300); // 0.5s initial + 0.3s stagger per item
                
                setTimeout(() => {
                  el.style.transition = `transform 0.8s cubic-bezier(0.17, 0.55, 0.55, 1), opacity 0.8s ease`;
                  el.style.transform = 'translateX(0)';
                  el.style.opacity = '1';
                }, delay);
              });

              // Image slides in from right with slight delay
              setTimeout(() => {
                if (imageRef.current) {
                  imageRef.current.style.transition = `transform 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s, opacity 0.8s ease 0.2s`;
                  imageRef.current.style.transform = 'translateX(0)';
                  imageRef.current.style.opacity = '1';
                }
              }, 500); // 0.5s initial delay

              // Button animation with extra delay
              setTimeout(() => {
                if (buttonRef.current) {
                  buttonRef.current.style.transition = `transform 0.8s cubic-bezier(0.17, 0.55, 0.55, 1), opacity 0.8s ease`;
                  buttonRef.current.style.transform = 'translateX(0)';
                  buttonRef.current.style.opacity = '1';
                  
                  // Hover effects (only add these once)
                  if (!buttonRef.current._hasHoverEvents) {
                    buttonRef.current._hasHoverEvents = true;
                    buttonRef.current.addEventListener('mouseenter', () => {
                      buttonRef.current.style.transform = 'scale(1.1)';
                    });
                    buttonRef.current.addEventListener('mouseleave', () => {
                      buttonRef.current.style.transform = 'scale(1)';
                    });
                    buttonRef.current.addEventListener('mousedown', () => {
                      buttonRef.current.style.transform = 'scale(0.95)';
                    });
                    buttonRef.current.addEventListener('mouseup', () => {
                      buttonRef.current.style.transform = 'scale(1.1)';
                    });
                  }
                }
              }, 500 + (textElements.current.length * 300)); // After all text elements
            }, 50); // Small delay to ensure reset is applied before animation
          }
        });
      },
      { threshold: 0.1 }
    );

    // Initialize elements and observer
    if (containerRef.current) {
      textElements.current = Array.from(containerRef.current.querySelectorAll('[data-text-animate]'));
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
    <div className="pb-1 lg:mb-36">
      <div className="flex flex-wrap flex-col-reverse lg:flex-row" ref={containerRef}>
        {/* Text content sliding from left */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 
              className='pb-2 text-4xl tracking-tighter lg:text-8xl'
              data-text-animate
              style={{
                opacity: 0,
                transform: 'translateX(-100px)'
              }}
            >
              Ndinayo Eric
            </h2>
            
            <span 
              className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent'
              data-text-animate
              style={{
                opacity: 0,
                transform: 'translateX(-100px)'
              }}
            >
              Full Stack Developer
            </span>
            
            <p 
              className='my-2 max-w-ld py-6 text-xl leading-relaxed tracking-tighter'
              data-text-animate
              style={{
                opacity: 0,
                transform: 'translateX(-100px)'
              }}
            >
              I am a Full Stack Developer with a passion for building scalable and robust web applications. I have a strong background in web development, database design, and WordPress development.
            </p>
            
            <div 
              ref={buttonRef}
              style={{
                opacity: 0,
                transform: 'translateX(-100px)',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              <a 
                href='/resumeNdin.pdf'
                target='_blank'
                rel='noopener noreferrer'
                download="resumeNdin.pdf"
                className="flex items-center hover:scale-105 transition-transform"
              >
                <span className="mr-3">
                  {technologies[currentTech].icon}
                </span>
                <span className="text-xl font-medium text-gray-400"> {/* Changed to gray-400 */}
                  {technologies[currentTech].name}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Image sliding from right */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img 
              ref={imageRef}
              src={profilePic} 
              alt="profilePic" 
              className="border border-stone-900 rounded-3xl"
              style={{
                opacity: 0,
                transform: 'translateX(100px)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;