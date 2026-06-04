"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoLogoGithub } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import Typewriter from '@/components/hero/type-writer/Typewriter';
import GlassCard from './GlassCard';

function Hero3D() {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rotateYValue = (mouseX - centerX) / 10;
        const rotateXValue = (mouseY - centerY) / 10;

        setRotateY(rotateYValue);
        setRotateX(-rotateXValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    const floatingImage = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden perspective">
            <motion.div
                className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Section - Content */}
                    <motion.div
                        className="flex flex-col items-start justify-center space-y-3"
                        variants={itemVariants}
                    >
                        {/* Greeting Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-block"
                        >
                            <GlassCard className="px-6 py-3">
                                <p className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    ✨ خوش‌آمدید به پرتفولیو من
                                </p>
                            </GlassCard>
                        </motion.div>

                        {/* Main Title */}
                        <motion.div variants={itemVariants}>
                            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight">
                                <span className="text-white">سلام، من</span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    دانیال لطفی
                                </span>
                                <span className="text-white"> هستم</span>
                            </h1>
                        </motion.div>

                        {/* Typewriter */}
                        <motion.div variants={itemVariants} className="text-xl">
                            <Typewriter />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg text-gray-300/80 max-w-lg leading-relaxed"
                        >
                            یک توسعه‌دهنده فرانت‌اند خلاق با سه سال تجربه در ساخت رابط‌های کاربری مدرن و تجربیات جذاب
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <Link href="/contact" className="w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden group relative"
                                >
                                    <span className="relative z-10">تماس با من</span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 -z-10"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.button>
                            </Link>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/downloads/frontend.pdf"
                                download
                                className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                            >
                                دانلود رزومه
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            variants={itemVariants}
                            className="flex gap-4 pt-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com/iXZed026"
                                className="p-4 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-white/10 hover:border-white/30 transition-all duration-300"
                            >
                                <IoLogoGithub className="text-2xl" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.15, rotate: -5 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.linkedin.com/in/danyal-lotfi-831913354"
                                className="p-4 rounded-xl bg-gradient-to-br from-blue-600/50 to-purple-600/50 border border-white/10 hover:border-white/30 transition-all duration-300"
                            >
                                <FaLinkedin className="text-2xl" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Section - 3D Image */}
                    <motion.div
                        variants={imageVariants}
                        className="flex justify-center items-center perspective h-full"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <motion.div
                            animate="animate"
                            variants={floatingImage}
                            style={{
                                perspective: '1200px',
                                transformStyle: 'preserve-3d',
                            }}
                            className="relative"
                        >
                            <motion.div
                                style={{
                                    rotateX: rotateX,
                                    rotateY: rotateY,
                                    transformStyle: 'preserve-3d',
                                }}
                                transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                                className="relative"
                            >
                                {/* Glow background */}
                                <div className="rounded-full absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/20 rounded-3xl blur-2xl -z-10 animate-pulse" />

                                {/* Glass card wrapper */}
                                <GlassCard className="rounded-full relative p-2 lg:p-4">
                                    <div className="rounded-full relative overflow-hidden rounded-2xl group">
                                        <Image
                                            src="/images/me.jpg"
                                            width={200}
                                            height={200}
                                            alt="Profile"
                                            className="relative z-300 w-full h-auto object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                                            priority
                                        />

                                        {/* Overlay gradient on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                                        {/* Border animation */}
                                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-[var(--blue-color2)] bg-clip-border p-[2px] pointer-events-none z-10">
                                            <div className="absolute inset-[2px] rounded-2xl bg-transparent" />
                                        </div>
                                    </div>
                                </GlassCard>

                                {/* Floating badges */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center text-sm font-bold text-blue-400"
                                >
                                    جویای کار ✨
                                </motion.div>

                                {/* Decorative elements */}
                                <motion.div
                                    animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -bottom-5 -left-15 w-20 h-20 border border-purple-500 rounded-lg opacity-40"
                                />

                                <motion.div
                                    animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute bottom-30 -left-8 w-5 h-5 border border-purple-500 rounded-lg opacity-40"
                                />
                                <motion.div
                                    animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute bottom-20 -left-12 w-3 h-3 border border-purple-500 rounded-lg opacity-40"
                                />

                                <motion.div
                                    animate={{ x: [0, 10, 0], y: [0, 50, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                    className="absolute top-1/2 -right-8 w-16 h-16 border border-blue-500 rounded-full opacity-60"
                                />

                                {/* <motion.div
                                    animate={{ x: [10, -15, 20], y: [0, 50, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                    className="absolute top-1/6 -left-12 w-16 h-16 border border-blue-500 rounded-full opacity-90"
                                /> */}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-white/50">اسکرول کنید</span>
                        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                            <motion.div
                                animate={{ y: [0, 4, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1 h-2 bg-blue-400 rounded-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Hero3D;