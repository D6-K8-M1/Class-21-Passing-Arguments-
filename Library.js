function bounce(bouncing, bounced){
    if (bouncing.x - bounced.x < bounced.width/2 + bouncing.width/2
      && bounced.x - bouncing.x < bounced.width/2 + bouncing.width/2) {
        bouncing.velocityX = bouncing.velocityX * (-1);
        bounced.velocityX = bounced.velocityX * (-1);
  }
  if (bouncing.y - bounced.y < bounced.height/2 + bouncing.height/2
    && bounced.y - bouncing.y < bounced.height/2 + bouncing.height/2){
      bouncing.velocityY = bouncing.velocityY * (-1);
      bounced.velocityY = bounced.velocityY * (-1);
  }
  }