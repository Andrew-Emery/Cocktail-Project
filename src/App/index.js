import React, { useState } from 'react';
import "./index.css"
import { RandomCocktail } from "./components/Random-Cocktail";
import { AToZFilter } from './components/AToZFilter';
import { SearchFilter } from './components/Search';

const tabs = [
  { id: "tab-home", text: "Home", location: <RandomCocktail /> },
  { id: "tab-search", text: "Search", location: <SearchFilter /> },
  { id: "tab-list-all", text: "List all by First Letter", location: <AToZFilter /> },
];

export const NavBar = () => {
  const [currentPage, setCurrentPage] = useState('tab-home');
  const { location } = tabs.find(tab => tab.id === currentPage);
  return (
    <div>
      <h1 class="nav-bar">
        {
          tabs.map(({ id, text }) => (
            <div
              class={id === currentPage ? "current-tab" : "bg-tab"}
              onClick={() => setCurrentPage(id)}
            >
              {text}
            </div>
          ))
        }
      </h1>
      {
        location
      }
    </div>
  );
};