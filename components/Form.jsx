"use client";
import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Error sending email.');
    } 
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      {/* input name */}
      <div className="relative flex items-center">
        <Input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input mail */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* text area */}
      <div className="relative flex items-center">
        <Textarea id="message" placeholder="Type Your Message Here." value={formData.message} onChange={handleChange} />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
