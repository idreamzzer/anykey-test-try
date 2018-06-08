import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../common/CustomButton";
import ReactSlider from "react-slick";
import hexToRGBA from "../../helpers/hexToRGBA";
import "../../vendor/slick/slick.css";
import "../../vendor/slick/slick-theme.css";

import sliderBg1 from "../../assets/images/slider-background-1.jpg";
import sliderBg2 from "../../assets/images/slider-background-2.jpg";
import sliderBg3 from "../../assets/images/slider-background-3.jpg";
import sliderBg4 from "../../assets/images/slider-background-4.jpg";

import slideImage1 from "../../assets/images/slider-image-1.png";
import slideImage2 from "../../assets/images/slider-image-2.png";
import slideImage4 from "../../assets/images/slider-image-4.png";
import slideImageGameDota from "../../assets/images/slider-image-dota.png";
import slideImageGameCS from "../../assets/images/slider-image-cs.png";

import Slide from "./Slide";

const styles = theme => ({
  root: {},
  dotsContainer: {
    width: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: theme.zIndex.appBar
  },
  dotsList: {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    paddingLeft: 0,
    "& li": {
      width: "auto",
      height: "auto",
      cursor: "pointer"
    },
    "& li.slick-active $dot": {
      background: hexToRGBA(theme.palette.secondary.main, 0.8)
    },
    "& :last-child $dot": {
      marginRight: 0
    }
  },
  dot: {
    background: hexToRGBA(theme.palette.secondary.main, 0.4),
    width: "50px",
    height: "8px",
    marginRight: "10px"
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontSize: "2.8em",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8em"
    }
  },
  desc: {
    color: theme.palette.primary.contrastText,
    fontSize: "1em",
    marginBottom: theme.spacing.unit * 4
  },
  slideButton: {
    marginRight: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2
  }
});

class Slider extends Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      dotsClass: classes.dotsContainer,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplaySpeed: 3000,
      autoplay: true,
      appendDots: dots => {
        return (
          <div>
            <ul className={classes.dotsList}> {dots} </ul>
          </div>
        );
      },
      customPaging: i => <div className={classes.dot} />
    };

    return (
      <ReactSlider classes={classes.root} {...settings}>
        <Slide
          imgSrc={sliderBg1}
          gameImage={slideImageGameDota}
          slideImage={slideImage1}
        >
          <Typography className={classes.title}>
            Победим в боевом кубке
          </Typography>
          <Typography className={classes.desc}>
            AnyLVL - профессиональная помощь в играх<br />Долгожданное открытие
            раздела CS:GO, теперь Вы можете купить аккаунт CS:GO и на нашем
            сайте!
          </Typography>
          <CustomButton>Подробнее</CustomButton>
        </Slide>

        <Slide
          imgSrc={sliderBg2}
          gameImage={slideImageGameCS}
          slideImage={slideImage2}
        >
          <Typography className={classes.title}>
            Открытие раздела CS:GO на нашем сайте
          </Typography>
          <Typography className={classes.desc}>
            AnyLVL - профессиональная помощь в играх<br />Долгожданное открытие
            раздела CS:GO, теперь Вы можете купить аккаунт CS:GO и на нашем
            сайте!
          </Typography>
          <CustomButton>Подробнее</CustomButton>
          <CustomButton component={Link} to="/csgo-boost">
            Буст звания
          </CustomButton>
        </Slide>

        <Slide imgSrc={sliderBg3} gameImage={slideImageGameDota}>
          <Typography className={classes.title}>
            Буст Ранга от профессионалов
          </Typography>
          <Typography className={classes.desc}>
            AnyLVL - профессиональная помощь в играх<br />Долгожданное открытие
            раздела CS:GO, теперь Вы можете купить аккаунт CS:GO и на нашем
            сайте!
          </Typography>
          <CustomButton>Подробнее</CustomButton>
        </Slide>

        <Slide
          imgSrc={sliderBg4}
          gameImage={slideImageGameDota}
          slideImage={slideImage4}
        >
          <Typography className={classes.title}>
            Продажа аккаунтов DOTA 2 с рейтингом
          </Typography>
          <Typography className={classes.desc}>
            AnyLVL - профессиональная помощь в играх<br />Долгожданное открытие
            раздела CS:GO, теперь Вы можете купить аккаунт CS:GO и на нашем
            сайте!
          </Typography>
          <CustomButton>Подробнее</CustomButton>
        </Slide>
      </ReactSlider>
    );
  }
}

export default withStyles(styles)(Slider);
