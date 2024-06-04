import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {CardMedia} from '@mui/material';
import {CardContent} from '@mui/material';
import {Typography} from '@mui/material';
import {CardActions} from '@mui/material';
import {Button} from '@mui/material';
import {Card} from '@mui/material';


export const Inicio = () => {

  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        return response.json();
      })
      .then(({ categories }) => {
        const comidas = categories.map((comida) => ({
          id: comida.idCategory,
          name: comida.strCategory,
          url: comida.strCategoryThumb,
        }));
        setComidas(comidas);
      });
  }, []);


  return (
    <>
    {comidas.map((comida) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 350 }}
            image={comida.url}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {comida.strCategory}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  )
}
