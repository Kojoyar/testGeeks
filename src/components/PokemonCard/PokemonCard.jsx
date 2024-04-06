import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';


const PokemonCard = ({card}) => {
  return (
    < >
    <Card style={{margin: '1%'}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image={card.url}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Name: {card.name}
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default PokemonCard