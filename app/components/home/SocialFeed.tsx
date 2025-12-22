'use client';

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com/provans' },
  { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com/provans' },
  { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com/company/provans' },
];

export default function SocialFeed() {
  return (
    <section className="py-20 px-4 bg-[#231f20]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0061af] font-medium mb-2 uppercase tracking-wider text-sm">Connect With Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Follow Our Journey
          </h2>
        </div>
        
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {socials.map((social) => (
            <div
              key={social.name}
              className="group flex flex-col items-center justify-center gap-4 bg-[#231f20] border-2 border-gray-700 rounded-xl p-8 md:p-12 hover:bg-[#0061af] hover:border-[#0061af] transition-all duration-300 cursor-pointer"
            >
              <social.icon className="w-10 h-10 md:w-14 md:h-14 text-white group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold text-white text-sm md:text-base">{social.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
