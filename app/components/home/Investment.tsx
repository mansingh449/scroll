'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Globe, GitBranch } from 'lucide-react';
import Image from 'next/image';

const cards = [
  {
    title: 'Instant Participation',
    description:
      'You gain immediate synthetic exposure via CFD — without delays linked to matched sales or fund subscription cycles.',
    icon: <LayoutGrid className="text-purple-600 w-6 h-6" />,
    highlight: false,
  },
  {
    title: 'Economic Exposure',
    description:
      'Your CFD tracks the economic performance of a private company, enabling participation in potential value changes over time without any leverage.',
    icon: <Globe className="text-purple-600 w-6 h-6" />,
    highlight: true,
  },
  {
    title: 'Segregation of Funds',
    description:
      'Your funds are held separately from the operating capital of PE Projects, in accordance with applicable regulations.',
    icon: <GitBranch className="text-purple-600 w-6 h-6" />,
    highlight: false,
  },
];

export default function InvestmentTypes() {
  return (
    <section className="relative bg-white py-16 px-4 md:px-16 rounded-3xl overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <span className="inline-block  bg-[#EAE6FF] text-[#744C9E] text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Investment
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Type of Investment Are You Buying?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          When you enter into a PE Projects, you gain synthetic economic exposure to private market assets — without acquiring legal ownership of the underlying shares.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-10 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto relative z-10"
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl bg-gray-50 hover:bg-white transition border ${
              card.highlight
                ? 'border-[#A259FF] shadow-[0_0_0_2px_rgba(162,89,255,0.5)]'
                : 'border-transparent'
            }`}
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </motion.div>


    </section>
  );
}
