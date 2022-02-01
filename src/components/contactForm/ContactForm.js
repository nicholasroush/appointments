import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='name' 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
          placeholder='Contact Name' 
        />
        <input 
          type='tel' 
          name='phone'
          pattern='((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}' 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder='Phone Number' 
          />
        <input 
          type='email'
          name='email'
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        />
        <input type='submit' value='Add Contact' />
      </form>
    </div>
  );
};
