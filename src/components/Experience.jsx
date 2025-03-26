import { useEffect, useRef } from 'react';

const Experience = () => {
  const titleRef = useRef(null);
  const experienceRefs = useRef([]);

  const experiences = [
    {
      role: "Full Stack Developer & Founder",
      company: "Ubugeni Supply (Launching Soon)",
      period: "2023 - Present",
      responsibilities: [
        "Developing comprehensive art platform with e-commerce, artist portfolios, and gallery tools (Launching in coming months)",
        "Building core features: art supplies store, printing services, and artist collaboration system",
        "Implementing artist portfolio showcase with feedback and networking capabilities",
        "Creating curator/gallery tools for exhibition management and application processing",
        "Integrating payment systems for art supplies, printing services, and artwork sales",
        "Designing responsive UI/UX with artist-friendly interface ",
        "Developing Django backend, REST APIs, and admin dashboard"
      ],
      tags: [
        "Django", 
        "E-commerce", "Printing Services", "Artist Portfolios", 
        "Exhibition Management", "Payment Integration", "In Development"
      ],
      direction: 'left' // Comes from left
    },
    {
      role: "WordPress Developer",
      company: "Zala Safaris",
      period: "2023 - Present",
      responsibilities: [
        "Fully customized using Elementor and developed a custom WordPress theme for a safari booking platform.",
        "Successfully hosted and managed the website on Hostinger.",
        "Optimized website performance and user experience",
        "Managed all aspects of WordPress development and maintenance"
      ],
      tags: ["WordPress", "PHP", "JavaScript", "CSS"],
      direction: 'right' // Comes from right
    },
    {
      role: "Django Developer (Collaboration)",
      company: "Elitech.store",
      period: "2025",
      responsibilities: [
        "Collaborated on building electronics e-commerce using Django templates",
        "Implemented product display and shopping cart functionality",
        "Contributed to Django admin customizations for inventory management"
      ],
      tags: ["Django", "Python", "HTML/CSS", "JavaScript", "E-commerce"],
      direction: 'left' // Comes from left
    }
  ];

  useEffect(() => {
    // Title animation
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );
    titleObserver.observe(titleRef.current);

    // Experience items animation
    const experienceObservers = [];
    experienceRefs.current.forEach((expRef, index) => {
      if (!expRef) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const direction = experiences[index].direction;
            const translateX = direction === 'left' ? '-50px' : '50px';
            
            // Reset position
            expRef.style.transition = 'none';
            expRef.style.opacity = '0';
            expRef.style.transform = `translateX(${translateX})`;
            
            // Force reflow
            expRef.getBoundingClientRect();
            
            // Animate in
            expRef.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            expRef.style.opacity = '1';
            expRef.style.transform = 'translateX(0)';
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(expRef);
      experienceObservers.push(observer);
    });

    return () => {
      titleObserver.disconnect();
      experienceObservers.forEach(observer => observer.disconnect());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pb-4 max-w-4xl mx-auto px-4">
      <h2 
        ref={titleRef}
        className="my-20 text-center text-4xl"
        style={{ 
          opacity: 0,
          transform: 'translateY(30px)'
        }}
      >
        Experience
      </h2>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            ref={el => experienceRefs.current[index] = el}
            className="border-b border-gray-200 pb-8 last:border-0"
            style={{
              opacity: 0,
              transform: exp.direction === 'left' ? 'translateX(-50px)' : 'translateX(50px)'
            }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company} • {exp.period}</p>
            </div>
            
            <ul className="mt-4 space-y-2">
              {exp.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1 h-1.5 w-1.5 bg-black rounded-full"></span>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-black text-white text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;