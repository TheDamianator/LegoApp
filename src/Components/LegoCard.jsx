import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from "@mui/material";

function LegoCard({ legoset, legosets, setLegosets }) {
  const handleRemove = () => {
    setLegosets(legosets.filter((set) => set.id !== legoset.id));
  };

  return (
    <Card key={legoset.name}>
      <CardMedia component="img" height="140" image={legoset.image} alt={legoset.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {legoset.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          €{legoset.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button color="error" size="small" onClick={handleRemove}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default LegoCard;
