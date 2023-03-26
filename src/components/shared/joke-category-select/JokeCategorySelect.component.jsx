import React, { useEffect, useState } from 'react'
import STORE_JOKES from '../../../store/Jokes/jokes.store';
export default function JokeCategorySelect() {
  const [jokesCategories, setJokesCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    STORE_JOKES.subscribe(() => {
      setJokesCategories(STORE_JOKES.getState()['jokeCategories']);
    });
  }, []);
  return (
    <div>
      <select onChange={setSelectedCategory}>
        <option value="">Nothing to select</option>
        {
          jokesCategories.map((category) => (<option key={category}>{category}</option>))
        }
      </select>
    </div>
  )
}
