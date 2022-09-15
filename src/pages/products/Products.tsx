import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { Box, Container, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

import { NextPageWithLayout } from '@pages/_app.next';
import ConfigPage from '@pages/preConfig/ConfigPage';

import { useProductContext } from '@contexts/ProductProvider';

import getLayout from '@components/Layout';
import CardNavigation from '@components/CardNavigation';

import { Product } from '@customTypes/product';

const Products: NextPageWithLayout = () => {
  const [openConfig, setOpenConfig] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const { updateProductList, productsList } = useProductContext();

  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenConfig = (product: Product) => {
    setSelectedProduct(product);
    setOpenConfig(true);
    setAnchorEl(null);
  };

  useEffect(() => {
    updateProductList([
      {
        id: 3,
        description: 'MSG',
        name: 'MeasureSoftGram',
        github_url: 'google.com',
        created_at: '',
        updated_at: ''
      }
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>MeasureSoftGram - Produtos</title>
      </Head>
      <Container>
        <ConfigPage isOpen={openConfig} onClose={setOpenConfig} repoName={selectedProduct?.name} />
        <Box display="flex" flexDirection="column">
          <Box marginY="60px">
            <Typography variant="h5">Produtos</Typography>
          </Box>
          <Box display="flex">
            {productsList?.map((product) => (
              <div key={product.id} style={{ display: 'flex', flexDirection: 'row' }}>
                <CardNavigation
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  url={`/products/${product.id}-${product.name}`}
                />

                <IconButton color="primary" onClick={handleOpenMenu}>
                  <MoreVert />
                </IconButton>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleCloseMenu}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button'
                  }}
                >
                  <MenuItem onClick={() => handleOpenConfig(product)}>Definir pré configurações</MenuItem>
                </Menu>
              </div>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

Products.getLayout = getLayout;

export default Products;