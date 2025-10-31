'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDribbble, FaBehance, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { AboutMe, SocialLinks } from '@/general/constants/Constants';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm<ContactFormData>();

    const watchedFields = watch();

    const isFieldFocusedOrFilled = (fieldName: keyof ContactFormData) => {
        return focusedField === fieldName || watchedFields[fieldName];
    };

    const email = 'naswihkkv786@gmail.com';

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        const message = `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message}`;
        const subject = 'New Message from Contact Form';
        const body = encodeURIComponent(message);
        window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
        reset();
        setIsSubmitting(false);
    };

    const socialLinks = [
        { icon: FaInstagram, label: "Instagram", href: SocialLinks.INSTAGRAM },
        { icon: FaLinkedin, label: "LinkedIn", href: SocialLinks.LINKEDIN },
        { icon: FaFacebook, label: "Facebook", href: SocialLinks.FACEBOOK },
        { icon: SiLeetcode, label: "Leetcode", href: SocialLinks.LEETCODE },
        { icon: FaWhatsapp, label: "WhatsApp", href: SocialLinks.WHATSAPP }
    ];

    return (

        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-[#0d0924] via-[#0e0724] to-[#000000] py-32 px-4 md:px-16">
            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#b97aff]/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#6c2bd7]/30 to-transparent rounded-full blur-2xl" />
            </div>


            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-8xl md:text-9xl font-bold text-white/10 select-none"
                >
                    CONTACT
                </motion.h1>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
                >
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="md:text-3xl text-xl font-bold text-white/30 pb-5 select-none leading-0"
                        >
                            Just say Hello
                        </motion.div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name Field */}
                            <div className="relative">
                                <label
                                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${isFieldFocusedOrFilled('name')
                                        ? 'text-sm text-white -top-2 bg-gray-900 px-2'
                                        : 'text-base text-gray-400 top-4'
                                        }`}
                                >
                                    Your Name
                                </label>
                                <input
                                    {...register('name', { required: 'Name is required' })}
                                    type="text"
                                    className={`w-full px-4 py-4 border border-gray-700 rounded-lg text-white transition-all duration-200 ${isFieldFocusedOrFilled('name')
                                        ? 'border-[#370471]'
                                        : 'border-gray-700'
                                        } focus:outline-none focus:border-[#370471]`}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                />
                                {errors.name && (
                                    <p className="text-red-500 absolute bottom-1 font-light right-3 text-sm">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <label
                                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${isFieldFocusedOrFilled('email')
                                        ? 'text-sm text-white -top-2 bg-gray-900 px-2'
                                        : 'text-base text-gray-400 top-4'
                                        }`}
                                >
                                    Your Email
                                </label>
                                <input
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    type="email"
                                    className={`w-full px-4 py-4 border border-gray-700 rounded-lg text-white transition-all duration-200 ${isFieldFocusedOrFilled('email')
                                        ? 'border-[#370471]'
                                        : 'border-gray-700'
                                        } focus:outline-none focus:border-[#370471]`}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                />
                                {errors.email && (
                                    <p className="text-red-500 absolute bottom-1 font-light right-3 text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Subject Field */}
                            <div className="relative">
                                <label
                                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${isFieldFocusedOrFilled('subject')
                                        ? 'text-sm text-white -top-2 bg-gray-900 px-2'
                                        : 'text-base text-gray-400 top-4'
                                        }`}
                                >
                                    Your Subject
                                </label>
                                <input
                                    {...register('subject', { required: 'Subject is required' })}
                                    type="text"
                                    className={`w-full px-4 py-4 pl-8 border border-gray-700 rounded-lg text-white transition-all duration-200 ${isFieldFocusedOrFilled('subject')
                                        ? 'border-[#370471]'
                                        : 'border-gray-700'
                                        } focus:outline-none focus:border-[#370471]`}
                                    onFocus={() => setFocusedField('subject')}
                                    onBlur={() => setFocusedField(null)}
                                />
                                {errors.subject && (
                                    <p className="text-red-500 absolute bottom-1 font-light right-3 text-sm">{errors.subject.message}</p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div className="relative">
                                <label
                                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${isFieldFocusedOrFilled('message')
                                        ? 'text-sm text-white -top-2 bg-gray-900 px-2'
                                        : 'text-base text-gray-400 top-4'
                                        }`}
                                >
                                    Your Message
                                </label>
                                <textarea
                                    {...register('message', { required: 'Message is required' })}
                                    rows={5}
                                    className={`w-full px-4 py-4 border border-gray-700 rounded-lg text-white transition-all duration-200 resize-none ${isFieldFocusedOrFilled('message')
                                        ? 'border-[#370471]'
                                        : 'border-gray-700'
                                        } focus:outline-none focus:border-[#370471]`}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                />
                                {errors.message && (
                                    <p className="text-red-500 absolute bottom-3 font-light right-3 text-sm">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Send Button */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-gradient-to-r from-[#5e04c6] to-[#370471] hover:bg-gradient-to-l hover:from-[#370471] hover:to-[#5e04c6] transition-all duration-300 text-white font-semibold px-8 py-3 rounded-md shadow-lg cursor-pointer flex items-center gap-2 self-start md:self-auto">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">Contact Info</h2>
                            <p className="text-gray-300 mb-8">
                                Let’s connect—reach out for projects, collaborations, or just a friendly conversation.
                            </p>
                        </motion.div>

                        {/* Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className="flex items-center space-x-4"
                            >
                                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                    <FaEnvelope className="text-[#370471]" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Email</p>
                                    <p className="text-gray-300">{AboutMe.EMAIL}</p>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                className="flex items-center space-x-4"
                            >
                                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                    <FaPhone className="text-[#370471]" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Phone</p>
                                    <p className="text-gray-300">{AboutMe.PHONE_NUMBER}</p>
                                </div>
                            </motion.div>

                            {/* Address */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                className="flex items-center space-x-4"
                            >
                                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                    <FaMapMarkerAlt className="text-[#370471]" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Address</p>
                                    <p className="text-gray-300">{AboutMe.ADDRESS}</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Social Media */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                            className="pt-6"
                        >
                            <h3 className="text-white font-semibold mb-4">Visite my social profile and get connected</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: false }}
                                            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${index < 2
                                                ? 'bg-white text-gray-900 hover:bg-gray-200'
                                                : 'bg-gray-800 text-white hover:bg-gray-700'
                                                }`}
                                        >
                                            <IconComponent />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
