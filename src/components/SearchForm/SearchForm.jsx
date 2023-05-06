import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const onSubmitForm = evt => {
    evt.preventDefault();

    const value = evt.target.search.value.trim();
    if (!value) return;

    onSubmit(value);

    evt.target.reset();
  };

  return (
    <SearchFormStyled onSubmit={onSubmitForm}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </SearchFormStyled>
  );
};
