import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch(process.env.REACT_APP_FORMSPREE_URL !, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setResponseMessage('Your message has been sent successfully!');
      } else {
        setResponseMessage('There was an error sending your message.');
      }
    } catch (error) {
      setResponseMessage('There was an error sending your message.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your business with intelligent solutions? Contact us today to schedule a consultation and discover how we can help you achieve your goals.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-indigo-600" />
                <span className="text-gray-600">contact@synarex.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-indigo-600" />
                <span className="text-gray-600">+91 8840527316</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-indigo-600" />
                <span className="text-gray-600">Noida , Uttar Pradesh , India</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {responseMessage && <p className="mt-4 text-center text-gray-600">{responseMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



// import React, { useState } from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [responseMessage, setResponseMessage] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formDataToSend = new FormData();
//     formDataToSend.append('name', formData.name);
//     formDataToSend.append('email', formData.email);
//     formDataToSend.append('message', formData.message);

//     const formspreeUrl = process.env.REACT_APP_FORMSPREE_URL;

//     if (!formspreeUrl) {
//       setResponseMessage('Form submission URL is not configured.');
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const response = await fetch(formspreeUrl, {
//         method: 'POST',
//         body: formDataToSend,
//         headers: {
//           Accept: 'application/json',
//         },
//       });

//       if (response.ok) {
//         setResponseMessage('Your message has been sent successfully!');
//       } else {
//         setResponseMessage('There was an error sending your message.');
//       }
//     } catch (error) {
//       setResponseMessage('There was an error sending your message.');
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <section id="contact" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
//             <p className="text-lg text-gray-600 mb-8">
//               Ready to transform your business with intelligent solutions? Contact us today to schedule a consultation and discover how we can help you achieve your goals.
//             </p>
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Mail className="h-6 w-6 text-indigo-600" />
//                 <span className="text-gray-600">contact@synarex.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="h-6 w-6 text-indigo-600" />
//                 <span className="text-gray-600">+91 8840527316</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="h-6 w-6 text-indigo-600" />
//                 <span className="text-gray-600">Noida , Uttar Pradesh , India</span>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-50 p-8 rounded-xl">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Your name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="your@email.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="How can we help you?"
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </button>
//             </form>
//             {responseMessage && <p className="mt-4 text-center text-gray-600">{responseMessage}</p>}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
