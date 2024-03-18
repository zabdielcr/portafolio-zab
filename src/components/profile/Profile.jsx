import "./profile.scss";
import { motion } from "framer-motion";
import zab from '../images/zab.png';
import scroll from '../images/scroll.png';
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-210%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
function Profile() {
  return (
    <div className="profile">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ZABDIEL CEDENO</motion.h2>
          <motion.h1 variants={textVariants}>
            Desarrollador Fullstack
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
          <a href="#Portfolio">
          <motion.button variants={textVariants}>
              Trabajos realizados
            </motion.button>
          </a>
          <a href="#Contact">
          <motion.button variants={textVariants}>Contactame</motion.button>
          </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web designer
      </motion.div>
      <div className="imageContainer">
        <img src= {zab} alt="" />
      </div>
    </div>
  );
}

export default Profile;
