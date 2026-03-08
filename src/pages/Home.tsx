import { useEffect } from "react";
import { motion } from "motion/react";
import { Wrench, Gauge, Clock, CheckCircle, ChevronRight, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2574&auto=format&fit=crop" 
            alt="Clean Engine Bay" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center -mt-16 md:-mt-24"
          >
            <img 
              src="https://drive.google.com/thumbnail?id=12r0hKSKqsKS3Y8HQ2HQubE02-_kc8STB&sz=w800" 
              alt="Euro Motor Clinic Logo" 
              className="h-24 md:h-36 lg:h-48 w-auto mb-8 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-brand-green/30 text-sm font-bold text-brand-green mb-6 backdrop-blur-sm">
              10+ Years of Local Reliability
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
              Precision Engineering.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-yellow">Unmatched Performance.</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
              From major services to specialized Lexus V8 & Nissan RB conversions. We offer a 'Drop & Go' experience for total peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#book" className="px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-slate-950 text-lg font-bold rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-brand-green/20">
                Book a Service <ChevronRight className="w-5 h-5" />
              </a>
              <Link to="/outlaw-conversions" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-brand-yellow text-lg font-bold rounded-xl transition-all border border-brand-yellow/50 flex items-center justify-center gap-2">
                Explore Conversions <Gauge className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-slate-800 bg-slate-900/80 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
              <div className="flex gap-1 text-brand-yellow mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="font-bold text-white">5-Star Rated Service</p>
              <p className="text-sm text-slate-400">Trusted by hundreds locally</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
              <Clock className="w-8 h-8 text-brand-green mb-2" />
              <p className="font-bold text-white">Drop & Go Convenience</p>
              <p className="text-sm text-slate-400">Collection & delivery available</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
              <CheckCircle className="w-8 h-8 text-brand-yellow mb-2" />
              <p className="font-bold text-white">Certified Experts</p>
              <p className="text-sm text-slate-400">Merseta qualified mechanics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Split Architecture */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Whether you need routine maintenance to keep your daily driver running smoothly, or a custom engine swap to chase your dreams, we have the skills.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Standard Maintenance */}
          <div className="bg-slate-900/90 rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden group hover:border-brand-green/50 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Wrench className="w-32 h-32 text-brand-green" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3 text-white">
                <span className="w-2 h-8 bg-brand-green rounded-full"></span>
                Standard Maintenance
              </h3>
              <p className="text-slate-400 mb-8">Comprehensive care for your vehicle to ensure safety, reliability, and longevity on the road.</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Regular Services</h4>
                  <ul className="space-y-2">
                    {['Replacement of stipulated fluids and parts', 'Verify all other fluid levels', 'Inspection for any fluid leaks', 'Testing of all exterior lights', 'Report on the state of tires and brakes'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Major Services</h4>
                  <ul className="space-y-2">
                    {['Inspection of steering system', 'Inspection of braking system', 'Inspection of electrical systems', 'Inspection of exhaust & cooling systems', 'Inspection of all drive train parts'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Outlaw Performance */}
          <div id="performance" className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 md:p-12 border border-brand-yellow/30 relative overflow-hidden group hover:border-brand-yellow/60 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Gauge className="w-32 h-32 text-brand-yellow" />
            </div>
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                Specialized Division
              </div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3 text-white">
                <span className="w-2 h-8 bg-brand-yellow rounded-full"></span>
                Outlaw Performance Conversions
              </h3>
              <p className="text-slate-400 mb-8">For the enthusiasts. We take on the unique challenges of performance tuning and custom engine enhancements.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-brand-yellow mb-1">Lexus V8 Swaps</h4>
                  <p className="text-sm text-slate-400">Expert installation and tuning for reliable V8 power.</p>
                </div>
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-brand-yellow mb-1">Nissan RB Builds</h4>
                  <p className="text-sm text-slate-400">High-performance RB series engine rebuilds and tuning.</p>
                </div>
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-brand-yellow mb-1">Custom Fabrication</h4>
                  <p className="text-sm text-slate-400">Bespoke mounts, exhausts, and piping for unique setups.</p>
                </div>
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-brand-yellow mb-1">Engine Rebuilds</h4>
                  <p className="text-sm text-slate-400">Complete tear-downs and performance rebuilds.</p>
                </div>
              </div>
              
              <Link to="/outlaw-conversions" className="inline-flex items-center gap-2 text-brand-yellow hover:text-brand-yellow-hover font-bold transition-colors">
                View Conversion Details <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Gallery */}
      <section id="gallery" className="py-24 bg-slate-900/80 border-y border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">The Workshop</h2>
              <p className="text-slate-400 text-lg max-w-xl">A glimpse into our daily operations and recent performance conversion projects.</p>
            </div>
            <a href="#" className="text-brand-green hover:text-brand-green-hover font-bold flex items-center gap-2">
              View full gallery <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group border border-slate-800">
              <img src="https://drive.google.com/thumbnail?id=1qVkQUO7TkGszhE_iSecjezzMb2jgAlvC&sz=w1200" alt="Workshop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-brand-green font-bold text-xl">Main Workshop Floor</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative group border border-slate-800">
              <img src="https://drive.google.com/thumbnail?id=1AM2cvNsWbjMIZxzUSgbm_9t_lrFKQLrq&sz=w800" alt="Engine Build" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-brand-yellow font-bold text-lg">Lexus V8 Build</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative group border border-slate-800">
              <img src="https://drive.google.com/thumbnail?id=1djKidJT9TEXcUL_tIezWdWwNosN4SPG1&sz=w800" alt="Performance Car" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-brand-green font-bold text-lg">Dyno Tuning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Meet the Experts</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">The passionate minds behind Euro Motor Clinic and Outlaw Performance Conversions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Ferdi */}
          <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 flex flex-col items-center text-center group hover:border-brand-green/50 transition-colors">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-800 group-hover:border-brand-green transition-colors">
              <img src="https://drive.google.com/thumbnail?id=1b6nngJclIqGt4qGeXxU124rEcyMaJWJc&sz=w800" alt="Ferdi" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Ferdi</h3>
            <p className="text-brand-green font-bold mb-4">"Big Cheese" / Co-Founder</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              From a young age Ferdi has had a love affair with 2 strokes and continuously tinkered with them. Since 1996 the love affair grew bigger and faster. Today he is assisting clients to chase their dreams by sharing his passion for tweaking.
            </p>
          </div>

          {/* Francois */}
          <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 flex flex-col items-center text-center group hover:border-brand-yellow/50 transition-colors">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-800 group-hover:border-brand-yellow transition-colors">
              <img src="https://drive.google.com/thumbnail?id=1BhTejtgZV01f7hh6rWkL5daBuTvrZ649&sz=w800" alt="Francois" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Francois</h3>
            <p className="text-brand-yellow font-bold mb-4">"Big Mac" / Co-Founder</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              His love for motor vehicles started from a young age when helping his dad fixing up cars at home. He started his career in the mechanical trade in 1997 and qualified as a motor mechanic from Merseta. To this day he can still burn the mid-night oil to ensure any custom job is completed on time.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-slate-950 border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 text-brand-yellow mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-current" />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Trusted by the Community</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We're proud to have earned <strong className="text-white">over 150+ 5-Star Google Reviews</strong>. Here's what some of our clients have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Review 1 */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-brand-green/30 transition-colors">
              <div className="flex gap-1 text-brand-yellow mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-300 mb-6 italic">"Ferdi and Francois are absolute legends. They did a Lexus V8 conversion on my Hilux and the workmanship is incredible. Highly recommend Euro Motor Clinic for any performance upgrades!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold">MD</div>
                <div>
                  <p className="text-white font-bold text-sm">Mark D.</p>
                  <p className="text-slate-500 text-xs">Google Review</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-brand-yellow/30 transition-colors">
              <div className="flex gap-1 text-brand-yellow mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-300 mb-6 italic">"Been taking my cars here for years for major services. The Drop & Go convenience is a lifesaver, and they always keep me updated. Honest, reliable mechanics."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold">ST</div>
                <div>
                  <p className="text-white font-bold text-sm">Sarah T.</p>
                  <p className="text-slate-500 text-xs">Google Review</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-brand-green/30 transition-colors">
              <div className="flex gap-1 text-brand-yellow mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-300 mb-6 italic">"Took my Nissan RB build to them after another shop messed it up. Francois sorted out the ECU and tuning perfectly. The car runs like a dream now."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold">JM</div>
                <div>
                  <p className="text-white font-bold text-sm">Jason M.</p>
                  <p className="text-slate-500 text-xs">Google Review</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Review 4 */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-brand-yellow/30 transition-colors">
              <div className="flex gap-1 text-brand-yellow mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-300 mb-6 italic">"Excellent service from the team. They explained everything clearly and didn't try to upsell me on things I didn't need. 5-star experience all the way."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold">DR</div>
                <div>
                  <p className="text-white font-bold text-sm">David R.</p>
                  <p className="text-slate-500 text-xs">Google Review</p>
                </div>
              </div>
            </div>

            {/* Review 5 */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-brand-green/30 transition-colors">
              <div className="flex gap-1 text-brand-yellow mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-300 mb-6 italic">"Best workshop in Bellville! Their attention to detail on custom fabrication is next level. You can tell they are truly passionate about what they do."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold">MB</div>
                <div>
                  <p className="text-white font-bold text-sm">Michael B.</p>
                  <p className="text-slate-500 text-xs">Google Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section id="book" className="py-24 bg-slate-900/90 border-t border-slate-800 relative overflow-hidden z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-950 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Book Your Service</h2>
              <p className="text-slate-400">Fill out the form below and we'll get back to you to confirm your appointment.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-green mb-2">Full Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-green mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors" placeholder="072 222 7788" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-green mb-2">Vehicle Make & Model</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors" placeholder="e.g. VW Golf GTI" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-green mb-2">Service Type</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors appearance-none">
                    <option>Minor Service</option>
                    <option>Major Service</option>
                    <option>Performance Conversion</option>
                    <option>Diagnostics / Repair</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-green mb-2">Additional Notes</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors" placeholder="Tell us what you need..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-brand-green hover:bg-brand-green-hover text-slate-950 font-black uppercase tracking-wider rounded-xl transition-colors text-lg">
                Request Booking
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
