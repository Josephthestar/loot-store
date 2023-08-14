import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewEntryPage from '../NewEntryPage/NewEntryPage';
import EntriesListPage from '../EntriesListPage/EntriesListPage';
import EntryDetailPage from '../EntryDetailPage/EntryDetailPage';
import UpdateEntryPage from "../UpdateEntryPage/UpdateEntryPage"
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';

// import * as entriesService from '../../utilities/entries-service'
// varibale /set method/ \use state to define a state what gors inside () defines it to creat a state
export default function App() {
  const [user, setUser] = useState(getUser());
  const [entries, setEntries] = useState([]);
  const [cart, setCart] = useState([]);
  //need this first important
  function addEntry(entry) {
    setEntries([...entries, entry])
  }

  return (
    <main className="App main">
      {/* user = true */}
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage cart={cart} setCart={setCart}/>} />
              <Route path="/entries/new" element={<NewEntryPage addEntry={addEntry}/>} />
              <Route path="/entries" element={<EntriesListPage 
              entries={entries} setEntries={setEntries} cart={cart} setCart={setCart} />} />
              <Route path="/*" element={<Navigate to='/entries' />} />
              <Route path="/entries/:id" element={<EntryDetailPage />} />
              <Route path="/entries/:id/edit" element={<UpdateEntryPage />} />
              {/* //pass cart and setcart into homepage and entries list page */}
            </Routes>
          </>
          :
          // user = false
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
