import { useState } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Menu } from '../../components/Menu';
import { NavLinksProps } from '../../components/NavLinks';
import { TextInput } from '../../components/TextInput';
import { Wrapper } from '../../components/Wrapper';
import { setupAPIClient } from '../../services/api';
import * as Styled from './styles';

export function Category({ links = [] }: NavLinksProps) {
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorColor, setErrorColor] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    // event.preventDefault();

    if (category === '') {
      setErrorColor(false);
      setError('Please fill in all fields.');
      setLoading(false);
    }
    const apiClient = setupAPIClient();

    await apiClient.post('/category', {
      name: category,
    });
    setCategory('');
    setError('Success!');
    setErrorColor(true);

    setLoading(false);
  };

  const handleChange = (e) => {
    setCategory(e);
  };

  return (
    <Styled.Wrapper>
      <Menu links={links} />
      <Wrapper>
        <Heading size="big" uppercase>
          Cadastrar Categorias
        </Heading>
        <Styled.FormWrapper onSubmit={handleSubmit}>
          <TextInput
            name="new-Category"
            label="Category"
            onInputChange={handleChange}
            type="text"
            errorMessage={error}
            errorGreen={errorColor}
            value={category}
          />
          <Button disabled={loading} type="submit">
            Salvar
          </Button>
        </Styled.FormWrapper>
      </Wrapper>
    </Styled.Wrapper>
  );
}
