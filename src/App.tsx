import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  Menu, X, Phone, MapPin, Clock, Star,
  ChevronRight, Check, GraduationCap, Sparkles,
  Leaf, Flower, Heart, User, Send,
  ShieldCheck, Award, Play
} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { procedures } from './procedures';

// ─── Types ───────────────────────────────────────────────────────────────────

type CourseType = {
  title: string;
  items: string[];
  description: string;
  duration: string;
  certification: string;
};

type StudentModalType = 'login' | 'register' | null;

// ─── Constants ────────────────────────────────────────────────────────────────

const WA_NUMBER = '5511961217932';

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// ─── Course Modal ─────────────────────────────────────────────────────────────

const CourseModal = ({ course, onClose }: { course: CourseType; onClose: () => void }) => {
  const waMessage = encodeURIComponent(
    `Olá! Gostaria de me inscrever no ${course.title}. Poderia me passar mais informações?`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative bg-offwhite rounded-3xl p-8 md:p-12 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-sand z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 bg-sand/40 rounded-full flex items-center justify-center text-wood hover:bg-sand transition-colors"
        >
          <X size={18} />
        </button>

        <p className="text-xs uppercase tracking-widest text-champagne font-bold mb-2">Formação Profissional</p>
        <h3 className="text-2xl md:text-3xl font-serif text-wood mb-4">{course.title}</h3>
        <p className="text-wood/70 leading-relaxed mb-6">{course.description}</p>

        <h4 className="text-sm font-bold uppercase tracking-widest text-wood mb-3">Conteúdo do Curso</h4>
        <ul className="space-y-2 mb-6">
          {course.items.map((item, i) => (
            <li key={i} className="flex items-center text-sm text-wood/70">
              <Check size={14} className="mr-3 text-sage shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-2xl text-center border border-sand">
            <p className="text-xs uppercase tracking-widest text-sage mb-1">Duração</p>
            <p className="font-bold text-wood">{course.duration}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl text-center border border-sand">
            <p className="text-xs uppercase tracking-widest text-sage mb-1">Certificado</p>
            <p className="font-bold text-wood text-sm">Nacional</p>
          </div>
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-sage hover:bg-sage/90 text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.543 5.874L0 24l6.29-1.518A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.804 9.804 0 01-5.032-1.388l-.36-.214-3.733.901.938-3.634-.236-.374A9.775 9.775 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
          </svg>
          Quero me Inscrever via WhatsApp
        </a>
      </motion.div>
    </div>
  );
};

// ─── Service Modal ────────────────────────────────────────────────────────────

const ServiceModal = ({ name, onClose }: { name: string; onClose: () => void }) => {
  const data = procedures[name];
  const waMessage = encodeURIComponent(
    `Olá! Gostaria de agendar o procedimento "${name}". Poderia me passar mais informações?`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative bg-offwhite rounded-3xl p-8 md:p-12 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-sand z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 bg-sand/40 rounded-full flex items-center justify-center text-wood hover:bg-sand transition-colors"
        >
          <X size={18} />
        </button>

        <div className="w-14 h-14 bg-champagne/10 rounded-full flex items-center justify-center mb-5">
          <Sparkles className="text-champagne" size={26} />
        </div>
        <p className="text-xs uppercase tracking-widest text-champagne font-bold mb-2">Procedimento</p>
        <h3 className="text-2xl md:text-3xl font-serif text-wood mb-4">{name}</h3>

        {data ? (
          <>
            <p className="text-wood/70 leading-relaxed mb-6">{data.description}</p>
            <h4 className="text-sm font-bold uppercase tracking-widest text-wood mb-3">Benefícios</h4>
            <ul className="space-y-3 mb-8">
              {data.benefits.map((b, i) => (
                <li key={i} className="flex items-start text-sm text-wood/70">
                  <span className="w-5 h-5 bg-sage/15 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">
                    <Check size={12} className="text-sage" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-wood/70 leading-relaxed mb-8">
            Entre em contato conosco para saber todos os detalhes deste procedimento e como ele pode beneficiar você.
          </p>
        )}

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-sage hover:bg-sage/90 text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.543 5.874L0 24l6.29-1.518A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.804 9.804 0 01-5.032-1.388l-.36-.214-3.733.901.938-3.634-.236-.374A9.775 9.775 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
          </svg>
          Agendar este Procedimento
        </a>
      </motion.div>
    </div>
  );
};

// ─── Student Modal ────────────────────────────────────────────────────────────

const StudentModal = ({ type, onClose, onSwitch }: {
  type: StudentModalType;
  onClose: () => void;
  onSwitch: (t: StudentModalType) => void;
}) => {
  if (!type) return null;

  const isLogin = type === 'login';

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        key={type}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative bg-offwhite rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl border border-sand z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 bg-sand/40 rounded-full flex items-center justify-center text-wood hover:bg-sand transition-colors"
        >
          <X size={18} />
        </button>

        <GraduationCap className="text-sage mb-4" size={32} />
        <h3 className="text-2xl font-serif text-wood mb-2">
          {isLogin ? 'Entrar na Área do Aluno' : 'Tornar-se Aluno'}
        </h3>
        <p className="text-wood/60 text-sm mb-8">
          {isLogin
            ? 'Acesse sua conta para ver seus cursos, aulas e materiais.'
            : 'Faça sua matrícula e tenha acesso imediato à plataforma.'}
        </p>

        <div className="space-y-4 mb-6">
          {!isLogin && (
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-wood mb-2">Nome Completo</label>
              <input type="text" className="w-full bg-white border border-sand rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage/40 text-wood" placeholder="Seu nome completo" />
            </div>
          )}
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-wood mb-2">E-mail</label>
            <input type="email" className="w-full bg-white border border-sand rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage/40 text-wood" placeholder="Seu e-mail" />
          </div>
          {!isLogin && (
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-wood mb-2">WhatsApp</label>
              <input type="tel" className="w-full bg-white border border-sand rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage/40 text-wood" placeholder="(11) 99999-9999" />
            </div>
          )}
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-wood mb-2">Senha</label>
            <input type="password" className="w-full bg-white border border-sand rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sage/40 text-wood" placeholder="••••••••" />
          </div>
        </div>

        <button className="w-full bg-sage hover:bg-sage/90 text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-md hover:shadow-lg mb-4">
          {isLogin ? 'Acessar Conta' : 'Criar Conta'}
        </button>

        <p className="text-center text-sm text-wood/60">
          {isLogin ? 'Ainda não tem conta?' : 'Já tem uma conta?'}{' '}
          <button
            onClick={() => onSwitch(isLogin ? 'register' : 'login')}
            className="text-sage font-bold hover:underline"
          >
            {isLogin ? 'Cadastre-se aqui' : 'Entrar agora'}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Área do Aluno', href: '#aluno' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-offwhite/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={`text-2xl font-serif font-bold tracking-tighter ${scrolled ? 'text-sage' : 'text-white'}`}>Lira Nõra</span>
          <span className={`text-[10px] uppercase tracking-[0.2em] font-sans ${scrolled ? 'text-wood' : 'text-sand'}`}>Spa, Estética & Escola</span>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}
              className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-champagne ${scrolled ? 'text-wood' : 'text-white'}`}>
              {link.name}
            </a>
          ))}
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
            className="bg-champagne hover:bg-champagne/90 text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all transform hover:scale-105">
            Agendar pelo WhatsApp
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-sage' : 'text-white'} /> : <Menu className={scrolled ? 'text-sage' : 'text-white'} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-offwhite border-t border-sand overflow-hidden">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                  className="text-wood text-sm uppercase tracking-widest font-medium">{link.name}</a>
              ))}
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="bg-sage text-white px-6 py-4 rounded-lg text-center text-xs uppercase tracking-widest font-bold">
                Agendar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="/images/capasitelira.jpeg" alt="Spa Lira Nora" className="w-full h-full object-cover object-[center_35%] brightness-[0.65]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
    </div>
    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">
          Seu refúgio de <br />
          <span className="italic font-light">bem-estar, beleza e transformação</span>
        </h1>
        <p className="text-sand text-lg md:text-xl font-light max-w-3xl mx-auto mb-10 leading-relaxed">
          Na Lira Nõra você encontra estética avançada, terapias integrativas, desenvolvimento pessoal e formação profissional em um ambiente criado para cuidar do corpo, da mente e da energia.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#contato" className="w-full sm:w-auto bg-champagne hover:bg-champagne/90 text-white px-10 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold transition-all shadow-xl hover:-translate-y-1">
            Agendar Atendimento
          </a>
          <a href="#cursos" className="w-full sm:w-auto border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold transition-all">
            Conhecer os Cursos
          </a>
        </div>
      </motion.div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
    </div>
  </section>
);

// ─── About ────────────────────────────────────────────────────────────────────

const About = ({ onPlayTour }: { onPlayTour: () => void }) => (
  <section id="sobre" className="py-24 bg-offwhite overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div
            onClick={onPlayTour}
            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <img src="/images/seurefugioosasco.jpeg" alt="Ambiente Lira Nora" className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sage shadow-2xl transition-all"
              >
                <Play size={28} className="fill-current ml-1" />
              </motion.div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-sand rounded-2xl -z-10" />
          <div className="absolute -top-6 -left-6 border-2 border-champagne/30 w-32 h-32 -z-10" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
          <div className="inline-block py-1 px-3 bg-sage/10 rounded-full">
            <span className="text-sage text-xs font-bold uppercase tracking-widest">A Experiência</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-wood leading-tight">Uma experiência completa de cuidado e transformação</h2>
          <div className="space-y-4 text-wood/80 leading-relaxed font-light">
            <p>A Lira Nõra nasceu com o propósito de oferecer muito mais do que tratamentos estéticos. Criamos um espaço onde beleza, bem-estar, equilíbrio emocional, espiritualidade e desenvolvimento pessoal caminham juntos.</p>
            <p>Cada atendimento é pensado para proporcionar acolhimento, relaxamento e transformação, respeitando a individualidade de cada pessoa.</p>
            <p>Aqui você encontra um ambiente sofisticado e harmonioso para cuidar do corpo, da mente e da alma.</p>
          </div>
          <div className="pt-4 grid grid-cols-2 gap-6">
            {[
              { icon: <Sparkles size={20} />, label: 'Estética' },
              { icon: <Leaf size={20} />, label: 'Terapias Holísticas' },
              { icon: <Heart size={20} />, label: 'Equilíbrio Mental' },
              { icon: <GraduationCap size={20} />, label: 'Formação Profissional' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center space-x-3 text-sage">
                {icon}
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Team ─────────────────────────────────────────────────────────────────────

const teamMembers = [
  {
    name: 'Camila Aguiar',
    role: 'Enfermeira • Mestre em Promoção da Saúde • Pós-graduada em Estética',
    tags: ['Idealizadora', 'Professora Universitária', 'Reiki', 'Astrologia'],
    image: '/images/camila.jpeg',
    description:
      'Enfermeira, mestre em Promoção da Saúde e pós-graduada em Estética, Camila Aguiar é a idealizadora do espaço. Atua também como professora universitária, trazendo uma base sólida em ciência, cuidado e formação profissional.',
    longDescription:
      'Integra sua atuação na estética com terapias complementares como Reiki, astrologia e ferramentas energéticas de harmonização, unindo técnica, sensibilidade e visão ampliada del bem-estar. Seu propósito é promover equilíbrio entre corpo, mente e energia, oferecendo experiências de cuidado profundas e personalizadas.',
  },
  {
    name: 'Katriane Aguiar',
    role: 'Farmacêutica • Pós-graduada em Estética • Psicanálise',
    tags: ['Idealizadora', 'Estética', 'Psicanálise', 'Bem-estar Integral'],
    image: '/images/katyriane.jpeg',
    description:
      'Farmacêutica, pós-graduada em Estética e com atuação em Psicanálise, Katriane Aguiar também é idealizadora do espaço, ao lado de Camila Aguiar.',
    longDescription:
      'Sua trajetória une ciência, estética e cuidado emocional, promovendo atendimentos que integram saúde, autoestima e bem-estar integral. Com um olhar sensível e técnico, desenvolve protocolos que valorizam não apenas a beleza externa, mas também o equilíbrio interno e o autoconhecimento.',
  },
  {
    name: 'Renato Policarpo',
    role: 'Terapeuta Holístico • Massoterapeuta',
    tags: ['Massoterapia', 'Terapias Manuais', 'Reequilíbrio Energético'],
    image: '/images/renato.jpeg',
    description:
      'Renato Policarpo atua com terapias manuais e abordagens holísticas voltadas ao relaxamento, alívio de tensões e reequilíbrio energético. Seu trabalho integra técnicas de massagem com práticas de bem-estar energético.',
    longDescription:
      'Seu atendimento é focado em proporcionar leveza ao corpo e bem-estar integral, respeitando as necessidades individuais de cada cliente.',
  },
  {
    name: 'Flávia Soares',
    role: 'Terapeuta Energética',
    tags: ['Harmonização Energética', 'Equilíbrio Vibracional', 'Desbloqueio Energético'],
    image: '/images/flasvia.jpeg',
    description:
      'Flávia Soares é terapeuta energética, especializada em práticas de harmonização e equilíbrio vibracional. Atua no desbloqueio energético e na promoção de estados de maior leveza, bem-estar e conexão interior.',
    longDescription:
      'Seu trabalho complementa os cuidados estéticos e terapêuticos, contribuindo para uma experiência de cuidado mais profunda e integrada.',
  },
];

const Team = () => (
  <section id="equipe" className="py-24 bg-white">
    <div className="container mx-auto px-6 text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-serif text-wood mb-4">Nossa Equipe</h2>
      <div className="w-24 h-[2px] bg-champagne mx-auto mb-6" />
      <p className="text-wood/60 font-light max-w-2xl mx-auto">
        Profissionais dedicados ao seu bem-estar, unindo ciência, técnica e sensibilidade para cuidar de você por completo.
      </p>
    </div>

    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
      {teamMembers.map((member, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group bg-offwhite rounded-3xl overflow-hidden border border-sand/50 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row">
            {/* Photo */}
            <div className="md:w-48 lg:w-56 shrink-0 relative overflow-hidden">
              <div className="aspect-[3/4] w-full">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-sand/40 to-sage/10">
                    <div className="text-center space-y-2">
                      <User size={48} className="mx-auto text-sage/30" />
                      <span className="text-xs text-wood/30 uppercase tracking-widest">Foto</span>
                    </div>
                  </div>
                )}
              </div>
              {/* Border accent */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-champagne/40 rounded-tl-lg" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-champagne/40 rounded-br-lg" />
            </div>

            {/* Info */}
            <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
              <p className="text-xs uppercase tracking-widest text-champagne font-bold mb-1">Profissional</p>
              <h3 className="text-2xl font-serif text-wood mb-1 group-hover:text-sage transition-colors">{member.name}</h3>
              <p className="text-xs text-wood/50 mb-4 italic">{member.role}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-sage/10 text-sage text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-wood/70 leading-relaxed mb-2">{member.description}</p>
              <p className="text-sm text-wood/60 leading-relaxed">{member.longDescription}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// ─── Services ─────────────────────────────────────────────────────────────────

const Services = ({ onServiceClick }: { onServiceClick: (name: string) => void }) => {
  const categories = [
    { title: 'Estética Facial', items: ['Limpeza de Pele', 'Peeling de Diamante', 'Hidratação Facial', 'Revitalização Facial', 'Rejuvenescimento', 'Protocolos Capilares'], icon: <Sparkles className="text-champagne" /> },
    { title: 'Estética Corporal', items: ['Drenagem Linfática', 'Pós-operatório', 'Massagem Modeladora', 'Emagrecimento', 'Celulite & Flacidez', 'Bambuterapia', 'Pedras Quentes'], icon: <Leaf className="text-champagne" /> },
    { title: 'Spa e Relaxamento', items: ['Spa dos Pés', 'Escalda-pés Relaxante', 'Aromaterapia', 'Experiências Sensoriais', 'Rituais de Relaxamento'], icon: <Flower className="text-champagne" /> },
    { title: 'Beleza e Cuidados', items: ['Manicure & Pedicure', 'Alongamento de Unhas', 'Depilação Corporal', 'Extensão de Cílios'], icon: <Heart className="text-champagne" /> },
    { title: 'Terapias Integrativas', items: ['Reiki', 'Auriculoterapia', 'Harmonização Energética', 'Limpeza Energética', 'Alinhamento dos Chakras'], icon: <ShieldCheck className="text-champagne" /> },
    { title: 'Espiritualidade', items: ['Tarot & Runas', 'Mapa Astral', 'Leituras Intuitivas', 'Orientação Energética', 'Desenvolvimento Pessoal'], icon: <Award className="text-champagne" /> },
    { title: 'Mesas Radiônicas', items: ['Mesa para Prosperidade', 'Mesa para Amor', 'Mesa Profissional'], icon: <Sparkles className="text-champagne" /> },
    { title: 'Psicanálise', items: ['Acolhimento', 'Análise do Inconsciente', 'Autoconhecimento', 'Equilíbrio Emocional'], icon: <User className="text-champagne" /> },
  ];

  return (
    <section id="servicos" className="py-24 bg-sand/30">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-wood mb-4">Nossos Serviços</h2>
        <div className="w-24 h-[2px] bg-champagne mx-auto mb-6" />
        <p className="text-wood/60 font-light text-sm">Clique em cada procedimento para conhecer os detalhes e benefícios</p>
      </div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-sand/50 group">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-offwhite rounded-full flex items-center justify-center group-hover:bg-champagne/10 transition-colors">
                {cat.icon}
              </div>
            </div>
            <h3 className="text-xl font-serif text-wood mb-4">{cat.title}</h3>
            <ul className="space-y-1 text-left">
              {cat.items.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => onServiceClick(item)}
                    className="w-full flex items-center justify-between text-sm text-wood/70 hover:text-sage py-1.5 px-2 -mx-2 rounded-lg hover:bg-sage/5 transition-colors group/item text-left"
                  >
                    <span className="flex items-start">
                      <span className="mr-2 text-champagne mt-0.5">•</span>{item}
                    </span>
                    <ChevronRight size={14} className="text-champagne/0 group-hover/item:text-champagne shrink-0 transition-colors" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ─── Courses ──────────────────────────────────────────────────────────────────

const allCourses: CourseType[] = [
  {
    title: 'Curso de Massagem Profissional',
    items: ['Massagem Relaxante', 'Massagem Terapêutica', 'Massagem com Pedras Quentes', 'Bambuterapia', 'Spa dos Pés'],
    description: 'Aprenda técnicas voltadas para relaxamento, bem-estar e atendimento profissional. O curso abrange massagens relaxantes, terapêuticas e técnicas avançadas com elementos naturais.',
    duration: '40 horas', certification: 'Nacional',
  },
  {
    title: 'Curso de Drenagem Linfática',
    items: ['Sistema Linfático', 'Técnicas Manuais de Drenagem', 'Indicações e Contraindicações', 'Atendimento Prático'],
    description: 'Domine a drenagem linfática manual aprendendo anatomia do sistema linfático, técnicas certificadas e atendimento clínico real.',
    duration: '24 horas', certification: 'Nacional',
  },
  {
    title: 'Curso de Pós-operatório',
    items: ['Drenagem Pós-operatória', 'Manejo de Edemas', 'Protocolos de Recuperação', 'Atendimento Especializado'],
    description: 'Especialize-se em recuperação pós-cirúrgica com protocolos seguros, técnicas de manejo de edemas e atendimento humanizado.',
    duration: '20 horas', certification: 'Nacional',
  },
  {
    title: 'Curso de Estética Corporal',
    items: ['Massagem Modeladora', 'Protocolos de Emagrecimento', 'Protocolos para Celulite', 'Protocolos para Flacidez'],
    description: 'Formação completa para tratamentos corporais estéticos, com técnicas e equipamentos utilizados no mercado.',
    duration: '32 horas', certification: 'Nacional',
  },
  {
    title: 'Curso de Estética Facial',
    items: ['Limpeza de Pele', 'Peeling de Diamante', 'Hidratação Facial', 'Revitalização Facial', 'Rejuvenescimento Facial'],
    description: 'Aprenda protocolos completos de estética facial, do básico ao rejuvenescimento com técnicas modernas e seguras.',
    duration: '36 horas', certification: 'Nacional',
  },
  {
    title: 'Curso de Reiki',
    items: ['Fundamentos do Reiki', 'Aplicação Energética', 'Estudo dos Chakras', 'Harmonização Energética'],
    description: 'Conheça a arte milenar do Reiki, aprenda canalizção de energia, equilíbrio dos chakras e práticas de harmonização.',
    duration: '16 horas', certification: 'Nacional',
  },
  {
    title: 'Curso de Auriculoterapia',
    items: ['Fundamentos da Técnica', 'Mapeamento Auricular', 'Protocolos de Atendimento', 'Aplicação Prática'],
    description: 'Aprenda auriculoterapia do zero com mapeamento completo da orelha, protocolos clínicos e prática supervisionada.',
    duration: '20 horas', certification: 'Nacional',
  },
];

const Courses = ({ onCourseClick }: { onCourseClick: (course: CourseType) => void }) => (
  <section id="cursos" className="py-24 bg-white">
    <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-1">
        <div className="sticky top-32">
          <h2 className="text-4xl md:text-5xl font-serif text-wood mb-6">Escola de Formação</h2>
          <p className="text-wood/70 leading-relaxed font-light mb-8">
            Aprenda com quem vive a prática todos os dias. Nossas formações são completas para quem deseja iniciar ou aperfeiçoar seus conhecimentos.
          </p>
          <ul className="space-y-4 mb-10">
            {['Suporte Vitalício', 'Material Didático Premium', 'Certificado Nacional'].map((item) => (
              <li key={item} className="flex items-center space-x-3 text-sage">
                <Check size={18} /><span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <img src="/images/escola-formacao.jpeg" className="rounded-2xl shadow-lg w-full aspect-square object-cover" alt="Treinamento" />
        </div>
      </div>

      <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
        {allCourses.map((course, idx) => (
          <motion.div key={idx} whileHover={{ y: -5 }} className="bg-offwhite p-8 rounded-2xl border border-sand flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-serif text-wood mb-4">{course.title}</h3>
              <ul className="space-y-2 mb-8">
                {course.items.map((it, i) => (
                  <li key={i} className="text-xs text-wood/60 flex items-center">
                    <ChevronRight size={12} className="mr-2 text-champagne shrink-0" />{it}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => onCourseClick(course)}
              className="text-sage font-bold text-xs uppercase tracking-widest flex items-center group hover:text-champagne transition-colors"
            >
              Saiba Mais <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Student Area ─────────────────────────────────────────────────────────────

const StudentArea = ({ onAccess }: { onAccess: (type: StudentModalType) => void }) => (
  <section id="aluno" className="py-24 bg-sage text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-black/5 -skew-x-12 transform translate-x-1/2" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <GraduationCap className="w-16 h-16 mx-auto mb-8 opacity-50" />
        <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">Plataforma Exclusiva Lira Nõra</h2>
        <p className="text-offwhite/80 text-lg mb-12 font-light">
          Uma área reservada para alunos acessarem seus cursos e acompanharem sua evolução com recursos modernos e intuitivos.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-sm">
          {['Videoaulas', 'Apostilas', 'Certificados', 'Comunidade', 'Suporte', 'Login Seguro', 'Histórico', 'Downloads'].map((item) => (
            <div key={item} className="flex items-center space-x-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <Check size={16} className="text-champagne shrink-0" /><span>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button onClick={() => onAccess('login')}
            className="bg-white text-sage px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-sand transition-colors w-full sm:w-auto shadow-lg">
            Entrar na Área do Aluno
          </button>
          <button onClick={() => onAccess('register')}
            className="border border-white text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-colors w-full sm:w-auto">
            Tornar-se Aluno
          </button>
        </div>
      </div>
    </div>
  </section>
);

// ─── Gallery ──────────────────────────────────────────────────────────────────

const Gallery = () => {
  const images = [
    { src: '/images/final-1.jpeg', label: 'Sala de Massagem' },
    { src: '/images/final-2.jpeg', label: 'Ambiente Relaxante' },
    { src: '/images/final-3.jpeg', label: 'Área de Estética' },
    { src: '/images/final-4.jpeg', label: 'Recepção' },
    { src: '/images/final-5.jpeg', label: 'Espaço Lira Nõra' },
    { src: '/images/final-7.jpeg', label: 'Detalhes do Spa' },
    { src: '/images/final-8.jpeg', label: 'Sala de Atendimento' },
    { src: '/images/final-9.jpeg', label: 'Ambiente Acolhedor' },
    { src: '/images/final-10.jpeg', label: 'Cuidado e Bem-estar' },
    { src: '/images/final-11.jpeg', label: 'Experiência Única' },
  ];

  return (
    <section id="galeria" className="py-24 bg-offwhite">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-serif text-wood mb-2">Nosso Espaço</h2>
        <p className="text-wood/60 font-light">Um ambiente criado para acolher e transformar</p>
      </div>
      <div className="container mx-auto px-6 columns-1 sm:columns-2 md:columns-3 gap-6 [column-fill:_balance]">
        {images.map((img, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }}
            className="break-inside-avoid overflow-hidden rounded-2xl shadow-lg bg-white mb-6">
            <img src={img.src} className="w-full h-auto block" alt={img.label} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ─── Testimonials ─────────────────────────────────────────────────────────────

const Testimonials = () => {
  const testimonials = [
    { name: 'Mariana Silva', text: 'Uma experiência transformadora. O atendimento da Lira Nõra é algo que nunca vi igual, me senti acolhida desde o primeiro momento.', rating: 5 },
    { name: 'Juliana Costa', text: 'Fiz o curso de massagem e mudou minha carreira. O suporte e a qualidade do material são excepcionais.', rating: 5 },
    { name: 'Beatriz Oliveira', text: 'As terapias integrativas me ajudaram a encontrar o equilíbrio que eu tanto precisava. O ambiente é mágico.', rating: 5 },
    { name: 'Fernanda Rocha', text: 'O curso de estética facial superou todas as minhas expectativas. Saí preparada para atender com confiança.', rating: 5 },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-sand/20">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-serif text-wood">O que nossos clientes dizem</h2>
      </div>
      <div className="container mx-auto px-6">
        <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={30} slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          pagination={{ clickable: true }} autoplay={{ delay: 5000 }} className="pb-16">
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-sand/30 h-full flex flex-col justify-between">
                <div>
                  <div className="flex space-x-1 mb-6">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} className="fill-champagne text-champagne" />)}
                  </div>
                  <p className="text-wood/70 italic leading-relaxed mb-8">"{t.text}"</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center font-bold text-sage">{t.name[0]}</div>
                  <span className="font-medium text-wood">{t.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// ─── Contact ──────────────────────────────────────────────────────────────────

const Contact = () => (
  <section id="contato" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-serif text-wood mb-8">Vamos conversar?</h2>
          <div className="space-y-8">
            {[
              { icon: <Phone size={24} />, label: 'WhatsApp', value: '(11) 96121-7932', href: `https://wa.me/${WA_NUMBER}` },
              { icon: <InstagramIcon size={24} />, label: 'Instagram', value: '@espaco_lira_nora', href: 'https://www.instagram.com/espaco_lira_nora' },
              { icon: <MapPin size={24} />, label: 'Endereço', value: 'Rua José Carlos Catano, nº 118 - Vila Yara, Osasco - SP', href: 'https://maps.google.com/?q=Rua+José+Carlos+Catano+118+Vila+Yara+Osasco+SP' },
              { icon: <Clock size={24} />, label: 'Horário', value: 'Segunda a Sábado: 09:00 – 20:00' },
            ].map(({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => (
              <div key={label} className="flex items-start space-x-4">
                <div className="p-3 bg-offwhite rounded-lg text-sage">{icon}</div>
                <div>
                  <h4 className="font-bold text-wood">{label}</h4>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-wood/70 hover:text-sage transition-colors">{value}</a>
                  ) : (
                    <p className="text-wood/70">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-md border border-sand/50">
            <iframe
              src="https://maps.google.com/maps?q=Rua+Jos%C3%A9+Carlos+Catano+118+Vila+Yara+Osasco+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Lira Nõra"
              className="rounded-2xl"
            />
          </div>
        </div>

        <form className="bg-offwhite p-10 rounded-3xl shadow-sm border border-sand">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-wood mb-2">Nome</label>
              <input type="text" className="w-full bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sage" placeholder="Seu nome" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-wood mb-2">E-mail</label>
              <input type="email" className="w-full bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sage" placeholder="Seu e-mail" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-widest font-bold text-wood mb-2">Assunto</label>
            <select className="w-full bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sage">
              <option>Agendamento de Spa</option>
              <option>Informações sobre Cursos</option>
              <option>Outros Assuntos</option>
            </select>
          </div>
          <div className="mb-8">
            <label className="block text-xs uppercase tracking-widest font-bold text-wood mb-2">Mensagem</label>
            <textarea rows={4} className="w-full bg-white border border-sand rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sage" placeholder="Como podemos te ajudar?" />
          </div>
          <button className="w-full bg-sage text-white py-4 rounded-lg text-xs uppercase tracking-widest font-bold hover:bg-sage/90 transition-all flex items-center justify-center space-x-2">
            <Send size={16} /><span>Enviar Mensagem</span>
          </button>
        </form>
      </div>
    </div>
  </section>
);

// ─── CTA Final ────────────────────────────────────────────────────────────────

const CTAFinal = () => {
  const ctaVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ctaVideoRef.current) {
      ctaVideoRef.current.playbackRate = 0.25; // 4x mais lento (câmera ultra lenta)
    }
  }, []);

  return (
    <section className="py-24 bg-wood text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <video
          ref={ctaVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover blur-[2px]"
          poster="/images/capasitelira.jpeg"
        >
          <source src="/videos/espaco-3s.mp4" type="video/mp4" />
          <img src="/images/capasitelira.jpeg" className="w-full h-full object-cover object-[center_35%]" alt="Fundo" />
        </video>
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Permita-se viver uma experiência única de cuidado e transformação</h2>
        <p className="text-sand/80 text-lg mb-12 font-light">
          Agende seu atendimento ou descubra nossas formações profissionais e inicie uma nova jornada de desenvolvimento e bem-estar.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto bg-champagne text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:scale-105 transition-transform shadow-xl">
            Agendar pelo WhatsApp
          </a>
          <a href="#cursos"
            className="w-full sm:w-auto bg-transparent border border-white text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors">
            Conhecer os Cursos
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="bg-offwhite pt-20 pb-10 border-t border-sand">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-serif text-sage mb-6">Lira Nõra</h3>
          <p className="text-wood/70 max-w-sm mb-8 leading-relaxed">
            Corpo, mente e alma em equilíbrio. Bem-estar, beleza, autoconhecimento e transformação em um só lugar.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/espaco_lira_nora" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-sand/30 rounded-full flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all"><InstagramIcon size={18} /></a>
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-sand/30 rounded-full flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all"><Phone size={18} /></a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-wood mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-sm text-wood/70">
            {[['#sobre', 'Sobre Nós'], ['#servicos', 'Serviços'], ['#cursos', 'Cursos'], ['#aluno', 'Área do Aluno']].map(([href, label]) => (
              <li key={label}><a href={href} className="hover:text-sage transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-wood mb-6">Especialidades</h4>
          <ul className="space-y-4 text-sm text-wood/70">
            {['Estética', 'Terapias Integrativas', 'Espiritualidade', 'Psicanálise'].map((item) => (
              <li key={item}><a href="#servicos" className="hover:text-sage transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-sand pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-wood/50">
        <p>© 2024 Lira Nõra Spa, Estética & Escola. Todos os direitos reservados.</p>
        <p className="mt-4 md:mt-0">Desenvolvido com sofisticação</p>
      </div>
    </div>
  </footer>
);

// ─── App ──────────────────────────────────────────────────────────────────────

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);
  const [studentModal, setStudentModal] = useState<StudentModalType>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <div className="min-h-screen bg-offwhite font-sans text-wood selection:bg-sage/20 selection:text-sage">
      <Navbar />
      <main>
        <Hero />
        <About onPlayTour={() => setIsTourOpen(true)} />
        <Team />
        <Services onServiceClick={setSelectedService} />
        <Courses onCourseClick={setSelectedCourse} />
        <StudentArea onAccess={setStudentModal} />
        <Gallery />
        <Testimonials />
        <Contact />
        <CTAFinal />
      </main>
      <Footer />

      {/* Modals */}
      <AnimatePresence>
        {isTourOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsTourOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative bg-black rounded-3xl overflow-hidden max-w-4xl w-full aspect-video shadow-2xl border border-white/10 z-10"
            >
              <button
                onClick={() => setIsTourOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors z-20"
              >
                <X size={20} />
              </button>
              <video
                src="/videos/espaco-completo.mp4"
                controls
                autoPlay
                muted
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal name={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCourse && (
          <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {studentModal && (
          <StudentModal
            type={studentModal}
            onClose={() => setStudentModal(null)}
            onSwitch={setStudentModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
