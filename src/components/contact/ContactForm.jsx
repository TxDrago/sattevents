"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  guests: "",
  budget: "",
  message: "",
};

const eventTypes = [
  "Corporate Event",
  "Wedding",
  "Destination Wedding",
  "Conference / MICE",
  "Festival / Cultural Event",
  "Concert / Live Entertainment",
  "Sports Event",
  "Exhibition / Expo",
  "College / Youth Event",
  "Government Event",
  "Other",
];

const budgetOptions = [
  "Under ₹5 Lakh",
  "₹5 Lakh — ₹10 Lakh",
  "₹10 Lakh — ₹25 Lakh",
  "₹25 Lakh — ₹50 Lakh",
  "₹50 Lakh+",
  "Not Decided Yet",
];

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("SATT Contact Enquiry:", form);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[500px] items-center justify-center text-center">

        <div className="max-w-md">

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
            Thank You
          </span>

          <h2 className="mt-5 font-heading text-4xl md:text-5xl">
            Your story starts here.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--satt-text-secondary)]">
            We've received your enquiry. Our team will review the details
            and get back to you shortly.
          </p>

          <button
            type="button"
            onClick={() => {
              setForm(initialForm);
              setSubmitted(false);
            }}
            className="mt-8 border border-[var(--satt-gold)] px-7 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-[var(--satt-gold)]"
          >
            Send Another Enquiry
          </button>

        </div>

      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* FORM HEADER */}

      <div className="mb-10">

        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
          Event Enquiry
        </span>

        <h2 className="mt-4 font-heading text-3xl md:text-4xl">
          Tell us a little about your event.
        </h2>

      </div>


      {/* NAME + COMPANY */}

      <div className="grid gap-8 md:grid-cols-2">

        <Field
          label="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <Field
          label="Company / Organisation"
          name="company"
          value={form.company}
          onChange={handleChange}
        />

      </div>


      {/* EMAIL + PHONE */}

      <div className="grid gap-8 md:grid-cols-2">

        <Field
          label="Email Address"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <Field
          label="Phone Number"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

      </div>


      {/* EVENT TYPE */}

      <SelectField
        label="Event Type"
        name="eventType"
        value={form.eventType}
        onChange={handleChange}
        options={eventTypes}
        required
      />


      {/* DATE + GUESTS */}

      <div className="grid gap-8 md:grid-cols-2">

        <Field
          label="Event Date"
          type="date"
          name="eventDate"
          value={form.eventDate}
          onChange={handleChange}
        />

        <Field
          label="Expected Guests"
          name="guests"
          value={form.guests}
          onChange={handleChange}
          placeholder="e.g. 500"
        />

      </div>


      {/* BUDGET */}

      <SelectField
        label="Estimated Budget"
        name="budget"
        value={form.budget}
        onChange={handleChange}
        options={budgetOptions}
      />


      {/* MESSAGE */}

      <div>

        <label
          htmlFor="message"
          className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--satt-text-secondary)]"
        >
          Tell Us About Your Event
        </label>

        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your vision, venue, requirements or anything else you'd like us to know..."
          className="mt-3 w-full resize-none border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[var(--satt-gold-dark)]"
        />

      </div>


      {/* SUBMIT */}

      <div className="pt-3">

        <button
          type="submit"
          className="group flex w-full items-center justify-between bg-[var(--satt-gold)] px-6 py-5 text-[10px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-[var(--satt-gold-dark)]"
        >

          <span>
            Send Enquiry
          </span>

          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>

        </button>

      </div>

    </form>
  );
}


/* =========================================================
   INPUT FIELD
========================================================= */

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--satt-text-secondary)]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-[var(--satt-gold-dark)]"
      />

    </div>
  );
}


/* =========================================================
   SELECT FIELD
========================================================= */

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--satt-text-secondary)]"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-3 w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-[var(--satt-gold-dark)]"
      >
        <option value="">
          Select an option
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

    </div>
  );
}