import { useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const contactItemsRef = useRef([]);
  const availabilityRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset all animations
            titleRef.current.style.opacity = '0';
            titleRef.current.style.transform = 'translateY(30px)';
            
            contactItemsRef.current.forEach((item, index) => {
              if (item) {
                item.style.opacity = '0';
                item.style.transform = `translateY(${20 + (index * 10)}px)`;
              }
            });
            
            if (availabilityRef.current) {
              availabilityRef.current.style.opacity = '0';
              availabilityRef.current.style.transform = 'translateY(20px)';
            }

            // Animate title
            setTimeout(() => {
              titleRef.current.style.transition = 'opacity 1.8s cubic-bezier(0.16, 0.77, 0.22, 0.99), transform 1.8s cubic-bezier(0.16, 0.77, 0.22, 0.99)';
              titleRef.current.style.opacity = '1';
              titleRef.current.style.transform = 'translateY(0)';
            }, 300);

            // Animate contact items with staggered delay
            contactItemsRef.current.forEach((item, index) => {
              setTimeout(() => {
                if (item) {
                  item.style.transition = `opacity 1.2s cubic-bezier(0.16, 0.77, 0.22, 0.99) ${index * 0.15}s, transform 1.2s cubic-bezier(0.16, 0.77, 0.22, 0.99) ${index * 0.15}s`;
                  item.style.opacity = '1';
                  item.style.transform = 'translateY(0)';
                }
              }, 500 + (index * 300));
            });

            // Animate availability text
            setTimeout(() => {
              if (availabilityRef.current) {
                availabilityRef.current.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
                availabilityRef.current.style.opacity = '1';
                availabilityRef.current.style.transform = 'translateY(0)';
              }
            }, 1500);
          } else {
            // Reset when scrolling up
            titleRef.current.style.transition = 'none';
            titleRef.current.style.opacity = '0';
            titleRef.current.style.transform = 'translateY(30px)';
            
            contactItemsRef.current.forEach((item, index) => {
              if (item) {
                item.style.transition = 'none';
                item.style.opacity = '0';
                item.style.transform = `translateY(${20 + (index * 10)}px)`;
              }
            });
            
            if (availabilityRef.current) {
              availabilityRef.current.style.transition = 'none';
              availabilityRef.current.style.opacity = '0';
              availabilityRef.current.style.transform = 'translateY(20px)';
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
    <div className="pb-4 max-w-4xl mx-auto px-4" ref={containerRef}>
      <h2 
        ref={titleRef}
        className="my-20 text-center text-4xl"
        style={{ 
          opacity: 0,
          transform: 'translateY(30px)'
        }}
      >
        Get in touch
      </h2>
      
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-12 space-y-6 md:space-y-0">
        {/* Location with icon */}
        <div 
          ref={el => contactItemsRef.current[0] = el}
          className="flex items-center space-x-2"
          style={{
            opacity: 0,
            transform: 'translateY(20px)'
          }}
        >
          <FaMapMarkerAlt className="text-blue-500 text-xl" />
          <p className="text-lg">Kigali, Rwanda</p>
        </div>
        
        {/* WhatsApp with icon */}
        <div 
          ref={el => contactItemsRef.current[1] = el}
          className="flex items-center space-x-2"
          style={{
            opacity: 0,
            transform: 'translateY(30px)'
          }}
        >
          <FaWhatsapp className="text-green-500 text-xl" />
          <a 
            href="https://wa.me/250788702255" 
            target="_blank"
            rel="noreferrer"
            className="text-lg hover:underline hover:text-green-500 transition-colors duration-300"
          >
            +250 788 702 255
          </a>
        </div>
        
        {/* Email with icon */}
        <div 
          ref={el => contactItemsRef.current[2] = el}
          className="flex items-center space-x-2"
          style={{
            opacity: 0,
            transform: 'translateY(40px)'
          }}
        >
          <FaEnvelope className="text-red-500 text-xl" />
          <a 
            href="mailto:ndinayoerics@gmail.com?subject=Portfolio Inquiry&body=Please include your contact information in the message.%0D%0A%0D%0AYour Message:"
            target="_blank"
            rel="noreferrer"
            className="text-lg hover:underline hover:text-red-500 transition-colors duration-300"
          >
            ndinayoerics@gmail.com
          </a>
        </div>
      </div>
      
      <div 
        ref={availabilityRef}
        className="pt-10 text-center"
        style={{
          opacity: 0,
          transform: 'translateY(20px)'
        }}
      >
        <p className="text-gray-400">
          Available for work, collaboration, and new opportunities
        </p>
      </div>
    </div>
  );
};

export default Contact;