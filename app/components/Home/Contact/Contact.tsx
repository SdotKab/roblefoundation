"use client"

import { motion } from "framer-motion";
import { useForm } from 'react-hook-form';
import image10 from "@/public/image10.jpg";
import H2Text from "../../Helper/H2Text";
import Image from "next/legacy/image";

const Contact = () => {
    const emailUrl = process.env.NEXT_PUBLIC_EMAIL_URL || "#home";
    const inputStyles = `mb-3 w-full rounded-lg border-2 border-gray-100 px-5 py-3 placeholder-black`;

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();
    
    // Change from `any` to `React.FormEvent<HTMLFormElement>`
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contact" className="mx-auto w-5/6 pt-24 pb-32 mt-10">
            <motion.div>
                {/* HEADER */}
                <motion.div 
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <H2Text>
                        <span className="text-primary-500">Contact </span>Us
                    </H2Text>
                </motion.div>
                {/* FORM AND IMAGE */}
                <div className="mt-5 justify-between gap-6 md:flex">
                    <motion.div
                        className="mt-10 basis-1/2 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <p className="my-5">
                        <b>Make a Difference Today:</b> Every dollar, every effort, and every voice matters in the fight for clean water access. Contact us to learn more.
                        </p>
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action={emailUrl}
                            method="POST"
                        >
                            <input 
                                className={inputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required:true,
                                    maxLength:100,
                                })}
                            />
                            {errors.name && (
                                <p className="mb-3 text-red-700">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max length is 100 characters."}
                                </p>
                            )}
                            <input 
                                className={inputStyles}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required:true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mb-3 text-red-700">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "email" && "Invalid email address."}
                                </p>
                            )}
                            <textarea 
                                className={inputStyles}
                                rows={4}
                                cols={50}
                                placeholder="MESSAGE"
                                {...register("message", {
                                    required:true,
                                    maxLength:2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mb-3 text-red-700">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        className="relative mt-16 basis-1/2 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <Image 
                            className="w-full rounded-lg"
                            alt="contact-us-page-graphic"
                            src={image10}
                        />
                        <p className="text-xs text-right">Photographed by Pablo Tosco</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;