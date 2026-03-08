import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://drive.google.com/thumbnail?id=12r0hKSKqsKS3Y8HQ2HQubE02-_kc8STB&sz=w800" 
                alt="Euro Motor Clinic Logo" 
                className="h-12 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Professional vehicle maintenance and specialized performance conversions in Bellville.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-brand-green hover:text-slate-950 hover:bg-brand-green transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-brand-yellow">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 shrink-0 text-brand-green" />
                <div>
                  <p>Office: 021-948 3444</p>
                  <p>Mobile: 072-222 7788</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 shrink-0 text-brand-green" />
                <a href="mailto:info@euromotorclinic.co.za" className="hover:text-white transition-colors">info@euromotorclinic.co.za</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-brand-yellow">Location</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 shrink-0 text-brand-green" />
                <p>28C Willow Road,<br />Stikland,<br />Bellville, 7530</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center md:text-left text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Euro Motor Clinic. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Performance.</p>
        </div>
      </div>
    </footer>
  );
}
