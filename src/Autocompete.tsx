import React, { useState, useRef, useEffect } from 'react';
import './Autocomplete.css';

interface AutocompleteProps {
  options: { title: string }[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ options }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<{ title: string }[]>([]);
  const [isItemSelected, setIsItemSelected] = useState<boolean>(false);
  const [isOptionBoxOpen, setIsOptionBoxOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    filterOptions(value);
    setIsOptionBoxOpen(true); 
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && filteredOptions.length === 1) {
      setInputValue(filteredOptions[0].title);
      setFilteredOptions([]);
      setIsItemSelected(true);
    }
  };

  const filterOptions = (value: string) => {
    const filtered = options.filter(
      (option) => option.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setIsOptionBoxOpen(filtered.length > 0); 
    setIsItemSelected(false);
  };

  const handleOptionClick = (option: { title: string }) => {
    setInputValue(option.title);
    setFilteredOptions([]);
    setIsItemSelected(true);
  };

  const highlightText = (text: string) => {
    const regex = new RegExp(`(${inputValue})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  // Handle click outside the component and input field to close the option box
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOptionBoxOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="autocomplete-container">
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Type to search..."
        className="autocomplete-input"
      />
      {isOptionBoxOpen && ( 
        <ul className="autocomplete-options">
          {filteredOptions.length === 0 && !isItemSelected ? (
            <li className="no-matches">No matches found</li>
          ) : (
            filteredOptions.map((option) => (
              <li
                key={option.title}
                onClick={() => handleOptionClick(option)}
                dangerouslySetInnerHTML={{ __html: highlightText(option.title) }}
                className="autocomplete-option"
              />
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
