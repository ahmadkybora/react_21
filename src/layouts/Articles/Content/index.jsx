import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import Header from "../../Site/Header";
import Footer from "../../Site/Footer";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { 
    Widget,
} from "../../../components";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

let credits = [
    {
        title: "Shrimp and Chorizo Paella", 
        createdAt: "September 14, 2016",
        icon: "", 
        path: "/brands", 
        border: '1px dashed grey',
        image: require("../../../assets/img/banner.jpeg"),
        description: "",
        path: "article/1",
    },
    {
        title: "Shrimp and Chorizo Paella", 
        createdAt: "September 14, 2016",
        icon: "", 
        image: require("../../../assets/img/banner.jpeg"),
        description: "",
        path: "article/2",
    },
    {
        title: "Shrimp and Chorizo Paella", 
        createdAt: "September 14, 2016",
        icon: "", 
        image: require("../../../assets/img/banner.jpeg"),
        description: "",
        path: "article/3",
    },
    {
        title: "Shrimp and Chorizo Paella", 
        createdAt: "September 14, 2016",
        icon: "", 
        image: require("../../../assets/img/banner.jpeg"),
        description: "",
        path: "article/4",
    },
];

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Content = () => {
    const [expanded, setExpanded] = React.useState(false);

    const [favorite, setFavorite] = useState(false);
    const [like, setLike] = useState(true);
    const [dislike, setDislike] = useState(false);
    const [basket, setBasket] = useState(true);

    const handleCredit = () => {
        setFavorite(!current);
    }
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return(
        <>
            <Header />
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Card sx={{ display: 'flex' }}>
                        {credits.map((credit, index) => (
                            <Card key={index} sx={{ maxWidth: 245, m: 2 }}>
                                <CardHeader
                                    avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                    }
                                    action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                    }
                                    title={credit.title}
                                    subheader={credit.createdAt}
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={credit.image}
                                    alt="Paella dish"
                                    />
                                <CardContent>
                                    <NavLink to={credit.path} style={{ textDecoration: "none"}}>
                                        <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                        </Typography>
                                    </NavLink>
                                </CardContent>
                                <CardActions disableSpacing>
                                    {/* {toolTips.map((t, index => (
                                        <Tooltip title={t.title}>
                                            <IconButton aria-label={t.ariaLabel}>
                                                {t.icon}
                                            </IconButton>
                                        </Tooltip>
                                    )))} */}
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
                                                color={like ? "primary" : ""} 
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
                                    <Tooltip title="Share">
                                        <IconButton aria-label="share">
                                            <ShareIcon 
                                                color="disabled" 
                                                />
                                        </IconButton>
                                    </Tooltip>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                        stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        ))}
                    </Card>
                    <Box sx={{ mt: "25px" }}>
                        <Pagination count={10} color="primary" />
                    </Box>
                </Box>
                <Sidebar />
            </Box>
            <Widget>
                <Outlet />
            </Widget>
            <Footer />
        </>
    )
}

export default Content;
