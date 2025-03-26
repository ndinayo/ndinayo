import { useEffect, useRef } from 'react';
import portfolioScreenshot from '../assets/portfolio-screenshot.png';
import zalaSafariScreenshot from '../assets/zala-safari-screenshot.png';

const Projects = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset animations
            titleRef.current.style.opacity = '0';
            titleRef.current.style.transform = 'translateY(40px)';
            projectRefs.current.forEach((project, index) => {
              if (project) {
                project.style.opacity = '0';
                // First project comes from left, second from right
                project.style.transform = index % 2 === 0 ? 'translateX(-80px)' : 'translateX(80px)';
              }
            });

            // Animate title with ultra-smooth easing
            setTimeout(() => {
              titleRef.current.style.transition = 'opacity 2s cubic-bezier(0.12, 0.7, 0.24, 1), transform 2.2s cubic-bezier(0.12, 0.7, 0.24, 1)';
              titleRef.current.style.opacity = '1';
              titleRef.current.style.transform = 'translateY(0)';
            }, 300);

            // Animate projects with staggered delay and ultra-smooth easing
            projectRefs.current.forEach((project, index) => {
              setTimeout(() => {
                if (project) {
                  project.style.transition = `opacity 1.8s cubic-bezier(0.12, 0.7, 0.24, 1) ${index * 0.2}s, transform 2s cubic-bezier(0.12, 0.7, 0.24, 1) ${index * 0.2}s`;
                  project.style.opacity = '1';
                  project.style.transform = 'translateX(0)';
                }
              }, 800 + index * 500); // More generous staggered delay
            });
          } else {
            // Reset when scrolling up (instant)
            titleRef.current.style.transition = 'none';
            titleRef.current.style.opacity = '0';
            titleRef.current.style.transform = 'translateY(40px)';
            projectRefs.current.forEach((project, index) => {
              if (project) {
                project.style.transition = 'none';
                project.style.opacity = '0';
                project.style.transform = index % 2 === 0 ? 'translateX(-80px)' : 'translateX(80px)';
              }
            });
          }
        });
      },
      { threshold: 0.05 } // More sensitive trigger point
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
          transform: 'translateY(40px)'
        }}
      >
        Projects
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {/* Project 1: Personal Portfolio */}
        <div 
          ref={el => projectRefs.current[0] = el}
          className="max-w-md border border-gray-300 rounded-lg overflow-hidden transition-all duration-700 hover:shadow-xl"
          style={{ 
            opacity: 0,
            transform: 'translateX(-80px)'
          }}
        >
          <div className="h-48 relative bg-gray-100 overflow-hidden">
            <img
              src={portfolioScreenshot}
              alt="Personal Portfolio Screenshot"
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-900"
            />
          </div>
          <div className="p-4 border-t border-gray-300">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-black text-white text-xs rounded">React</span>
              <span className="px-2 py-1 bg-black text-white text-xs rounded">Tailwind</span>
              <span className="px-2 py-1 bg-black text-white text-xs rounded">Framer</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
            <p className="text-gray-400 mb-4">
              My responsive portfolio featuring projects, skills, and contact info. 
              Designed with smooth animations and dark mode.
            </p>
            <div className="flex justify-between">
              <a href="#" className="font-medium underline hover:text-blue-500 transition-colors duration-700">View Live</a>
            </div>
          </div>
        </div>

        {/* Project 2: Zala Safaris */}
        <div 
          ref={el => projectRefs.current[1] = el}
          className="max-w-md border border-gray-300 rounded-lg overflow-hidden transition-all duration-700 hover:shadow-xl"
          style={{ 
            opacity: 0,
            transform: 'translateX(80px)'
          }}
        >
          <div className="h-48 relative bg-gray-100 overflow-hidden">
            <img
              src={zalaSafariScreenshot}
              alt="Zala Safaris Screenshot"
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-900"
            />
          </div>
          <div className="p-4 border-t border-gray-300">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-black text-white text-xs rounded">wordpress</span>
              <span className="px-2 py-1 bg-black text-white text-xs rounded">Elementor</span>
              <span className="px-2 py-1 bg-black text-white text-xs rounded">WPForms</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Zala Safaris</h3>
            <p className="text-gray-400 mb-4">
              A tourism booking platform for a safari company operating in East Africa. Built using Elementor, WPForms, the Blocksy theme, and custom CSS.
            </p>
            <div className="flex justify-between">
              <a href="https://zalasafaris.com" className="font-medium underline hover:text-blue-500 transition-colors duration-700" target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;