import { useState } from "react";
import { useNavigate } from "react-router-dom";
import create from "../../utilities/entries-service";

export default function NewEntryPage({ addEntry }) {
  const [newEntry, setNewEntry] = useState({
    details: {
      animeloot: "",
      MerchName: "",
      ReleasedDate: "",
      Quantity: "",
      ItemNumber: "",
      entry: "",
      tryURL: "",
      imgURL: "",
    },
  });

  const navigate = useNavigate();
  
    function handleChange(event) {
    const { name, value } = event.target;
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      details: {
        ...prevEntry.details,
        [name]: value,
      },
    }));
  }


  async function handleAddEntry(evt) {
    evt.preventDefault();
    try {
      const createdEntry = await create(newEntry);
      addEntry(createdEntry); // Use the 'addEntry' prop to update the entries
      navigate("/entries");
    } catch (error) {
      console.error("Failed to create a new entry:", error.message);
    }
  }

  return (
    <>
      <h1>Add Merchandise for Extra $10 On-Top of Order</h1>
      <form onSubmit={handleAddEntry}>
        <input
          name="animeloot"
          value={newEntry.details.animeloot}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="MerchName"
          value={newEntry.details.MerchName}
          onChange={handleChange}
          placeholder="Shipping Address"
          required
        />
        <input
          name="ReleasedDate"
          value={newEntry.details.ReleasedDate}
          onChange={handleChange}
          type="date"
          required
        />
        <input
          name="Quantity"
          value={newEntry.details.Quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
        />
        <input
          name="ItemNumber"
          value={newEntry.details.ItemNumber}
          onChange={handleChange}
          placeholder="ItemNumber"
          required
        />
        <input
          type="url"
          name="imgURL"
          value={newEntry.details.imgURL}
          onChange={handleChange}
          placeholder="Link To Item"
        />
        <input
          type="url"
          name="tryURL"
          value={newEntry.details.tryURL}
          onChange={handleChange}
          placeholder="Link To Item"
        />
        <textarea
          name="entry"
          value={newEntry.details.entry}
          onChange={handleChange}
          placeholder="Description of Merc"
          required
        />

        <button type="submit">Add Merc Product</button>
      </form>
    </>
  );
}
