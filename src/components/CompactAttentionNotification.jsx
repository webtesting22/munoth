import React, { useState, useEffect } from 'react';
import './CompactAttentionNotification.css';

const CompactAttentionNotification = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show notification 5 seconds after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className={`compact-attention-notification ${isExpanded ? 'expanded' : ''}`}>
      <div className="notification-header">
        <h4 className="notification-title">Attention!</h4>
        <button 
          className="notification-close-btn"
          onClick={handleClose}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
      
      <div className="notification-content">
        {!isExpanded ? (
          <p>
            Beware of fake WhatsApp groups misusing our name. We have lodged a complaint with authorities. 
            Only trust our official communication channels.
          </p>
        ) : (
          <div className="expanded-content">
            <p>
              Certain unknown miscreants have formed a WhatsApp group misusing our name and infringing on our logo thereby inducing people to invest in stocks, falsely assuring them high profits and then duping them of their money.
            </p>
            <p>
              We have lodged a Complaint at the Sarkhej Police Station, Ahmedabad (Dated 22-July-2025) in relation to the aforesaid acts and also informed regulatory authorities about the same.
            </p>
            <p>
              Munoth Capital Market Limited is a regulated entity. Neither we, nor any of our partners, directors or employees have created or subscribed to any such fake websites or groups.
            </p>
            <p>
              We recommend that you only trust communication from authorised platforms - <a href="http://www.munoth.com/" target="_blank" rel="noopener noreferrer">Official website</a>, <a href="https://www.linkedin.com/company/munoth/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://x.com/MunothCapital" target="_blank" rel="noopener noreferrer">X</a>, <a href="https://www.instagram.com/munoth.capital/" target="_blank" rel="noopener noreferrer">Instagram</a>.
            </p>
            <p style={{marginBottom:"0px", fontWeight: "bold"}}>
              For any clarification or official communication, email us at <a href="mailto:info@munoth.com">info@munoth.com</a> or contact us on our official number <a href="tel:9033003188">9033003188</a>
            </p>
          </div>
        )}
      </div>
      
      <div className="notification-actions">
        <button 
          className="expand-btn"
          onClick={handleExpand}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
      
      <div className="notification-pulse"></div>
    </div>
  );
};

export default CompactAttentionNotification;
