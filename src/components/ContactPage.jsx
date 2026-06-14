import React, { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'motion/react';
import { lightTheme } from './Themes';
import emailjs from '@emailjs/browser';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitlte from '../subComponents/BigTitlte';

const EMAILJS_SERVICE_ID = 'service_o4rqwye';
const EMAILJS_TEMPLATE_ID = 'template_b5vds18';
const EMAILJS_PUBLIC_KEY = 'xt376RA6cLSeOyu4u';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
    align-items: flex-start;
    padding-top: 5rem;
    padding-bottom: 3rem;
  }
`;

const FormContainer = styled(motion.div)`
  width: 90vw;
  max-width: 480px;
  padding: 2.5rem 2.5rem;
  background: rgba(${props => props.theme.bodyRgba}, 0.75);
  backdrop-filter: blur(10px);
  border: 2px solid ${props => props.theme.text};
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  z-index: 3;

  @media (max-width: 500px) {
    padding: 1.5rem 1.2rem;
    max-width: 95vw;
  }
`;

const Title = styled.h2`
  font-family: 'Karla', sans-serif;
  font-weight: 600;
  font-size: calc(1.2rem + 1vw);
  text-align: center;
  color: ${props => props.theme.text};
  margin: 0 0 0.5rem 0;
`;

const Label = styled.label`
  font-family: 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem 1rem;
  border: 2px solid ${props => props.theme.text};
  border-radius: 8px;
  background: transparent;
  color: ${props => props.theme.text};
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-color: #333;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.08);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.7rem 1rem;
  border: 2px solid ${props => props.theme.text};
  border-radius: 8px;
  background: transparent;
  color: ${props => props.theme.text};
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  resize: vertical;
  min-height: 110px;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-color: #333;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.08);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.85rem 2.5rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.theme.text};
  color: ${props => props.theme.body};
  font-family: 'Karla', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  align-self: center;
  letter-spacing: 1px;
  transition: background 0.3s ease;
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

const StatusMessage = styled(motion.p)`
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.95rem;
  color: ${props => props.$error ? '#d32f2f' : props.theme.text};
  margin: 0;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ContactPage = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ text: '', error: false });

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    setStatus({ text: '', error: false });

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus({ text: '✅ Message sent successfully!', error: false });
      formRef.current.reset();
      setTimeout(() => setStatus({ text: '', error: false }), 5000);
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      setStatus({ text: '❌ Failed to send. Please try again.', error: true });
      setTimeout(() => setStatus({ text: '', error: false }), 5000);
    })
    .finally(() => {
      setSending(false);
    });
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticleComponent theme='light' />

        <FormContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 1, delay: 0.5 }}
        >
          <Title>Contact Me</Title>
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <FieldGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="phno">Phone Number</Label>
              <Input
                id="phno"
                type="tel"
                name="phno"
                placeholder="Your Phone Number"
                required
              />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Your Message..."
                required
              />
            </FieldGroup>
            <SubmitButton
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {sending ? 'SENDING...' : 'SEND'}
            </SubmitButton>
          </form>
          {status.text && (
            <StatusMessage
              $error={status.error}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {status.text}
            </StatusMessage>
          )}
        </FormContainer>

        <BigTitlte text="CONTACT" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default ContactPage;
