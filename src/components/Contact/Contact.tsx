import { useState, type FormEvent } from 'react'
import { PHONE, SOCIALS } from '../../constants'
import { cn } from '../../lib/cn'
import Button from '../UI/Button'
import Reveal from '../UI/Reveal'
import SectionHeading from '../UI/SectionHeading'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from '../UI/icons'

const WEB3FORMS_ACCESS_KEY = '1a83f8f1-7124-4dff-8d18-8e106f70308f'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return

    const newErrors: FormErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setStatus('sending')
    setErrorMsg('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      })

      const data = await response.json().catch(() => null)

      if (response.ok && data?.success) {
        setStatus('success')
        setFormData(INITIAL_FORM)
      } else {
        setStatus('error')
        setErrorMsg(
          data?.message ||
            'Something went wrong — please try emailing me directly at zaindogar.dev@gmail.com instead.',
        )
      }
    } catch {
      setStatus('error')
      setErrorMsg(
        'Something went wrong — please try emailing me directly at zaindogar.dev@gmail.com instead.',
      )
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Left: invitation + direct links */}
        <Reveal>
          <SectionHeading eyebrow="Contact" solid="Let's talk for" outline="something special" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
            Have a role, project, or idea in mind? I&apos;m open to full-time roles, internships, and
            remote freelance work. Drop me a message and I&apos;ll get back to you.
          </p>

          <ul className="mt-8 space-y-4">
            <ContactRow
              href={`mailto:${SOCIALS.email}`}
              icon={<MailIcon />}
              label={SOCIALS.email}
              external={false}
            />
            <ContactRow
              href={`tel:${PHONE.replace(/\s+/g, '')}`}
              icon={<PhoneIcon />}
              label={PHONE}
              external={false}
            />
            <ContactRow href={SOCIALS.linkedin} icon={<LinkedInIcon />} label="linkedin.com/in/zain-waqar" />
            <ContactRow href={SOCIALS.github} icon={<GitHubIcon />} label="github.com/Doger69" />
          </ul>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-zinc-150 bg-white p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                autoComplete="email"
              />
            </div>
            <Field
              label="Subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              className="mt-4"
            />
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/70">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-y rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-ink focus:bg-white"
              />
            </div>

            <Button type="submit" className="mt-6 w-full" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Get In Touch'}
            </Button>

            <p role="status" aria-live="polite" className="mt-4 min-h-5 text-center text-sm">
              {status === 'success' && (
                <span className="font-medium text-ink">Message sent! I&apos;ll get back to you soon. ✅</span>
              )}
              {status === 'error' && <span className="font-medium text-accent">{errorMsg}</span>}
              {status === 'idle' && (
                <span className="text-ink/40">I&apos;ll reply within a day or two.</span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  value,
  onChange,
  error,
  autoComplete,
  className,
}: {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  autoComplete?: string
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className={cn(
          'w-full rounded-xl border bg-cream px-4 py-3 text-sm outline-none transition-colors focus:bg-white',
          error ? 'border-accent focus:border-accent' : 'border-ink/15 focus:border-ink',
        )}
      />
      {error && <p className="mt-1 text-xs font-medium text-accent">{error}</p>}
    </div>
  )
}

function ContactRow({
  href,
  icon,
  label,
  external = true,
}: {
  href: string
  icon: React.ReactNode
  label: string
  external?: boolean
}) {
  const handleClick = () => {
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.location.href = href
    }
  }

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group inline-flex items-center gap-3 text-ink/80 transition-colors hover:text-ink"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
          {icon}
        </span>
        <span className="text-sm font-medium">{label}</span>
      </a>
    </li>
  )
}
