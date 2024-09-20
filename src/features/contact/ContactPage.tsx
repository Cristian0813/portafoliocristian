import React from 'react';
import { Facebook, Github, Instagram, Linkedin, Mail, MessageCircleMore, MessageSquareText } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 pt-28 relative min-h-screen overflow-hidden">
      <section id="Contacto" className="pt-16">

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-2xl font-semibold mb-6">Contacte conmigo</h1>
              <div className="mb-6">
                <p className="mb-4">
                  ¡No dudes en ponerte en contacto conmigo! Estoy disponible a
                  través de diversas plataformas para responder tus consultas,
                  colaborar en proyectos o simplemente charlar.
                </p>
                <ul className="flex space-x-4">
                  {[
                    {
                      href: 'https://www.linkedin.com/in/cristian-j-arias-o/',
                      icon: Linkedin,
                      label: 'LinkedIn',
                      title: 'LinkedIn',
                    },
                    {
                      href: 'https://wa.me/573175953769',
                      icon: MessageSquareText,
                      title: 'WhatsApp',
                    },
                    {
                      href: 'mailto:javier.0813@hotmail.com',
                      icon: Mail,
                      title: 'Correo electrónico',
                    },
                    {
                      href: 'https://join.skype.com/invite/fNWu15xLwbVy',
                      icon: MessageCircleMore,
                      title: 'Skype',
                    },
                    {
                      href: 'https://www.github.com/Cristian0813',
                      icon: Github,
                      title: 'GitHub',
                    },
                  ].map((social, index) => (
                    <li key={index}>
                      <a
                        className="text-blue-500 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={social.href}
                        title={social.title}
                      >
                        <i className={`${social.icon} text-2xl`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Formulario de contacto
              </h3>
              <form
                id="contact-form"
                action="https://formspree.io/f/xoqopkdp"
                method="POST"
                className="space-y-4"
              >
                <div id="liveAlertPlaceholder"></div>
                <div>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="name"
                    autoCapitalize="words"
                    autoComplete="off"
                    placeholder="Nombre Completo"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="email"
                    autoComplete="off"
                    placeholder="nombre@email.com"
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="coments"
                    autoCapitalize="words"
                    autoComplete="off"
                    placeholder="Escribe tu mensaje aquí"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                  id="liveAlertBtn"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
      </section>
    </main>
  );
};

export default ContactPage;
