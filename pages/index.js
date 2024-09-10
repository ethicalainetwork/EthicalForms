import React, { useState } from 'react';
import Head from 'next/head';

const AIUsageSurvey = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    domain: '',
    businessProblems: '',
    aiApplications: '',
    aiUsageDuration: '',
    operatingCountries: '',
    foundationModels: '',
    modelDevelopment: '',
    algorithms: '',
    modelUpdateFrequency: '',
    dataTypes: '',
    dataSources: '',
    dataQualityMethods: '',
    dataPrivacyMeasures: '',
    publicAPIs: '',
    publicAIServices: '',
    securityMeasures: '',
    dataCenterLocations: '',
    cloudServices: '',
    infrastructureScale: '',
    scalabilityMeasures: '',
    ethicalGuidelines: '',
    biasFairnessMeasures: '',
    governanceStructures: '',
    futurePlans: '',
    upcomingProjects: '',
    aiFutureRole: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== 'Ethics777') {
      alert('Incorrect password!');
      return;
    }
    
    try {
      const response = await fetch('/api/addRow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          Date: new Date().toLocaleString()
        }),
      });
      
      if (response.ok) {
        alert('Survey submitted successfully!');
        setFormData({}); // Reset form
      } else {
        throw new Error('Error submitting survey');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('A error occurred while submitting the survey. Please try again.');
    }
  };

  const renderFormGroup = (name, label, type = "text") => (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={formData[name] || ''}
          onChange={handleChange}
          required
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name] || ''}
          onChange={handleChange}
          required
        />
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>AI Usage Survey</title>
        <style>{`
          :root {
            --primary-green: #4CAF50;
            --light-green: #E8F5E9;
            --white: #FFFFFF;
            --gray: #333333;
          }
          
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: var(--gray);
            background-color: var(--light-green);
          }
          
          .container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          
          h1 {
            text-align: center;
            color: var(--primary-green);
            margin-bottom: 30px;
          }
          
          .form-section {
            background-color: var(--white);
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .form-section h2 {
            color: var(--primary-green);
            margin-bottom: 20px;
            border-bottom: 2px solid var(--primary-green);
            padding-bottom: 10px;
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          }
          
          input[type="text"],
          input[type="email"],
          input[type="password"],
          textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
          }
          
          textarea {
            height: 100px;
          }
          
          button[type="submit"] {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: var(--primary-green);
            color: var(--white);
            border: none;
            border-radius: 4px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          
          button[type="submit"]:hover {
            background-color: #45a049;
          }
          
          @media (max-width: 600px) {
            .container {
              padding: 10px;
            }
            
            .form-section {
              padding: 15px;
            }
          }
        `}</style>
      </Head>
      <div className="container">
        <h1>Ethical Compliance & Sustainability : EthicalAI Certified Score</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Authentication</h2>
            {renderFormGroup("email", "Email:", "email")}
            {renderFormGroup("password", "Password:", "password")}
          </div>

          <div className="form-section">
            <h2>Domain and Usage of AI and Location</h2>
            {renderFormGroup("domain", "1. What is the primary domain or industry of your company?")}
            {renderFormGroup("businessProblems", "2. What specific business problems or needs are addressed by your AI solutions?", "textarea")}
            {renderFormGroup("aiApplications", "3. Can you describe the main applications or use cases of AI within your company?", "textarea")}
            {renderFormGroup("aiUsageDuration", "4. How long has your company been using AI technologies?")}
            {renderFormGroup("operatingCountries", "5. In which Countries your company is operating?")}
          </div>

          <div className="form-section">
            <h2>Foundation Models and Algorithms</h2>
            {renderFormGroup("foundationModels", "1. Which foundation models or AI frameworks do you utilize?")}
            {renderFormGroup("modelDevelopment", "2. Are your AI models developed in-house, or do you rely on third-party solutions?")}
            {renderFormGroup("algorithms", "3. What types of algorithms or machine learning techniques are primarily used?")}
            {renderFormGroup("modelUpdateFrequency", "4. How frequently are your AI models updated or retrained?")}
          </div>

          <div className="form-section">
            <h2>Data and Data Management</h2>
            {renderFormGroup("dataTypes", "1. What types of data are used to train and operate your AI models?")}
            {renderFormGroup("dataSources", "2. What are the sources of your data?")}
            {renderFormGroup("dataQualityMethods", "3. How is data quality and integrity ensured?", "textarea")}
            {renderFormGroup("dataPrivacyMeasures", "4. How do you handle data privacy and compliance with regulations?", "textarea")}
          </div>

          <div className="form-section">
            <h2>Public Interfaces and APIs</h2>
            {renderFormGroup("publicAPIs", "1. Do you provide public APIs or interfaces for external users to interact with your AI models?")}
            {renderFormGroup("publicAIServices", "2. What types of AI services are exposed via these public interfaces?", "textarea")}
            {renderFormGroup("securityMeasures", "3. What security measures are in place to protect these interfaces from unauthorized access?", "textarea")}
          </div>

          <div className="form-section">
            <h2>Infrastructure and Data Centers</h2>
            {renderFormGroup("dataCenterLocations", "1. Where are your data centers located?")}
            {renderFormGroup("cloudServices", "2. Do you use cloud-based services for your AI infrastructure? If so, which providers?")}
            {renderFormGroup("infrastructureScale", "3. What is the scale of your AI infrastructure?", "textarea")}
            {renderFormGroup("scalabilityMeasures", "4. How do you ensure the scalability and reliability of your AI systems?", "textarea")}
          </div>

          <div className="form-section">
            <h2>Ethics and Governance</h2>
            {renderFormGroup("ethicalGuidelines", "1. What ethical guidelines or frameworks do you follow in your AI development and deployment?", "textarea")}
            {renderFormGroup("biasFairnessMeasures", "2. How do you address issues of bias and fairness in your AI models?", "textarea")}
            {renderFormGroup("governanceStructures", "3. Are there governance structures in place for overseeing AI usage within the company?", "textarea")}
          </div>

          <div className="form-section">
            <h2>Future Plans</h2>
            {renderFormGroup("futurePlans", "1. What are your future plans for expanding or evolving your use of AI?", "textarea")}
            {renderFormGroup("upcomingProjects", "2. Are there any upcoming AI projects or innovations you can share?", "textarea")}
            {renderFormGroup("aiFutureRole", "3. How do you foresee the role of AI changing in your company over the next 3-5 years?", "textarea")}
          </div>

          <button type="submit">Submit Survey</button>
        </form>
      </div>
    </>
  );
};

export default AIUsageSurvey;
