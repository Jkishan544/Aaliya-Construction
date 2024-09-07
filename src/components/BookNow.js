import React from "react";
import Heading from "./Heading";
import { useState } from 'react'
import { useForm } from "react-hook-form"
  import AnimateLeftRight from "./Animate/AnimateLeftRight";

export const BookNow = (props) => {
    const [submitting, setSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { register, handleSubmit,   formState: { errors }, } = useForm()
    const onSubmit = async data => {
        console.log(data)
        await setSubmitting(true)
        const url = 'https://theroguepixxel.com/waapi/contact_submission'
        const requestOptions = {
            method: 'POST',
            mode: "no-cors",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: Object.entries(data).map(([k, v]) => { return k + '=' + v }).join('&')
        };
        await fetch(url, requestOptions)
            .then(async response => {
                await setSubmitting(false)
                await setFormSubmitted(true)
            })
            .catch(async error => {
                await setSubmitting(false)
            })
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)} id="Book" autocomplete="on">
            <div className=" py-6 px-36 max-sm:px-8 max-sm:py-2">
                <input
                    {...register("uid", { required: true })}
                    className="w-full relative border border-secondary rounded-sm transition-colors focus-within:text-dark focus-within:border-accent items-center mt-1 group px-4 py-2 text-base lg:text-lg"
                    name="uid" type="text" required="" hidden={true} value="test" />
                <AnimateLeftRight direction='left' delay={0.2}  >
                    <Heading title="Book Now" />
                </AnimateLeftRight>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
                    <div className="w-1/2 max-sm:w-auto">
                        <div><p>premium 3bhk cnt Appartment</p></div>
                    </div>
                    <div className="w-auto flex flex-wrap py-6 px-5">
                        <div className="grid grid-cols-2 gap-4 w-full max-sm:grid-cols-1">
                            <div className="w-full relative input_group">
                                <label htmlFor="name"
                                    className="  text-base font-bold font-serif font-barlow 2xl:text-2xl">Name: <span className="material-symbols-outlined text-red-600 text-xs">    emergency </span>
                                </label>

                                <input
                                    className="w-full relative border border-light  items-center mt-1 group px-4 pt-3 pb-2.5 rounded text-sm 2xl:text-xl"
                                    placeholder="Full Name.."
                                    disabled={formSubmitted || submitting}
                                    name="name" type="text" {...register("name", { required: true })}
                                    id="name" />
                                <span className="text-xs text-red-500">&nbsp;{errors.name && <span>Please enter your Name.</span>}</span>
                            </div>




                            <div className="w-full relative input_group ">
                                <label htmlFor="email"
                                    className="  text-base font-bold font-serif font-barlow 2xl:text-2xl ">Email: <span className="material-symbols-outlined text-red-600 text-xs">
                                        emergency
                                    </span>
                                </label>

                                <input
                                    className="w-full relative border border-light items-center mt-1 group px-4 pt-3 pb-2.5 rounded text-sm 2xl:text-xl"
                                    placeholder="Email.. "
                                    disabled={formSubmitted || submitting}
                                    name="email" type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                                    id="email"/>
                                <span className="text-xs text-red-500">&nbsp; {errors.email && <span className="text-xs text-red-500">Please enter your valid Email.</span>}</span>
                            </div>




                            <div className="relative w-full">
                                <label htmlFor="phone"
                                    className=" text-base font-bold font-serif font-barlow 2xl:text-2xl">Phone: <span className="material-symbols-outlined text-red-600 text-xs">
                                        emergency
                                    </span>
                                </label>

                                <input
                                    className="w-full relative border border-light items-center mt-1 group px-4 pt-3 pb-2.5 rounded text-sm 2xl:text-xl"
                                    placeholder="Phone.. "
                                    disabled={formSubmitted || submitting}
                                    name="phone" type="tel" {...register("phone", { required: true, minLength: 10, maxLength: 10 })} 
                                    id="phone"/>
                                <span className="text-xs text-red-500">&nbsp; {errors.phone && <span className="text-xs text-red-500">Please enter your Phone Number.</span>}</span>
                            </div>




                            <div className="w-full relative">
                                <label htmlFor="purpose"
                                    className="text-base font-bold font-serif font-barlow 2xl:text-2xl">Purpose:</label>

                                <select
                                    className="w-full relative text-sm border border-light items-center mt-1 group px-4 pt-2 pb-3.5  rounded font-serif font-barlow 2xl:text-xl"
                                    placeholder=" "
                                    disabled={formSubmitted || submitting}
                                    name="purpose" type="text" {...register("purpose", { required: true })}
                                    id="purpose">
                                    <option value="General">General Inquiry</option>
                                    <option value="Business Proposition">Business Proposition</option>
                                    <option value="Service Related">Service Related</option>
                                </select>
                            </div>
                        </div>





                        <div className="w-full relative input_group">
                            <label
                                className="text-base font-bold font-serif font-barlow 2xl:text-2xl">Message:</label>

                            <textarea
                                className="w-full relative border border-light items-center mt-1 group px-4 pt-3 pb-2.5 rounded text-sm 2xl:text-xl"
                                placeholder=" Your message.."
                                disabled={formSubmitted || submitting}
                                name="message" {...register("message", { required: true })} 
                                id="message"/>
                        </div>
                        <span className="text-xs text-red-500">&nbsp; {errors.message && <span className="text-xs text-red-500">Please enter your message.</span>}</span>




                        <div className="w-full mt-3 flex items-center">
                            <button type="submit" disabled={formSubmitted || submitting} className="  px-8 py-2 text-white bg-primary font-serif font-barlow 2xl:text-2xl hover:scale-105 hover:transition-transform">Submit</button>
                            {
                                formSubmitted && <p className="flex-1 text-base text-center px-4 font-serif font-barlow font-bold">We have received your message, We will get back to you soon.</p>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </form>

    );
} 
export default BookNow;
