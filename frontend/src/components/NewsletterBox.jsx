import { useState } from 'react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    if (!email.trim()) {
      setMessage('Please enter your email address');
      setIsSuccess(false);
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address');
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you'd make an actual API call here
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      setMessage('Successfully subscribed! Welcome to our newsletter.');
      setIsSuccess(true);
      setEmail('');
    } catch {
      setMessage('Something went wrong. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white prata-regular">
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-2 sm:mb-0 tracking-tight">
            Subscribe now and get 20% off
          </h2>
          <span className="text-sm sm:text-base text-gray-500">
            Join our newsletter for exclusive deals and updates
          </span>
        </div>
      </div>

      <div className="max-w-md sm:max-w-lg mx-auto">
        <div className="flex gap-3 sm:gap-4 mb-4">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-0 py-3 bg-transparent border-0 border-b border-gray-200 focus:outline-none focus:border-gray-400 transition-colors placeholder-gray-400 text-gray-900 text-sm sm:text-base"
            disabled={isSubmitting}
            aria-describedby={message ? "message" : undefined}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSubmitHandler(e);
              }
            }}
          />
          <button
            onClick={onSubmitHandler}
            disabled={isSubmitting}
            className="bg-gray-900 text-white py-3 px-4 sm:px-6 lg:px-8 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-xs sm:text-sm tracking-wide uppercase whitespace-nowrap cursor-pointer "
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        
        {message && (
          <div
            id="message"
            className={`text-xs text-center ${
              isSuccess 
                ? 'text-green-600' 
                : 'text-red-500'
            }`}
            role="alert"
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterBox;