import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4ol1ws3', 'template_lq84z2n', formRef.current, {
        publicKey: '50q2FusJaqNVK8PrB',
      })
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true)
        },
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Contacto</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Correo</h2>
          <span>cezab10@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Dirección</h2>
          <span>San José, Montes de Oca</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Teléfono</h2>
          <span>+506 87913944</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 81.751 81.751">
            <g>
              <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M78.863,24.446H49.882V5.522c0-3.04-2.483-5.522-5.52-5.522H7.914C4.875,0,2.393,2.483,2.393,5.522v70.707
		c0,3.038,2.483,5.522,5.521,5.522h36.448c3.036,0,5.52-2.484,5.52-5.522V59.915h13.226h2.964l0.161-0.44L78.286,27.31l1.072-2.866
		L78.863,24.446L78.863,24.446z M31.133,29.305l9.653,10.607L20.99,56.375L31.133,29.305z M33.211,27.011h41.4L47.877,43.117
		L33.211,27.011z M20.306,3.982h11.661c0.368,0,0.67,0.299,0.67,0.668c0,0.366-0.302,0.667-0.67,0.667H20.306
		c-0.368,0-0.666-0.301-0.666-0.667C19.64,4.281,19.938,3.982,20.306,3.982z M26.136,78.994c-1.522,0-2.761-1.234-2.761-2.763
		c0-1.521,1.236-2.76,2.761-2.76s2.764,1.233,2.764,2.76C28.9,77.759,27.661,78.994,26.136,78.994z M46.038,71.537H6.233V8.759
		h39.805v15.689H30.877h-0.49l-0.696,1.854H10.454v4.236h17.651l-1.414,3.772H16.242v3.176h9.259l-1.196,3.191h-6.087v2.58h5.12
		l-6.075,16.209l-0.167,0.447h2.96h25.987L46.038,71.537L46.038,71.537z M23.139,57.355L42.22,41.486l4.441,4.879l8.094-4.879
		l7.191,15.869H23.139z M64.83,56.376l-7.462-16.465l17.605-10.607L64.83,56.376z"
              />
            </g>
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <input type="text" required placeholder="Nombre"  name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8}  placeholder="Mensaje" name="message"></textarea>
          <button>Enviar</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
