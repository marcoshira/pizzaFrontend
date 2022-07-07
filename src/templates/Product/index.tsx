import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Menu } from '../../components/Menu';
import { NavLinksProps } from '../../components/NavLinks';
import { TextInput } from '../../components/TextInput';
import { Wrapper } from '../../components/Wrapper';
import { setupAPIClient } from '../../services/api';
import { UploadFile } from '@styled-icons/material-outlined/UploadFile';
import * as Styled from './styles';
import { ProductIndexProps } from '../../pages/product';

export function Product({
  links = [],
  categoryList = [],
}: NavLinksProps & ProductIndexProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);
  const [errorColor, setErrorColor] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [imageAvatar, setImageAvatar] = useState(null);
  const [categories, setCategories] = useState(categoryList);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      if (
        name === '' ||
        price === '' ||
        description === '' ||
        imageAvatar === null
      ) {
        setErrorColor(false);
        setError('Please fill in all fields.');
        setLoading(false);
      }
      const data = new FormData();

      data.append('name', name);
      data.append('description', description);
      data.append('price', price);
      data.append('category_id', categories[categoryIndex].id);
      data.append('file', imageAvatar);

      const apiClient = setupAPIClient();

      await apiClient.post('/product', data);

      setError('Success!');
      setErrorColor(true);
    } catch (e) {
      setError('Failure to register.');
    }

    setLoading(false);
  };

  function handleFile(e) {
    if (!e || !e[0]) {
      setError2('File type not supported.');
      return;
    }

    const image = e[0];

    if (image.type === 'image/jpeg' || image.type === 'image/png') {
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(image));
    }
  }

  function handleChangeCategory(event) {
    setCategoryIndex(event.target.value);
    setSelected(true);
  }

  return (
    <Styled.Wrapper>
      <Menu links={links} />
      <Wrapper>
        <Heading size="big" uppercase>
          Cadastrar Produtos
        </Heading>
        <Styled.FormWrapper onSubmit={handleSubmit} selected={selected}>
          <TextInput
            id="Image"
            name="Product-Image"
            label="Cover"
            type="file"
            errorMessage={error2}
            errorGreen={errorColor}
            onFilesChange={handleFile}
            accept="image/png, image/jpeg"
            icon={
              avatarUrl ? (
                <img src={avatarUrl} alt="Foto do produto" />
              ) : (
                <UploadFile />
              )
            }
          />
          <select value={categoryIndex} onChange={handleChangeCategory}>
            {categories.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.name}
                </option>
              );
            })}
          </select>

          <TextInput
            name="Product-name"
            label="Product"
            onInputChange={(e) => setName(e)}
            type="text"
            errorMessage={error ? '' : null}
            errorGreen={errorColor}
            value={name}
          />
          <TextInput
            name="Product-price"
            label="Price"
            onInputChange={(e) => setPrice(e)}
            type="text"
            errorMessage={error ? '' : null}
            errorGreen={errorColor}
            value={price}
          />
          <TextInput
            name="Product-description"
            label="Description"
            onInputChange={(e) => setDescription(e)}
            type="text"
            errorMessage={error}
            errorGreen={errorColor}
            value={description}
            as="textarea"
          />
          <Button disabled={loading} type="submit">
            Salvar
          </Button>
        </Styled.FormWrapper>
      </Wrapper>
    </Styled.Wrapper>
  );
}
