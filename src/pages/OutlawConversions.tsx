import { motion } from "motion/react";
import { CheckCircle, AlertTriangle, Gauge, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function OutlawConversions() {
  return (
    <main className="flex-grow pt-24">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600705722908-bab1e6190b05?q=80&w=2670&auto=format&fit=crop" 
            alt="Engine Build" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-4 bg-brand-yellow/10 rounded-full mb-6 border border-brand-yellow/20">
              <Gauge className="w-8 h-8 text-brand-yellow" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Outlaw Performance <span className="text-brand-yellow">Conversions</span>
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">
              Our passion is to assist you to enhance the performance of your vehicle. We discuss upgrade options in detail with our clients to ensure that the upgrades fitted will suit the initial requirements as best possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Engine Conversions */}
          <div className="bg-slate-900/90 rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Wrench className="w-32 h-32 text-brand-green" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-brand-green border-b border-slate-800 pb-4">Engine Conversions</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We convert vehicles to various new or imported engines that can give your vehicle a new lease of life or increase the performance levels to your satisfaction. Currently the <strong className="text-white">Lexus V8 1UZ, Nissan RB25 and RB26</strong> remain the most popular conversions with our clients.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">Your conversion may include:</h3>
              <ul className="space-y-3">
                {[
                  'Full service on the new engine',
                  'Adaptor plate and clutch modifications',
                  'Gearbox replacement/upgrade',
                  'Differential replacement/upgrade',
                  'Radiator pressure test/upgrade',
                  'Engine management integration',
                  'Ensure all existing systems work',
                  'New exhaust system (also S/Steel)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Performance Upgrades */}
          <div className="bg-slate-900/90 rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Gauge className="w-32 h-32 text-brand-yellow" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-brand-yellow border-b border-slate-800 pb-4">Performance Upgrades</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We can offer you the following upgrade options to maximize your vehicle's potential and deliver the exhilarating driving experience you're looking for.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">Available Upgrades:</h3>
              <ul className="space-y-3">
                {[
                  'Turbo charger installation',
                  'Turbo charger upgrades',
                  'Twin Turbo charging',
                  'Intercooler upgrades',
                  'Stainless Steel boost pipes',
                  'Spitronics ECU installation',
                  'Cylinder modifications',
                  'CAM modifications',
                  'Water Methanol Kits'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 bg-slate-950 border border-brand-yellow/30 rounded-2xl p-6 md:p-8 flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-brand-yellow shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Important Note on Upgrades</h4>
            <p className="text-slate-400 leading-relaxed">
              Obviously each upgrade may require additional modifications to your vehicle and we will responsibly point these out, i.e. your bakkie gaining an additional 200+KW from a turbo charged Lexus conversion will simply not be able to stop adequately with standard brakes.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/#book" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-yellow hover:bg-brand-yellow-hover text-slate-950 text-lg font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-brand-yellow/20">
            Discuss Your Build <Wrench className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
