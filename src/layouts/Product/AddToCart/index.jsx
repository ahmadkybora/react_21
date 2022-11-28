import React, { useState } from "react";
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import { 
    SubmitButton,
    Widget,
  } from "../../../components";
  
const AddToCart = ( props ) => {
    const [favorite, setFavorite] = useState(false);
    const [like, setLike] = useState(true);
    const [dislike, setDislike] = useState(false);
    const [basket, setBasket] = useState(true);

    return(
        <Widget>
            <CardActions disableSpacing>
                <Tooltip title="Favorite: 2000">
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon 
                            color={favorite ? "primary" : ""} 
                            onClick={() => setFavorite(current => !current)} 
                            />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Like: 100">
                    <IconButton aria-label="like">
                        <ThumbUpIcon 
                            color={like ? "success" : ""} 
                            onClick={() => setLike(current => !current)} 
                            />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Dislike: 500">
                    <IconButton aria-label="dislike">
                        <ThumbDownIcon 
                            color={dislike ? "success" : ""} 
                            onClick={() => setDislike(current => !current)} 
                            />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Add to basket">
                    <IconButton aria-label="add to basket">
                        <ShoppingBasketIcon 
                            color={basket ? "success" : ""} 
                            onClick={() => setBasket(current => !current)} 
                            />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Share">
                    <IconButton aria-label="share">
                        <ShareIcon 
                            color="disabled" 
                            />
                    </IconButton>
                </Tooltip>
            </CardActions>
            <SubmitButton 
                variant="contained"
                title="Add to Cart" />
        </Widget>
    );
}

export default AddToCart;
