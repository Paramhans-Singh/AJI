import React, { useState } from 'react';

function CreationForm() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [caseInfo, setCaseInfo] = useState('');
    const [document, setDocument] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleCaseInfoChange = (e) => {
        setCaseInfo(e.target.value);
    };

    const handleDocumentChange = (e) => {
        const selectedDocument = e.target.files[0];
        setDocument(selectedDocument);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the data for submission to the server
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phoneNumber', phoneNumber);
        formData.append('address', address);
        formData.append('caseInfo', caseInfo);
        formData.append('document', document);

        // Send the formData to the server using an HTTP request

        // Reset the form fields after submission
        setName('');
        setPhoneNumber('');
        setAddress('');
        setCaseInfo('');
        setDocument(null);
    };

    return (
        <div>
            <h1>Case Entry Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={handleNameChange} /><br />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} /><br />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={address} onChange={handleAddressChange} /><br />

                <label htmlFor="caseInfo">Case Information:</label>
                <textarea id="caseInfo" name="caseInfo" value={caseInfo} onChange={handleCaseInfoChange} /><br />

                <label htmlFor="document">Attach Document:</label>
                <input type="file" id="document" name="document" onChange={handleDocumentChange} /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreationForm;
