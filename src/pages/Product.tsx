import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Check, Phone, Zap, ArrowRight, Activity, Beaker,
  ShieldCheck, ArrowDown, Mail, Search, Droplets, BatteryCharging, Droplet,
  HeartPulse, Clock, ChevronLeft, ChevronRight, ChevronDown, FileSearch
} from 'lucide-react';

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

const MobileAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            title: "Как работи?",
            icon: <Droplet className="w-5 h-5 flex-shrink-0" />,
            content: (
                <div className="text-sm text-text-muted space-y-2">
                    <p>Водата преминава през съвременен процес:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Филтрация:</strong> Двустепенен филтър.</li>
                        <li><strong>Електролиза:</strong> 11 титаниеви плочи.</li>
                        <li><strong>Йонизация:</strong> Обогатяване с активен водород.</li>
                        <li><strong>Изход:</strong> Вода с идеално pH.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Сертификати",
            icon: <ShieldCheck className="w-5 h-5 flex-shrink-0" />,
            content: (
                <ul className="text-sm text-text-muted space-y-2 list-disc pl-5">
                    <li>CE Сертификат за съответствие с европейските стандарти</li>
                    <li>SGS международен сертификат за качество</li>
                    <li>Медицински клас материали без BPA (BPA-free)</li>
                </ul>
            )
        },
        {
            title: "Технически характеристики",
            icon: <FileSearch className="w-5 h-5 flex-shrink-0" />,
            content: (
                <ul className="text-sm text-text-muted space-y-2 list-disc pl-5">
                    <li><strong>Плочи:</strong> 11 платинени титаниеви плочи</li>
                    <li><strong>pH диапазон:</strong> от 3.5 до 10.5</li>
                    <li><strong>ORP:</strong> до -800mV</li>
                    <li><strong>Интерфейс:</strong> сензорен дисплей</li>
                </ul>
            )
        }
    ];

    return (
        <div className="md:hidden w-full mt-8 border-t border-b border-gray-100 divide-y divide-gray-100 mb-8 bg-white">
            {items.map((item, index) => (
                <div key={index} className="overflow-hidden">
                    <button 
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                    >
                        <div className="flex items-center gap-3 text-text-main font-semibold">
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                        <ChevronDown 
                            className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                        />
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pb-4 pt-1 px-8">
                                    {item.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default function Product() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeSpec, setActiveSpec] = useState<number | null>(null);
  const phCarouselRef = useRef<HTMLDivElement>(null);
  const testimonialCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add('product-page');
    return () => {
      document.body.classList.remove('product-page');
    };
  }, []);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const itemWidth = ref.current.firstElementChild?.clientWidth || 350;
      const scrollAmount = direction === 'left' ? -(itemWidth + 20) : (itemWidth + 20);
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pt-20">
      <style>{`
        /* ===== MOBILE PRODUCT PAGE SPACING FIX ===== */
        @media (max-width: 767px) {
          body.product-page section {
            padding-top: 24px !important;
            padding-bottom: 24px !important;
          }
          body.product-page .product-hero-image {
            max-height: 250px !important;
            margin-bottom: 16px !important;
          }
          body.product-page .product-info {
            margin-top: 16px !important;
          }
          body.product-page .product-name, body.product-page .product-hero h1 {
            margin-top: 8px !important;
            margin-bottom: 8px !important;
            font-size: 28px !important;
          }
          body.product-page .product-description, body.product-page .product-tagline {
            margin-top: 8px !important;
            margin-bottom: 8px !important;
            font-size: 14px !important;
            line-height: 1.5 !important;
          }
          body.product-page .feature-list li {
            margin-bottom: 8px !important;
            padding: 8px !important;
          }
          body.product-page .product-cta, body.product-page .contact-button {
            margin-top: 16px !important;
            margin-bottom: 16px !important;
          }
          body.product-page .card, body.product-page .spec-card, body.product-page .benefit-card {
            padding: 16px !important;
            margin-bottom: 16px !important;
          }
          body.product-page .grid, body.product-page .benefits-grid, body.product-page .specs-grid {
            gap: 16px !important;
          }
          body.product-page h2 + *, body.product-page h3 + * {
            margin-top: 12px !important;
          }
          body.product-page .icon + .text, body.product-page .benefit-icon + .benefit-text {
            margin-top: 8px !important;
          }
          body.product-page .video-container {
            margin-top: 16px !important;
            margin-bottom: 16px !important;
          }
          body.product-page td, body.product-page th {
            padding: 8px !important;
          }
          body.product-page .form-field + .form-field {
            margin-top: 16px !important;
          }
        }
        
        /* Hide scrollbars for carousels */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {/* 2.1 PRODUCT HERO SECTION */}
      <section className="bg-white py-16 md:py-24 overflow-hidden product-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Product Image */}
            <motion.div
              className="order-1 md:order-1 flex justify-center relative w-full sm:w-auto"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-brand-light rounded-[40px] transform -rotate-3 scale-75 sm:scale-90 z-0"></div>
              <img
                src="/System.png"
                alt="Hydrogen Health 808"
                className="relative z-10 w-full max-w-xs sm:max-w-lg lg:max-w-3xl rounded-2xl shadow-2xl object-contain aspect-[4/5] bg-white p-1 sm:p-2 product-hero-image"
              />
            </motion.div>
            
            {/* Product Info */}
            <motion.div 
              className="order-2 md:order-2 product-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-4 bg-brand-light text-brand-primary text-sm font-semibold tracking-wider uppercase rounded-full mb-6 product-tagline">
                Нов продукт
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4 tracking-tight leading-tight product-name">
                Hydrogen Health <span className="text-brand-primary">808</span>
              </h1>
              <p className="text-xl text-text-muted mb-8 italic product-description">
                Алкален воден йонизатор с 11 плочи
              </p>
              
              <div className="flex gap-4 mb-8">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 border border-gray-200 rounded-md">
                  <ShieldCheck className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium text-gray-600">CE Сертификат</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 border border-gray-200 rounded-md">
                  <ShieldCheck className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-medium text-gray-600">SGS Одобрен</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 feature-list">
                {[
                  "11 платинени титаниеви плочи за пречистване",
                  "Широк pH диапазон 3.5 - 10.5",
                  "Гарантирани 8,000 часа живот на електродите",
                  "Интелигентна функция за самопочистване"
                ].map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-brand-primary" />
                    </div>
                    <span className="text-text-main">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 product-cta">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary hover:bg-brand-primary-light text-white rounded-full font-medium text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 contact-button"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Свържете се за поръчка
                </a>
              </div>

              <MobileAccordion />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2.2 DETAILED SPECS */}
      <section className="hidden md:block py-24 bg-brand-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-text-main tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Технически характеристики
            </motion.h2>
            <motion.p 
              className="text-lg text-text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Всичко, което трябва да знаете за Hydrogen Health 808
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 specs-grid grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { id: 1, img: "/technology.jpg", alt: "Технология", icon: Zap, title: "Технология" },
              { id: 2, img: "/battery.jpg", alt: "Производителност", icon: Activity, title: "Производителност" },
              { id: 3, img: "/design.webp", alt: "Дизайн", icon: Search, title: "Дизайн" },
              { id: 4, img: "/centification.jpg", alt: "Поддръжка", icon: ShieldCheck, title: "Поддръжка" }
            ].map((spec, idx) => {
              const isExpanded = activeSpec === spec.id;
              return (
            <motion.div
              key={spec.id}
              variants={itemVariants}
              onClick={() => setActiveSpec(isExpanded ? null : spec.id)}
              className={`bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col overflow-hidden group spec-card card cursor-pointer ${
                isExpanded ? 'lg:col-span-2 lg:row-span-2 min-h-96' : ''
              }`}
            >
              <div className={`${isExpanded ? 'h-72' : 'h-56'} w-full relative overflow-hidden bg-gray-100 transition-all duration-300`}>
                <img
                  src={spec.img}
                  alt={spec.alt}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    isExpanded ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                    <spec.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">{spec.title}</h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                {idx === 0 && (
                  <ul className="space-y-4 text-text-muted">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>11 платинени плочи</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>GRID технология™</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>pH: 3.5 - 10.5</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>ORP: До -800mV</span>
                    </li>
                  </ul>
                )}
                {idx === 1 && (
                  <ul className="space-y-4 text-text-muted">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>Живот: 8,000 часа</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>Консумация: 200W</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>Висок дебит</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>Самопочистване</span>
                    </li>
                  </ul>
                )}
                {idx === 2 && (
                  <ul className="space-y-4 text-text-muted">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>Компактен размер</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>Премиум материали</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>Черен + Сребро</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>LCD дигитален дисплей</span>
                    </li>
                  </ul>
                )}
                {idx === 3 && (
                  <ul className="space-y-4 text-text-muted">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>Дълга гаранция</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>CE, SGS Сертификати</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>Техническа помощ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 flex-shrink-0" />
                      <span>Налични резервни филтри</span>
                    </li>
                  </ul>
                )}
              </div>
            </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 2.3 HOW THE PRODUCT WORKS */}
      <section className="hidden md:block py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              className="text-brand-primary font-semibold tracking-wider uppercase text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Вашата система в четири стъпки
            </motion.span>
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-text-main tracking-tight mb-4 text-balance mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Как работи Hydrogen Health <span className="text-brand-primary">808</span>?
            </motion.h2>
            <motion.p
              className="text-lg text-text-muted mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Научната основа зад технологията в четири лесни стъпки
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col md:flex-row gap-4 min-h-[450px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {(() => {
              const steps = [
                {
                  id: 1,
                  title: "Филтрация",
                  description: "Високотехнологичен двустепенен филтър премахва хлор, тежки метали, пестициди и бактерии, като същевременно запазва полезните минерали във водата.",
                  image: "/filtration.webp",
                  icon: "1"
                },
                {
                  id: 2,
                  title: "Електролиза",
                  description: "Водата преминава през секция с 11 платинени титаниеви плочи, където чрез електрически заряд се разделя на алкални и киселинни потоци.",
                  image: "/electrolysis.jpg",
                  icon: "2"
                },
                {
                  id: 3,
                  title: "Йонизация",
                  description: "Процесът обогатява водата с активен молекулен водород и създава мощен отрицателен ORP, превръщайки я в силен естествен антиоксидант.",
                  image: "/ionization.jpg",
                  icon: "3"
                },
                {
                  id: 4,
                  title: "Изход",
                  description: "Пречистената и йонизирана вода е готова за консумация. Системата предлага различни нива на pH за пиене, готвене или дезинфекция.",
                  image: "/water%20out.webp",
                  icon: "4"
                }
              ];

              return steps.map((step) => {
                const isExpanded = activeStep === step.id;

                return (
                  <motion.div
                    key={step.id}
                    layout
                    onClick={() => setActiveStep(isExpanded ? null : step.id)}
                    className={`relative cursor-pointer overflow-hidden rounded-[32px] transition-all duration-500 ease-out border border-gray-100 group card ${
                      isExpanded ? 'md:flex-[3] md:min-h-[600px] ring-2 ring-brand-primary/20 shadow-2xl z-30' : 'flex-1 hover:bg-gray-50 z-0'
                    }`}
                    initial={false}
                  >
                    <div className={`absolute inset-0 z-0 bg-gray-900 transition-opacity duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                      <img
                        src={step.image}
                        alt={step.title}
                        className={`w-full h-full object-cover object-top transition-all duration-700 ${
                          isExpanded ? 'scale-125' : 'scale-105'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/10 to-transparent pointer-events-none" />
                    </div>

                    <div className={`relative z-10 p-8 h-full flex flex-col transition-all duration-500 ${isExpanded ? 'justify-end text-white min-h-[600px]' : 'justify-center items-center text-center bg-brand-light/30 min-h-[450px]'}`}>
                      <motion.div
                        layout="position"
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-bold mb-6 shadow-sm transition-all duration-300 ${
                          isExpanded ? 'bg-brand-primary text-white scale-90' : 'bg-white text-brand-primary scale-100'
                        }`}
                      >
                        <span className="text-xl">{step.icon}</span>
                      </motion.div>

                      <motion.h4 layout="position" className={`font-bold transition-all duration-300 ${isExpanded ? 'text-2xl mb-4' : 'text-lg mb-2 text-text-main group-hover:text-brand-primary'}`}>
                        {step.title}
                      </motion.h4>

                      <AnimatePresence mode="wait">
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          >
                            <p className="text-white/90 text-base md:text-lg max-w-lg leading-relaxed font-light">
                              {step.description}
                            </p>
                          </motion.div>
                        )}
                        {!isExpanded && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold opacity-60"
                          >
                            Кликни за детайли
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              });
            })()}
          </motion.div>
        </div>
      </section>

      {/* 2.4 PH WATER USAGE GUIDE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-text-main tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ръководство за употреба на pH нива
            </motion.h2>
            <motion.p 
              className="text-lg text-text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Открийте правилния pH за всяка цел
            </motion.p>
          </div>

          <div className="relative group">
            <button
              onClick={() => scroll(phCarouselRef, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-brand-primary border border-gray-100 opacity-0 md:hidden group-hover:opacity-100 transition-opacity hover:bg-brand-primary hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll(phCarouselRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-brand-primary border border-gray-100 opacity-0 md:hidden group-hover:opacity-100 transition-opacity hover:bg-brand-primary hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div 
              ref={phCarouselRef}
              className="flex gap-6 overflow-x-auto pb-8 pt-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Acidic */}
              <motion.div variants={itemVariants} className="w-[85vw] max-w-[350px] snap-center bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100 flex-shrink-0 card">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                  <Beaker className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-2">pH 3.5-5.5 (Киселинна)</h3>
                <p className="font-semibold text-red-700/80 mb-6">Почистване и стерилизация</p>
                <ul className="space-y-3 text-red-900/70">
                  <li>• Грижа за кожата и лицето</li>
                  <li>• Почистване на повърхности</li>
                  <li>• Отстраняване на упорити петна</li>
                </ul>
              </motion.div>

              {/* Neutral / Light Alkaline */}
              <motion.div variants={itemVariants} className="w-[85vw] max-w-[350px] snap-center bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 shadow-md relative z-10 flex-shrink-0 card">
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Ежедневна употреба
                </div>
                <div className="w-12 h-12 bg-green-100 text-brand-primary rounded-full flex items-center justify-center mb-6">
                  <Droplet className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">pH 7.0-8.0 (Неутрална+)</h3>
                <p className="font-semibold text-green-700/80 mb-6">Пиене, Готвене, Медицина</p>
                <ul className="space-y-3 text-green-900/70">
                  <li>• Прием с хапчета и лекарства</li>
                  <li>• Приготвяне на бебешка храна</li>
                  <li>• Ежедневна хидратация и кафе/чай</li>
                </ul>
              </motion.div>

              {/* High Alkaline */}
              <motion.div variants={itemVariants} className="w-[85vw] max-w-[350px] snap-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 flex-shrink-0 card">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">pH 9.0-10.5 (Алкална)</h3>
                <p className="font-semibold text-blue-700/80 mb-6">Спорт и Детоксикация</p>
                <ul className="space-y-3 text-blue-900/70">
                  <li>• След интензивно натоварване</li>
                  <li>• Измиване на зарзават и плодове</li>
                  <li>• Максимална антиоксидантна мощност</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/#ph-table" className="px-10 py-4 bg-brand-primary text-white rounded-full font-bold text-lg hover:bg-brand-primary-light transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Вижте подробна таблица
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2.5 HEALTH BENEFITS */}
      <section className="py-24 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-text-main tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Здравословни ползи от алкалната вода
            </motion.h2>
            <motion.p 
              className="text-lg text-text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Научно доказани предимства за вашия организъм
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 benefits-grid grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Детоксикация", desc: "Филтрира вредни метали и токсини, подпомагайки черния дроб.", icon: <Activity className="w-6 h-6 text-brand-primary" /> },
              { title: "pH баланс", desc: "Бори се с метаболитния синдром чрез неутрализиране на киселинността.", icon: <Activity className="w-6 h-6 text-brand-primary" /> },
              { title: "Здрави кости", desc: "Предотвратява костна загуба и помага срещу остеопороза.", icon: <Activity className="w-6 h-6 text-brand-primary" /> },
              { title: "По-добра хидратация", desc: "Микроклъстерната структура на водата се усвоява много по-бързо от клетките.", icon: <Droplets className="w-6 h-6 text-brand-primary" /> },
              { title: "Повишава енергията", desc: "Борба срещу млечната киселина и умората след тренировки.", icon: <Zap className="w-6 h-6 text-brand-primary" /> },
              { title: "Сърдечно здраве", desc: "Подпомага кръвообращението and доставя ключови минерали като магнезий.", icon: <HeartPulse className="w-6 h-6 text-brand-primary" /> },
            ].map((benefit, i) => (
              <motion.div key={i} variants={itemVariants} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow benefit-card card">
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-light flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text-main mb-2">{benefit.title}</h4>
                  <p className="text-text-muted leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* 2.7 TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-text-main tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Какво казват клиентите ни
            </motion.h2>
            <motion.p 
              className="text-lg text-text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Реални отзиви от доволни потребители
            </motion.p>
          </div>

          <div className="relative group">
            <button
              onClick={() => scroll(testimonialCarouselRef, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-brand-primary border border-gray-100 opacity-0 md:hidden group-hover:opacity-100 transition-opacity hover:bg-brand-primary hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll(testimonialCarouselRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-brand-primary border border-gray-100 opacity-0 md:hidden group-hover:opacity-100 transition-opacity hover:bg-brand-primary hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div 
              ref={testimonialCarouselRef}
              className="flex gap-8 overflow-x-auto pb-8 pt-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="w-[85vw] max-w-[380px] snap-center p-4 md:p-8 bg-brand-light/30 rounded-3xl border border-brand-light flex-shrink-0 card">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-text-main font-medium italic mb-6">
                  "След 2 месеца употреба се чувствам по-енергичен и хидратиран. Кафето сутрин има съвсем различен, много по-добър вкус!"
                </p>
                <div>
                  <p className="font-bold text-text-main">Димитър Стоянов</p>
                  <p className="text-sm text-text-muted">София, България</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="w-[85vw] max-w-[380px] snap-center p-8 bg-brand-light/30 rounded-3xl border border-brand-light flex-shrink-0 card">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-text-main font-medium italic mb-6">
                  "Отлична инвестиция за здравето на цялото семейство. Използваме различните нива на pH за готвене и почистване. Препоръчвам!"
                </p>
                <div>
                  <p className="font-bold text-text-main">Мария Георгиева</p>
                  <p className="text-sm text-text-muted">Пловдив, България</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="w-[85vw] max-w-[380px] snap-center p-4 md:p-8 bg-brand-light/30 rounded-3xl border border-brand-light flex-shrink-0 card">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-text-main font-medium italic mb-6">
                  "Качеството на водата е видимо подобрено. Кристално чиста е, а децата я пият с много по-голямо удоволствие от преди."
                </p>
                <div>
                  <p className="font-bold text-text-main">Иван Петров</p>
                  <p className="text-sm text-text-muted">Варна, България</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section id="contact" className="py-4 md:py-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-brand-primary rounded-[20px] md:rounded-[40px] py-6 md:py-12 px-3 md:px-8 relative overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay object-cover"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
               <motion.h2 
                className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 md:mb-4 tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Готови ли сте да подобрите здравето си?
              </motion.h2>
              <motion.p 
                className="text-xs sm:text-sm md:text-lg text-brand-light/90 mb-3 md:mb-6 max-w-2xl mx-auto font-light leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Поръчайте вашата Hydrogen Health система днес.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 md:px-6 md:py-4 rounded-[16px] md:rounded-[24px] border border-white/20 hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-brand-light flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-[9px] md:text-[10px] text-brand-light/70 uppercase tracking-widest font-bold">Телефон</p>
                    <p className="text-sm md:text-base font-extrabold text-white">0884178090</p>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 md:px-6 md:py-4 rounded-[16px] md:rounded-[24px] border border-white/20 hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-brand-light flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-[9px] md:text-[10px] text-brand-light/70 uppercase tracking-widest font-bold">Имейл</p>
                    <p className="text-sm md:text-base font-extrabold text-white">info@hydrogenhealth.bg</p>
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
