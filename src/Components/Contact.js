import React, { useRef, useState } from 'react'
import terminal from '../assets/terminal.png'
import up from '../assets/arrow-up.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''
    })
    const handleChange = ({target:{name, value}})=>{
        setForm({...form, [name]:[value]})
    }
    // service_3mh0sna
    const handleSubmit =async (e)=>{
        console.log(form.name[0]);
        console.log(form.email[0]);
        console.log(form.message[0]);
        
        e.preventDefault()
        setLoading(true)
        try {
            await emailjs.send("service_06kduas","template_5g6ypdg",{
                from_name:form.name[0],
                to_name:"Akshay",
                from_email : form.email[0],
                to_email : "akshay1622004@gmail.com",
                message:form.message[0]
            },"_uDS-3seex3f8Kuor")
            setLoading(false)
            alert("Message has been sent")
        } catch (error) {
            throw error.message;
        }
    }
  return (
    <section className="c-space my-20" id="contact">
      {/* {alert.show && <Alert {...alert} />} */}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* <img src={terminal} alt="terminal-bg" className="absolute inset-0 min-h-screen" /> */}

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact