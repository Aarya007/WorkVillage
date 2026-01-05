import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Users, Zap, Target, ArrowRight, Check, Play, BarChart3, Palette, TrendingUp, Activity, Cpu } from 'lucide-react';
import CosmicBackground from '../components/CosmicBackground';
import HeroBackground from '../components/HeroBackground';
import HeroAmbientField from '../components/HeroAmbientField';

// Premium animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardHover = {
  y: -4,
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};

const gentlePulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function WorkVillageLandingPage() {
  return (
    <main className="relative min-h-screen">
      {/* Global Cosmic Background */}
      <CosmicBackground />

      <div className="relative z-10 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/30 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-9 h-9 bg-gradient-to-r from-[#9E005C] to-[#FF4D94] rounded-xl flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Users className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#9E005C] to-[#FF4D94] bg-clip-text text-transparent">
                WorkVillage
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">Features</a>
              <a href="#agents" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">Agents</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">Pricing</a>
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-[#9E005C] to-[#FF4D94] text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#9E005C]/20 transition-all duration-300"
              >
                Enter WorkVillage
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-transparent">
        {/* Hero ambient field */}
        <HeroAmbientField />

        {/* Hero-specific background layer */}
        <HeroBackground />

        {/* Hero ambient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9E005C]/2 to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D94]/1 via-transparent to-[#6D28D9]/1 opacity-20"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-44 lg:pb-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center relative"
          >
            {/* Cosmic energy overlay for hero */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ec4899]/5 to-[#a855f7]/8 rounded-3xl opacity-60"></div>
            <motion.div
              variants={fadeInUp}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#9E005C]/10 to-[#FF4D94]/10 border border-[#9E005C]/20 text-[#9E005C] text-sm font-semibold">
                <Activity className="w-4 h-4 mr-2" />
                Premium AI Workforce Platform
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
            >
              Your AI Workforce,
              <br />
              <span className="bg-gradient-to-r from-[#9E005C] via-[#FF4D94] to-[#6D28D9] bg-clip-text text-transparent">
                Working as a Team
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              A digital workplace where autonomous AI agents run real business operations,
              coordinate seamlessly, and deliver results without constant supervision.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/dashboard"
                className="group bg-gradient-to-r from-[#9E005C] to-[#FF4D94] text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#9E005C]/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Enter WorkVillage</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <button className="group flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 px-6 py-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50">
                <Play className="w-5 h-5" />
                <span className="font-semibold">See how it works</span>
              </button>
            </motion.div>
          </motion.div>

            </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="features" className="py-24 relative overflow-hidden">
        {/* Residual energy from hero core */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#a855f7]/2 to-transparent opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#c084fc]/1.5 via-transparent to-[#e879f9]/0.8 opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#ec4899]/1 via-transparent to-[#FF4D94]/0.5 opacity-20"></div>

        {/* Soft energy fields */}
        <motion.div
          className="absolute top-16 right-24 w-40 h-40 rounded-full bg-gradient-to-br from-[#ec4899]/6 to-[#a855f7]/4 blur-2xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-12 w-28 h-28 rounded-full bg-gradient-to-br from-[#c084fc]/5 to-[#8b5cf6]/3 blur-xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.3, 0.15, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#FF4D94]/4 to-[#ec4899]/3 blur-lg"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            >
              Why Choose WorkVillage?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Experience the future of business operations with our intelligent AI workforce platform.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {[
              {
                icon: Users,
                title: "Digital Workplace",
                description: "A single headquarters where AI agents collaborate seamlessly, sharing insights and coordinating complex business operations.",
                color: "from-[#9E005C] to-[#FF4D94]"
              },
              {
                icon: Brain,
                title: "Autonomous Execution",
                description: "Agents operate independently without constant supervision, making decisions and executing tasks 24/7.",
                color: "from-[#FF4D94] to-[#6D28D9]"
              },
              {
                icon: Target,
                title: "Role-Based Intelligence",
                description: "Specialized agents for marketing, growth, analytics, and operations, each with deep expertise in their domain.",
                color: "from-[#6D28D9] to-[#3F2B96]"
              },
              {
                icon: Zap,
                title: "Human Control",
                description: "You define objectives and guardrails. The system executes with precision, keeping you in full control.",
                color: "from-[#3F2B96] to-[#9E005C]"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={cardHover}
                className="bg-white/70 backdrop-blur-md rounded-2xl p-10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(249,250,251,0.7) 50%, rgba(243,244,246,0.6) 100%)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.05)'
                }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-8 shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-5 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
      </section>

      {/* Meet the Agents Section */}
      <section id="agents" className="py-24 relative overflow-hidden">
        {/* Constellation network atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ec4899]/1.5 to-transparent opacity-35"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#a855f7]/0.8 via-transparent to-[#c084fc]/0.8 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D94]/0.5 via-transparent to-[#6D28D9]/0.3 opacity-15"></div>

        {/* Agent constellation nodes */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-12 h-12 rounded-full bg-gradient-to-br from-[#ec4899]/12 to-[#a855f7]/8 blur-md"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-gradient-to-br from-[#c084fc]/10 to-[#8b5cf6]/6 blur-sm"
          animate={{
            scale: [1.1, 0.8, 1.1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-14 h-14 rounded-full bg-gradient-to-br from-[#e879f9]/8 to-[#ec4899]/6 blur-lg"
          animate={{
            scale: [0.9, 1.3, 0.9],
            opacity: [0.35, 0.55, 0.35]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/5 w-8 h-8 rounded-full bg-gradient-to-br from-[#a855f7]/9 to-[#6366f1]/5 blur-sm"
          animate={{
            scale: [1.2, 0.7, 1.2],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4.5
          }}
        />

        {/* Subtle connection threads */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <motion.line
            x1="20%"
            y1="25%"
            x2="75%"
            y2="35%"
            stroke="url(#agentConnection1)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.line
            x1="25%"
            y1="75%"
            x2="80%"
            y2="65%"
            stroke="url(#agentConnection2)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
          <defs>
            <linearGradient id="agentConnection1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="agentConnection2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e879f9" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            >
              Meet the AI Agents
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Our specialized AI workforce, each designed for specific business functions.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Emily",
                role: "Marketing",
                description: "Content creation, social media management, and campaign optimization.",
                icon: Palette,
                color: "from-[#9E005C] to-[#FF4D94]",
                status: "active"
              },
              {
                name: "Leo",
                role: "Creative",
                description: "Writing, branding, and creative strategy across all platforms.",
                icon: Palette,
                color: "from-[#FF4D94] to-[#6D28D9]",
                status: "active"
              },
              {
                name: "Chase",
                role: "Growth",
                description: "Growth strategy, conversion optimization, and market expansion.",
                icon: TrendingUp,
                color: "from-[#6D28D9] to-[#3F2B96]",
                status: "active"
              },
              {
                name: "Orion",
                role: "Analytics",
                description: "Performance analytics, data insights, and predictive modeling.",
                icon: BarChart3,
                color: "from-[#3F2B96] to-[#9E005C]",
                status: "active"
              },
              {
                name: "Miles",
                role: "Operations",
                description: "Workflow management, task coordination, and process optimization.",
                icon: Target,
                color: "from-[#9E005C] to-[#FF4D94]",
                status: "coming-soon"
              }
            ].map((agent, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={cardHover}
                className="bg-white/75 backdrop-blur-lg rounded-2xl p-10 border border-white/25 shadow-2xl hover:shadow-3xl transition-all duration-700 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(249,250,251,0.75) 40%, rgba(243,244,246,0.7) 100%)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.03)'
                }}
              >
                {agent.status === 'coming-soon' && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200">
                    In Production
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${agent.color} flex items-center justify-center mb-8 shadow-lg`}>
                  <agent.icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{agent.name}</h3>
                  <p className="text-sm text-gray-400 font-semibold">{agent.role}</p>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg">{agent.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Distant cosmic presence */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ec4899]/1 to-transparent opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/0.5 via-transparent to-[#c084fc]/0.5 opacity-15"></div>

        {/* Subtle energy traces */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-8 h-8 rounded-full bg-gradient-to-br from-[#ec4899]/8 to-[#a855f7]/6 blur-sm"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-6 h-6 rounded-full bg-gradient-to-br from-[#c084fc]/6 to-[#8b5cf6]/4 blur-sm"
          animate={{
            opacity: [0.3, 0.1, 0.3],
            scale: [1.1, 0.9, 1.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            >
              How It Works
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Simple setup, powerful execution. Get your AI workforce running in minutes.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {[
              {
                step: "01",
                title: "Define the Objective",
                description: "Set clear goals, objectives, and guardrails for your AI workforce."
              },
              {
                step: "02",
                title: "Assign the Agents",
                description: "Choose which specialized agents to deploy for each task or project."
              },
              {
                step: "03",
                title: "Work Runs Autonomously",
                description: "Your AI team executes, coordinates, and delivers results around the clock."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#9E005C] to-[#FF4D94] rounded-2xl flex items-center justify-center mx-auto mb-8 text-white font-bold text-2xl shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-5 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg max-w-sm mx-auto">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        {/* Calm cosmic fog atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8b5cf6]/1.5 to-transparent opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/0.8 via-transparent to-[#a855f7]/0.8 opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#ec4899]/0.5 via-transparent to-[#FF4D94]/0.3 opacity-20"></div>

        {/* Pricing cosmic presence */}
        <motion.div
          className="absolute top-12 right-20 w-36 h-36 rounded-full bg-gradient-to-br from-[#8b5cf6]/5 to-[#6366f1]/3 blur-2xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-16 left-16 w-24 h-24 rounded-full bg-gradient-to-br from-[#a855f7]/4 to-[#ec4899]/3 blur-xl"
          animate={{
            scale: [1.15, 0.85, 1.15],
            opacity: [0.2, 0.45, 0.2]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Enhanced Pro plan energy signature */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-gradient-to-br from-[#FF4D94]/6 to-[#9E005C]/4 blur-xl"
          animate={{
            scale: [0.9, 1.4, 0.9],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            >
              Choose Your Plan
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Start with our essentials plan and scale as your business grows.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8"
          >
            {/* Starter Plan */}
            <motion.div
              variants={fadeInUp}
              whileHover={cardHover}
              className="bg-white/65 backdrop-blur-xl rounded-2xl p-10 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(249,250,251,0.65) 30%, rgba(243,244,246,0.6) 100%)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 20px 56px rgba(0,0,0,0.15), 0 12px 24px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.04)'
              }}
            >
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Starter</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">₹4,999</div>
                <p className="text-gray-400 font-medium">per month</p>
              </div>

              <ul className="space-y-5 mb-10">
                {[
                  "Access to Emily (Marketing)",
                  "Basic analytics dashboard",
                  "Email support",
                  "Standard integrations"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/dashboard"
                className="w-full bg-gradient-to-r from-[#9E005C] to-[#FF4D94] text-white py-4 px-8 rounded-xl font-semibold text-center hover:shadow-xl hover:shadow-[#9E005C]/30 transition-all duration-300 block text-lg"
              >
                Enter WorkVillage
              </Link>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              variants={fadeInUp}
              whileHover={cardHover}
              className="bg-gradient-to-br from-[#9E005C]/12 to-[#FF4D94]/10 backdrop-blur-xl rounded-2xl p-10 border-2 border-[#9E005C]/50 shadow-3xl relative"
              style={{
                background: 'linear-gradient(135deg, rgba(158,0,92,0.1) 0%, rgba(255,77,148,0.08) 40%, rgba(249,250,251,0.85) 70%, rgba(255,255,255,0.9) 100%)',
                backdropFilter: 'blur(28px)',
                boxShadow: '0 24px 64px rgba(158,0,92,0.2), 0 16px 32px rgba(158,0,92,0.15), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.02)'
              }}
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#9E005C] to-[#FF4D94] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Pro</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">₹9,999</div>
                <p className="text-gray-400 font-medium">per month</p>
              </div>

              <ul className="space-y-5 mb-10">
                {[
                  "Access to all AI agents",
                  "Advanced analytics & insights",
                  "Priority support",
                  "Custom integrations",
                  "Team collaboration tools"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/dashboard"
                className="w-full bg-gradient-to-r from-[#9E005C] to-[#FF4D94] text-white py-4 px-8 rounded-xl font-semibold text-center hover:shadow-xl hover:shadow-[#9E005C]/30 transition-all duration-300 block text-lg"
              >
                Enter WorkVillage
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              variants={fadeInUp}
              whileHover={cardHover}
              className="bg-white/65 backdrop-blur-xl rounded-2xl p-10 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(249,250,251,0.65) 30%, rgba(243,244,246,0.6) 100%)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 20px 56px rgba(0,0,0,0.15), 0 12px 24px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.04)'
              }}
            >
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Enterprise</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">Custom</div>
                <p className="text-gray-400 font-medium">contact us</p>
              </div>

              <ul className="space-y-5 mb-10">
                {[
                  "Unlimited AI agents",
                  "Custom agent development",
                  "Dedicated support team",
                  "SLA guarantee",
                  "On-premise deployment",
                  "Advanced security features"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gray-900 text-white py-4 px-8 rounded-xl font-semibold text-center hover:bg-gray-800 transition-all duration-300 text-lg">
                Talk to Us
              </button>
            </motion.div>
          </motion.div>
        </div>
        </div>
      </section>
      </div>

      {/* Footer - Infinite Cosmic Space */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden" style={{ zIndex: 9999 }}>
        {/* Deepest cosmic void */}
        <div className="absolute inset-0 bg-gray-900"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#9E005C] to-[#FF4D94] rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#9E005C] to-[#FF4D94] bg-clip-text text-transparent">WorkVillage</span>
              </div>
              <p className="text-gray-200 mb-4 max-w-md">
                A digital workplace for autonomous AI agents. Part of the atsn.ai ecosystem.
              </p>
              <p className="text-sm text-gray-200">
                Revolutionizing business operations with intelligent, coordinated AI workforces.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-200">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#agents" className="hover:text-white transition-colors">AI Agents</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-200">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-200">
            <p>&copy; 2026 WorkVillage. Part of the atsn.ai ecosystem. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
