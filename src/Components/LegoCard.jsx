import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

function LegoCard({ legoset, index, legosets, setLegosets }) {
  const handleRemove = () => setLegosets(legosets.filter((_, i) => i !== index));

  return (
    <Card>
      <CardMedia component="img" height="140" image={legoset.image} alt={legoset.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {legoset.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          €{legoset.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button onClick={handleRemove} color="error" size="small">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default LegoCard;
