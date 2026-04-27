import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle, 
  Home, 
  Star, 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Bed, 
  Bath, 
  Ruler,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('buy');

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans font-light text-zinc-900 bg-zinc-50 selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav id="navbar" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out backdrop-blur-md border-b ${
        navScrolled ? 'bg-white/95 border-zinc-200 py-2' : 'bg-white/90 border-zinc-300 py-4'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Left Group */}
          <div className="flex md:justify-start md:gap-8 lg:gap-12 md:w-1/3 order-2 md:order-1 flex-wrap w-full gap-x-6 items-center justify-center">
            <NavLink label="Buy" />
            <NavLink label="Sell" />
            <NavLink label="Manage" />
          </div>

          {/* Center Logo */}
          <div className="flex justify-center w-full md:w-1/3 order-1 md:order-2">
            <a href="#" className="font-sans text-xl md:text-2xl font-medium tracking-tight text-black">
              FLEET & CO.
            </a>
          </div>

          {/* Right Group */}
          <div className="flex items-center justify-center md:justify-end gap-6 md:gap-8 lg:gap-12 w-full md:w-1/3 order-3">
            <NavLink label="Our Team" />
            <NavLink label="Our Listings" />
            <a href="#" className="bg-transparent border border-black px-6 py-2.5 text-xs uppercase tracking-widest font-medium text-black hover:bg-black hover:text-white transition-all duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-[750px] flex flex-col md:pb-32 md:px-12 overflow-hidden bg-zinc-900 w-full h-screen pr-6 pb-24 pl-6 relative justify-end">
        {/* Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://res.cloudinary.com/dcx4ftlyv/image/upload/q_auto/f_auto/v1777285658/161545302_hqvjss.jpg" 
            alt="Luxury Property" 
            className="w-full h-full object-cover hero-bg-img transition-transform duration-1000 ease-out" 
            style={{ transform: 'scale(1.05)' }} 
          />
          <div className="absolute inset-0 bg-zinc-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
        </div>

        {/* Top Marker */}
        <div className="absolute top-32 left-6 md:left-12 z-10 w-full max-w-[1400px] mx-auto">
          <span className="block uppercase text-xs font-medium text-white tracking-widest drop-shadow-md">
            North Shore, NZ
          </span>
        </div>

        {/* Content */}
        <div className="z-10 w-full max-w-[1400px] mx-auto relative">
          <div className="max-w-4xl">
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
            >
              {/* Toggle Nav */}
              <div className="flex border-b border-white/20">
                <SearchTab 
                  label="Buy" 
                  active={activeTab === 'buy'} 
                  onClick={() => setActiveTab('buy')} 
                />
                <SearchTab 
                  label="Rent" 
                  active={activeTab === 'rent'} 
                  onClick={() => setActiveTab('rent')} 
                />
                <SearchTab 
                  label="Sell My Property" 
                  active={activeTab === 'sell'} 
                  onClick={() => setActiveTab('sell')} 
                />
              </div>

              {/* Dynamic Forms */}
              <div className="md:p-8 p-6">
                <AnimatePresence mode="wait">
                  {activeTab !== 'sell' ? (
                    <motion.div 
                      key="buy-rent"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="flex flex-col md:flex-row gap-6 md:gap-8 items-end"
                    >
                      <div className="flex-1 w-full">
                        <label className="block text-xs uppercase tracking-widest text-white/90 font-semibold mb-2">Location</label>
                        <input type="text" placeholder="Search North Shore..." className="w-full bg-transparent border-b border-white/40 py-2 text-white placeholder:text-white/60 font-medium focus:outline-none focus:border-white transition-colors" />
                      </div>
                      
                      <SelectField label="Bedrooms" options={['Any', '1+', '2+', '3+', '4+']} />
                      <SelectField label="Bathrooms" options={['Any', '1+', '2+', '3+']} />
                      
                      <div className="w-full md:w-auto">
                        <button className="w-full bg-white text-black border border-white px-10 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-white/20 hover:text-white hover:border-transparent backdrop-blur-md transition-all duration-300">
                          Search
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                        key="sell"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex flex-col md:flex-row gap-6 md:gap-8 items-end"
                    >
                      <div className="flex-1 w-full">
                        <label className="block text-xs uppercase tracking-widest text-white/90 font-semibold mb-2">Property Address</label>
                        <input type="text" placeholder="Enter your full property address..." className="w-full bg-transparent border-b border-white/40 py-2 text-white placeholder:text-white/60 font-medium focus:outline-none focus:border-white transition-colors" />
                      </div>
                      
                      <div className="w-full md:w-auto">
                        <button className="w-full bg-white text-black border border-white px-10 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-white/20 hover:text-white hover:border-transparent backdrop-blur-md transition-all duration-300 whitespace-nowrap">
                          Get Appraisal
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* The Fleet Advantage */}
      <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-zinc-50">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
        >
          <div className="w-full md:w-1/4 pt-2 border-t border-zinc-300">
            <span className="block text-xs uppercase tracking-widest mt-4 text-zinc-600 font-medium">
              01 The Advantage
            </span>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-3xl md:text-5xl font-sans leading-tight mb-10 font-normal tracking-tight text-zinc-900 max-w-3xl">
              End-to-end expertise. Unmatched market knowledge across the region.
            </h2>
            <div className="border-t border-zinc-300 py-6 mb-10 flex flex-col md:flex-row gap-4 md:gap-12 md:items-center">
              <IconDetail icon={<CheckCircle size={18} />} label="Specialist Team" />
              <IconDetail icon={<Home size={18} />} label="Extensive Listings" />
              <IconDetail icon={<Star size={18} />} label="5-Star Service" />
            </div>
            <div className="w-full aspect-[21/9] overflow-hidden border border-zinc-300 mb-10 group bg-zinc-100">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Team at work" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" />
            </div>
            <div className="max-w-2xl">
              <p className="text-zinc-600 font-light leading-relaxed mb-8 text-base">
                Our specialist team delivers an end-to-end service. We manage diverse property types with precision, ensuring your investment thrives.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-900 border-b border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors font-medium">
                Meet the Directors <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="w-full border-t border-zinc-300 relative flex justify-center">
          <span className="absolute top-0 -translate-y-1/2 bg-zinc-50 px-4 text-xs uppercase tracking-widest text-zinc-500">
            Next Focus
          </span>
        </div>
      </div>

      {/* Neighbourhood Highlights */}
      <section className="w-full relative pt-20 md:pt-32 pb-32 md:pb-48 px-6 md:px-12 max-w-[1400px] mx-auto bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-12 gap-12 items-center"
        >
          <div className="md:col-span-7">
            <div className="aspect-[16/9] w-full overflow-hidden relative border border-zinc-300 group shadow-sm">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="North Shore Coast" className="w-full h-full object-cover transform transition duration-700 ease-out group-hover:scale-[1.02]" />
              <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm border border-zinc-300 px-4 py-2 shadow-sm">
                <span className="text-xs uppercase tracking-widest text-zinc-900 font-medium">
                  Takapuna North Shore
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 md:pl-16 md:-translate-y-4 max-w-md">
            <span className="block text-xs uppercase tracking-widest mb-6 text-zinc-600 font-medium">
              02 Local Specialists
            </span>
            <h3 className="font-sans text-3xl md:text-4xl mb-6 font-normal leading-tight tracking-tight text-zinc-900">
              Deep roots in our communities.
            </h3>
            <p className="text-zinc-600 font-light leading-relaxed mb-8">
              We possess deep local knowledge. From beachfront estates to modern apartments, we connect clients with the North Shore's best.
            </p>

            {/* Stats */}
            <div className="border-t border-zinc-300 pt-6 mt-8 mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4">
              <StatRow label="Area" value="Takapuna & Milford" />
              <StatRow label="Area" value="Devonport Heritage" />
              <StatRow label="Area" value="Albany Lifestyle" />
              <StatRow label="Area" value="East Coast Bays" />
            </div>

            <div className="flex flex-col items-start gap-4">
              <a href="#" className="text-xs uppercase tracking-widest border border-zinc-900 px-8 py-3.5 font-semibold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300">
                Explore Neighbourhoods
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 md:py-32 bg-zinc-900 text-white overflow-hidden">
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="block text-xs uppercase tracking-widest mb-4 text-zinc-400 font-medium">
              03 Featured Properties
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-normal tracking-tight">
              Curated collection.
            </h2>
          </motion.div>
          <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-colors font-medium">
            View All Listings <ArrowRight size={14} />
          </a>
        </div>

        <div className="flex gap-6 px-6 md:px-12 pb-12 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
          <ListingCard 
            title="142 Seaview Road"
            location="Castor Bay, North Shore"
            price="Offers"
            beds={4}
            baths={3}
            sqm="280 sqm"
            tag="For Sale"
            image="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
          />
          <ListingCard 
            title="88 Hurstmere Road"
            location="Takapuna, North Shore"
            price="To Be Auctioned"
            beds={3}
            baths={2}
            sqm="195 sqm"
            tag="Auction"
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          />
          <ListingCard 
            title="21a Victoria Road"
            location="Devonport, North Shore"
            price="$1,200 / wk"
            beds={3}
            baths={2}
            sqm="--"
            tag="For Rent"
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          />
          <div className="min-w-[20px] md:min-w-[48px] shrink-0"></div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-zinc-200 py-5 overflow-hidden marquee-container flex items-center border-y border-zinc-300">
        <div className="marquee-track flex gap-12 md:gap-20 items-center text-xs uppercase tracking-widest font-medium text-zinc-600">
          <MarqueeBatch />
          <MarqueeBatch />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-zinc-300">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          <div className="md:col-span-2 pr-0 md:pr-12">
            <a href="#" className="font-sans text-2xl font-medium tracking-tight text-zinc-900 block mb-6">
              FLEET & CO.
            </a>
            <p className="text-zinc-600 font-light leading-relaxed max-w-sm mb-10 text-sm">
              Premier real estate and property management services across Auckland's North Shore. We define modern luxury real estate through expert knowledge and unmatched service.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
              <SocialIcon icon={<Facebook size={20} />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-8">Services</h4>
            <ul className="space-y-4">
              <FooterLink label="Buy Property" />
              <FooterLink label="Sell Property" />
              <FooterLink label="Property Management" />
              <FooterLink label="Free Appraisal" />
              <FooterLink label="Project Marketing" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-zinc-900 mb-8">Contact Us</h4>
            <ul className="space-y-5">
              <li className="text-zinc-600 text-sm font-light leading-relaxed">
                123 Hurstmere Road,<br />Takapuna, Auckland 0622
              </li>
              <li>
                <a href="mailto:hello@fleetandco.co.nz" className="text-zinc-900 hover:text-zinc-500 text-sm font-medium transition-colors border-b border-zinc-900 hover:border-zinc-500 pb-0.5 inline-block">
                  hello@fleetandco.co.nz
                </a>
              </li>
              <li>
                <a href="tel:+6491234567" className="text-zinc-600 hover:text-zinc-900 text-sm font-light transition-colors">
                  +64 9 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-zinc-500 font-light uppercase tracking-widest">© 2024 Fleet Management & Co.</p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-900 font-light uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-900 font-light uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ label }: { label: string }) {
  return (
    <a href="#" className="text-xs uppercase tracking-widest font-medium text-black hover:text-zinc-500 transition-colors duration-300">
      {label}
    </a>
  );
}

function SearchTab({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex-1 md:text-sm uppercase transition-colors text-xs font-semibold tracking-widest border-r border-white/20 pt-4 pb-4 last:border-0 ${
        active 
          ? 'bg-white/20 text-white' 
          : 'bg-transparent text-white/70 hover:bg-white/10'
      }`}
    >
      <span className={label.includes('Sell') ? 'hidden sm:inline' : ''}>{label}</span>
      {label.includes('Sell') && <span className="sm:hidden">Sell</span>}
    </button>
  );
}

function SelectField({ label, options }: { label: string, options: string[] }) {
  return (
    <div className="w-full md:w-32 relative">
      <label className="block text-xs uppercase tracking-widest text-white/90 font-semibold mb-2">{label}</label>
      <div className="relative">
        <select className="w-full bg-transparent border-b border-white/40 py-2 text-white font-medium focus:outline-none appearance-none cursor-pointer pr-8 [&>option]:text-black">
          {options.map(opt => (
            <option key={opt} value={opt === 'Any' ? '' : opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
      </div>
    </div>
  );
}

function IconDetail({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <span className="text-xs uppercase tracking-widest text-zinc-600 font-medium flex items-center gap-2">
      <span className="text-zinc-400">{icon}</span> {label}
    </span>
  );
}

function StatRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex items-baseline gap-4 justify-between border-b border-zinc-200 pb-2">
      <span className="text-xs uppercase tracking-widest text-zinc-900 font-medium shrink-0">{label}</span>
      <span className="text-sm text-zinc-600 font-light text-right">{value}</span>
    </div>
  );
}

function ListingCard({ title, location, price, beds, baths, sqm, tag, image }: any) {
  return (
    <div className="min-w-[85vw] md:min-w-[400px] max-w-[500px] shrink-0 snap-center group cursor-pointer">
      <div className="aspect-[4/5] overflow-hidden relative mb-6 bg-zinc-800">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute top-4 right-4 bg-white text-zinc-900 px-4 py-1.5 text-xs uppercase tracking-widest font-semibold z-10 shadow-lg">
          {tag}
        </div>
      </div>
      <div className="flex justify-between items-start gap-4">
        <div>
          <h4 className="text-lg font-medium mb-1 tracking-tight">{title}</h4>
          <p className="text-zinc-400 text-sm font-light">{location}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-medium tracking-tight">{price}</p>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-5 text-sm text-zinc-300 border-t border-zinc-800 pt-5 font-light">
        <span className="flex items-center gap-2"><Bed size={18} /> {beds}</span>
        <span className="flex items-center gap-2"><Bath size={18} /> {baths}</span>
        <span className="flex items-center gap-2"><Ruler size={18} /> {sqm}</span>
      </div>
    </div>
  );
}

function MarqueeBatch() {
  return (
    <>
      <span>Award Winning Agency 2023</span>
      <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
      <span>$500M+ Property Managed</span>
      <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
      <span>98% Auction Success Rate</span>
      <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
      <span>Over 2,000 Happy Clients</span>
      <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></span>
    </>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 border border-zinc-300 flex items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300">
      {icon}
    </a>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <a href="#" className="text-zinc-600 hover:text-zinc-900 text-sm font-light transition-colors">
        {label}
      </a>
    </li>
  );
}
