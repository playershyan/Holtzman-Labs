import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export function EmailTemplate({ name, email, projectType, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px' }}>
      <h1 style={{ color: '#0f172a', borderBottom: '2px solid #f97316', paddingBottom: '10px' }}>
        New Contact Form Submission
      </h1>
      
      <div style={{ marginTop: '20px' }}>
        <p style={{ margin: '10px 0' }}>
          <strong style={{ color: '#475569' }}>Name:</strong> {name}
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong style={{ color: '#475569' }}>Email:</strong> {email}
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong style={{ color: '#475569' }}>Project Type:</strong> {projectType}
        </p>
      </div>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <strong style={{ color: '#475569', display: 'block', marginBottom: '10px' }}>Message:</strong>
        <p style={{ margin: 0, color: '#1e293b', whiteSpace: 'pre-wrap' }}>{message}</p>
      </div>
      
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#fef2f2', borderRadius: '8px', borderLeft: '4px solid #f97316' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
          Reply directly to this email to respond to <strong>{name}</strong> at <strong>{email}</strong>
        </p>
      </div>
    </div>
  );
}

