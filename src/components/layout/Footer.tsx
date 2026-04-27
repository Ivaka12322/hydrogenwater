import { Link } from 'react-router-dom';
import { Droplet, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white/90 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {/* Brand */}
          <div className="space-y-1">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <Droplet className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
              <span className="font-semibold text-base tracking-tight text-white">
                Hydrogen<span className="text-brand-primary">Health</span>
              </span>
            </Link>
            <p className="font-medium text-brand-light opacity-90 uppercase tracking-widest text-[9px]">Върховната йонизирана вода</p>
          </div>

          {/* Links */}
          <div className="space-y-1 sm:text-center">
            <h3 className="font-semibold text-xs tracking-tight text-white">Бързи връзки</h3>
            <ul className="flex flex-col sm:flex-row sm:justify-center gap-2 text-[10px]">
              <li><a href="/#contact" className="text-white/60 hover:text-brand-primary transition-colors">Контакти</a></li>
              <li><a href="/#faq" className="text-white/60 hover:text-brand-primary transition-colors">Често задавани въпроси</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-1 sm:text-right">
            <h3 className="font-semibold text-xs tracking-tight text-white">Връзка с нас</h3>
            <ul className="flex flex-col sm:inline-flex space-y-1 text-[10px]">
              <li className="flex items-center sm:justify-end gap-2 text-white/70">
                <Phone className="w-3 h-3 text-brand-primary shrink-0" />
                <span>0884178090</span>
              </li>
              <li className="flex items-center sm:justify-end gap-2 text-white/70">
                <Mail className="w-3 h-3 text-brand-primary shrink-0" />
                <span>info@hydrogenhealth.bg</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 text-[9px] text-white/40">
          <p>© {new Date().getFullYear()} Hydrogen Health. Всички права запазени.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Политика за поверителност</Link>
            <Link to="#" className="hover:text-white transition-colors">Общи условия</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
