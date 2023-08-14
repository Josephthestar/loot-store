import React, { useState } from 'react';

export default function EditEntryForm({ entry, handleUpdateEntry }) {
  const [formData, setFormData] = useState({
    details: {
      animeloot: entry.details.animeloot || '',
      MerchName: entry.details.MerchName,
      ReleasedDate: entry.details.ReleasedDate,
      Quantity: entry.details.Quantity,
      ItemNumber: entry.details.ItemNumber,
      entry: entry.details.entry,
      tryURL: entry.details.tryURL,
      imgURL: entry.details.imgURL,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateEntry(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="animeloot"
        value={formData.details.animeloot}
        onChange={handleChange}
        required
      />
      <input
        name="MerchName"
        value={formData.details.MerchName}
        onChange={handleChange}
        required
      />
      <input
        name="ReleasedDate"
        value={formData.details.ReleasedDate}
        onChange={handleChange}
        type="date"
        required
      />
      <input
        name="Quantity"
        value={formData.details.Quantity}
        onChange={handleChange}
        required
      />
      <input
        name="ItemNumber"
        value={formData.details.ItemNumber}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="imgURL"
        value={formData.details.imgURL}
        onChange={handleChange}
      />
      <input
        type="url"
        name="tryURL"
        value={formData.details.tryURL}
        onChange={handleChange}
      />
      <textarea
        name="entry"
        value={formData.details.entry}
        onChange={handleChange}
        required
      />

      <button type="submit">Update Anime Merc</button>
    </form>
  );
}
