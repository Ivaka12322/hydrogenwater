import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, Clock, Truck, HeartPulse, Droplet, ShieldPlus, 
  Plus, Minus, ArrowRight, Activity, Zap, Phone, Mail
} from 'lucide-react';
import { cn } from '../lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isTableExpanded, setIsTableExpanded] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Какво е водородна алкална вода?",
      a: "Водородната вода е пречистена вода, наситена с повишени нива на молекулен водород. Тя демонстрира обещаващи здравословни ползи чрез способността си да смекчава оксидативния стрес и възпалението, повишава енергията и подобрява хидратацията."
    },
    {
      q: "Какво е ORP?",
      a: "ORP (Окислително-редукционен потенциал) е мярка за антиоксидантна мощност. Отрицателният ORP означава, че водата действа като мощен антиоксидант, неутрализирайки свободните радикали."
    },
    {
      q: "Защо оксидантите са вредни?",
      a: "Окислителите (свободните радикали) увреждат клетките, като вземат електрони от тях. Това води до преждевременно стареене, биологични увреждания и различни заболявания."
    },
    {
      q: "Какво да очаквам от пиене на алкална вода?",
      a: "Повече енергия, по-здравословен метаболизъм и по-добра хидратация. Водата има по-гладък вкус и прави напитките (кафе, чай) много по-ароматни. Промените са постепенни и се натрупват с времето."
    },
    {
      q: "Какво е GRID технология?",
      a: "GRID технологията™ увеличава времето, което водата прекарва върху плочите, благодарение на масив от платинени титаниеви плочи. Това увеличава електрическия заряд, осигурявайки по-висок pH и отрицателен ORP."
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Hero_bg_2.png"
            alt="Hydrogen Health Hero Background"
            className="w-full h-full object-cover object-center md:transform-none scale-110 -translate-x-[30px] md:scale-100 md:translate-x-0"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Повишете имунитета си <span className="block text-brand-light">отвътре навън</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl font-light tracking-wide drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Свободни радикали? Не, благодаря. Зареждайте клетките си всеки ден.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Link 
              to="/product" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary hover:bg-brand-primary-light text-white rounded-full font-medium text-lg transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Научете повече
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full font-medium text-lg transition-all"
            >
              Контакти
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. TRUST INDICATORS */}
      <motion.section 
        className="bg-white py-10 border-b border-gray-100 relative -mt-8 z-20 rounded-t-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {[
            { icon: ShieldCheck, title: "CE/SGS сертификация", subtitle: "Международни стандарти" },
            { icon: Clock, title: "8,000 часа живот", subtitle: "Дълготрайна работа" },
            { icon: Truck, title: "2 дни доставка", subtitle: "Бърза и сигурна" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="flex items-center justify-center gap-4 pt-4 md:pt-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <item.icon className="w-10 h-10 text-brand-primary shrink-0" />
              <div className="text-left">
                <h4 className="font-semibold text-text-main text-lg tracking-tight">{item.title}</h4>
                <p className="text-sm text-text-muted">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 3. BENEFITS */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span 
            className="text-brand-primary font-semibold tracking-wider uppercase text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Какво получавате
          </motion.span>
          <motion.h2 
            className="mt-2 text-3xl md:text-5xl font-bold text-text-main mb-16 tracking-tight max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Открийте как ще се възползвате от жива водородна™ вода
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "По-здравословен начин на живот",
                desc: "За всички чрез водата, която пием. Усетете разликата в ежедневието си.",
                img: "/running%20people.jpg",
                icon: HeartPulse
              },
              {
                title: "Богата на водород",
                desc: "Повишава енергията, подобрява хидратацията и подпомага клетъчното здраве.",
                img: "/Bubble%20water.webp",
                icon: Droplet
              },
              {
                title: "Мощни антиоксиданти",
                desc: "Помагат за неутрализиране на вредните свободни радикали и забавят стареенето.",
                img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&q=80",
                icon: ShieldPlus
              }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-[20px] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col group"
              >
                <div className="h-56 w-full relative overflow-hidden">
                  <img
                    src={benefit.img}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 bg-white flex-1 flex flex-col text-left">
                  <h3 className="text-2xl font-bold text-text-main mb-4 tracking-tight">{benefit.title}</h3>
                  <p className="text-text-muted leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span 
              className="text-brand-primary font-semibold tracking-wider uppercase text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Лесно и бързо
            </motion.span>
            <motion.h2 
              className="mt-2 text-xl md:text-5xl font-bold text-text-main tracking-tight max-w-4xl mx-auto leading-tight px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="md:hidden text-base opacity-70 block mb-2 uppercase tracking-widest">Процесът е лесен:</span>
              <span className="md:hidden">Вашата система в 3 стъпки</span>
              <span className="hidden md:inline">Намирането на вашата персонализирана водна система е толкова лесно, колкото 1-2-3</span>
            </motion.h2>
          </div>

          <motion.div 
            className="flex flex-col md:flex-row relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Desktop Connectors */}
            <div className="hidden md:block absolute top-[60px] left-10 right-10 h-[2px] bg-brand-primary/20 border-dashed border-t-2" />
            
            {/* Step 1 */}
            <motion.div variants={itemVariants} className="flex-1 relative pb-16 md:pb-0 text-center px-4">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto bg-brand-primary text-white rounded-full flex items-center justify-center text-xl md:text-3xl font-bold mb-8 relative z-10 shadow-lg">01</div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-text-main">Безплатен доклад</h3>
              <p className="text-text-muted mb-6">Получете цялостен анализ на водата, за да откриете вредни замърсители.</p>
              <Activity className="w-12 h-12 mx-auto text-brand-accent/50" />
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={itemVariants} className="flex-1 relative pb-16 md:pb-0 text-center px-4">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto bg-brand-primary text-white rounded-full flex items-center justify-center text-xl md:text-3xl font-bold mb-8 relative z-10 shadow-lg">02</div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-text-main">Изберете система</h3>
              <p className="text-text-muted mb-6">Ще ви помогнем да изберете идеалната система персонализирана за вас.</p>
              <Settings className="w-12 h-12 mx-auto text-brand-accent/50" />
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={itemVariants} className="flex-1 relative text-center px-4">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto bg-brand-primary text-white rounded-full flex items-center justify-center text-xl md:text-3xl font-bold mb-8 relative z-10 shadow-lg">03</div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-text-main">Бърза доставка</h3>
              <p className="text-text-muted mb-6">Получете системата си доставена само за 2 дни с пълна поддръжка.</p>
              <Truck className="w-12 h-12 mx-auto text-brand-accent/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. PH SCIENCE */}
      <section id="ph-table" className="py-12 bg-gradient-to-b from-brand-light/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="order-1 md:order-1 rounded-[24px] shadow-xl relative bg-white p-4 md:p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-lg md:text-xl font-bold text-text-main mb-4 md:mb-6 text-center">Таблица с различни Ph на водата</h3>
              <div 
                className="cursor-pointer group relative"
                onClick={() => setIsTableExpanded(true)}
              >
                <img 
                  src="/Ph%20bg.png" 
                  alt="PH Science Background" 
                  className="w-full h-auto object-contain drop-shadow-lg max-h-[750px] mx-auto transition-transform group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center rounded-xl">
                  <div className="opacity-0 group-hover:opacity-100 bg-white/90 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                    <Plus className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
                <div className="mt-4 text-center md:hidden">
                  <span className="text-xs text-text-muted font-medium bg-gray-100 px-3 py-1 rounded-full">Кликни за преглед на цял екран</span>
                </div>
              </div>

              {/* Modal for Expanded Table */}
              <AnimatePresence>
                {isTableExpanded && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    onClick={() => setIsTableExpanded(false)}
                  >
                    <motion.div 
                      key="expanded-table"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="relative max-w-5xl w-full bg-white rounded-3xl p-4 md:p-8 overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button 
                        className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        onClick={() => setIsTableExpanded(false)}
                      >
                        <Minus className="w-6 h-6 text-text-main" />
                      </button>
                      
                      <div className="overflow-auto max-h-[85vh]">
                        <img 
                          src="/Ph%20bg.png" 
                          alt="PH Science Background Expanded" 
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="order-2 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* This entire block is hidden on mobile */}
              <div className="hidden md:block">
                <h2 className="text-2xl md:text-4xl font-bold text-text-main mb-4 tracking-tight leading-tight">
                  Разделянето на йоните: Какво го отличава
                </h2>
                <p className="text-base text-text-muted mb-6 leading-relaxed">
                  Водата, богата на водород, е бъдещето на хидратацията и жизнеността. Подкрепени от научни изследвания, системите ни предоставят превъзходна вода за здраве.
                </p>
                
                <motion.div 
                  className="space-y-4 mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { icon: Droplet, title: "Алкална вода (pH 8.0-11)", desc: "Неутрализира киселинността в тялото и поддържа оптимален pH баланс." },
                    { icon: ShieldPlus, title: "ORP Антиоксидантна мощност", desc: "Улавя и изхвърля вредните свободни радикали, забавяйки стареенето." },
                    { icon: Zap, title: "GRID технология™", desc: "Максимален контакт между водата и титаниевите плочи за перфектна йонизация." }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={itemVariants}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 shrink-0 rounded-full bg-brand-light flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-main tracking-tight">{item.title}</h3>
                        <p className="text-sm text-text-muted">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Button is visible on both, but centered on mobile */}
              <div className="flex justify-center md:justify-start">
                <motion.a 
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10816294/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-bold text-brand-primary hover:text-brand-primary-light transition-colors group text-base md:text-lg bg-brand-light md:bg-transparent px-8 py-3 md:p-0 rounded-full md:rounded-none shadow-sm md:shadow-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Научете повече за технологията
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-text-main tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Често задавани въпроси
            </motion.h2>
            <motion.p 
              className="text-lg text-text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Намерете отговори на най-често срещаните въпроси.
            </motion.p>
          </div>

          <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  openFaq === index ? "border-brand-primary/30 shadow-md bg-white" : "border-gray-100 bg-gray-50/50 hover:bg-gray-50"
                )}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-lg text-text-main pr-8">{faq.q}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                    openFaq === index ? "bg-brand-primary text-white" : "bg-white text-brand-primary shadow-sm"
                  )}>
                    {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-6 text-text-muted leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section id="contact" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-brand-primary rounded-[60px] md:rounded-[120px] py-16 md:py-24 px-8 relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay object-cover"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Готови ли сте да подобрите здравето си?
              </motion.h2>
              <motion.p 
                className="text-xl text-brand-light/90 mb-10 max-w-2xl mx-auto font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Поръчайте вашата Hydrogen Health система днес и направете крачка към балансиран живот.
              </motion.p>
              <motion.div 
                className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-full lg:w-auto flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md px-8 py-5 rounded-[30px] border border-white/20 flex-1 hover:bg-white/20 transition-colors">
                  <Phone className="w-8 h-8 text-brand-light" />
                  <div className="text-left">
                    <p className="text-xs text-brand-light/70 uppercase tracking-widest font-bold mb-1">Телефон</p>
                    <p className="text-xl font-extrabold text-white">0884178090</p>
                  </div>
                </div>
                
                <div className="w-full lg:w-auto flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md px-8 py-5 rounded-[30px] border border-white/20 flex-1 hover:bg-white/20 transition-colors">
                  <Mail className="w-8 h-8 text-brand-light" />
                  <div className="text-left">
                    <p className="text-xs text-brand-light/70 uppercase tracking-widest font-bold mb-1">Имейл</p>
                    <p className="text-xl font-extrabold text-white">info@hydrogenhealth.bg</p>
                  </div>
                </div>
                
                <div className="w-full lg:w-auto flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md px-8 py-5 rounded-[30px] border border-white/20 flex-1 hover:bg-white/20 transition-colors">
                  <Clock className="w-8 h-8 text-brand-light" />
                  <div className="text-left">
                    <p className="text-xs text-brand-light/70 uppercase tracking-widest font-bold mb-1">Работно време</p>
                    <p className="text-xl font-extrabold text-white">09:30 - 17:00</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Quick component for Settings icon that was missing from lucide imports
function Settings(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
