
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create data object
    const formData = {
      name: name,
      email: email,
      message: message,
      submittedAt: new Date().toLocaleString(),
    };

    // Log to console
    console.log('Form submitted:', formData);

    // Store submitted data for display
    setSubmittedData(formData);

    // Show success message
    setShowSuccess(true);

    // Clear form
    setName('');
    setEmail('');
    setMessage('');

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Contact Us</h2>
      {/* Success Message */}
      {showSuccess && (
        <div className="success-message">
          <strong>Success!</strong> Your message has been submitted successfully.
        </div>
      )}
      {/* Contact Form */}
      <div className="form-fields">
        <div className="form-group">
          <label className="form-label">Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Message *</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="form-textarea"
            placeholder="Enter your message"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={!name || !email || !message}
          className="submit-button"
        >
          Send Message
        </button>
      </div>
      {/* Display Submitted Data */}
      {submittedData && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Last Submission:
          </h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
            <p>
              <strong>Submitted:</strong> {submittedData.submittedAt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
