import React from 'react';
// import './GeneralInfo.css'; 

const GeneralInfoPage = () => {
  return (
    <div className="general-info">
      <h1>General Information</h1>

      <section className="constitution-section">
        <h2>Constitution of India</h2>
        <p>
          The Constitution of India is the supreme law of India. It was adopted on January 26, 1950, and is the longest written constitution in the world. It provides the framework for the political structure, fundamental rights, and duties of citizens in India.
        </p>
      </section>

      <section className="justice-law-section">
        <h2>Development of Justice and Law in India</h2>
        <p>
          India's legal system has evolved over centuries and is influenced by a rich history of diverse cultures and traditions. It has been shaped by various laws, regulations, and judicial decisions that have played a crucial role in establishing justice and upholding the rule of law in the country.
        </p>
      </section>

      <section className="articles-laws-section">
        <h2>Key Articles and Laws</h2>
        <p>
          Here are some key articles and laws in the Indian legal system:
        </p>
        <ul>
          <li>Article 15: Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.</li>
          <li>Article 21: Protection of life and personal liberty.</li>
          <li>Indian Penal Code (IPC): The primary criminal code of India.</li>
          <li>Code of Civil Procedure (CPC): Governs civil matters in India.</li>
          <li>Companies Act: Regulates companies and corporate affairs.</li>
        </ul>
      </section>
    </div>
  );
};

export default GeneralInfoPage;
