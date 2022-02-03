import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CardView(props) {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.note.title}
          </Typography>
          <Typography variant="body2">{props.note.note}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{props.note.date}</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardView;
