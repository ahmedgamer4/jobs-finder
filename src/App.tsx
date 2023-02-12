import React from 'react';
import {
  BrowserRouter as Router, Link, Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Jobs from './components/Jobs';

function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col gap-6 sm:flex-row">
        <SideBar />
        <Jobs />
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen w-11/12 mx-auto pt-7">
      <h1 className="text-gray-800 text-lg">
        {' '}
        <b>Jobs </b>
        Finder
      </h1>
      <Home />
    </div>
  );
}

export default App;
