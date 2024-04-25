import React, { useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);
  const [command, setCommand] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCommand(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputRef.current.value = '';
    if(command === 'test') console.log('test function working correctly');
    setCommand('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          ref={inputRef}
        />
      </form>
    </>
  );
};

export default App;
