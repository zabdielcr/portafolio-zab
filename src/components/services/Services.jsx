import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import business from "../images/business.png";
import system from "../images/system.png";
import progra from "../images/progra.png";
import data from "../images/data.png";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggeerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={ window.innerWidth<= 738 ? "animate" : isInView && "animate"} 

    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Me enfoco colaborar en los procesos de análisis y
          desarrollo de
          <br />
          sistemas en las empresas.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Ideas</motion.b> Únicas
          </h1>
        </div>
        <div className="title">
          <h1>
            Para tu
            <motion.b whileHover={{ color: "orange" }}> Negocio</motion.b>
          </h1>
          <button>QUE HAGO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "transparent", color: "orange" }}
        >
          <h2>Negocios IT</h2>
          <p>
            Como parte de la formación en informática empresarial tengo
            conocimiento básico en la administración de recursos tecnológicos
            así como auditoría y normativa informática.
          </p>
          <div className="title">
            <img src={business} alt="" />
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "transparent", color: "orange" }}
        >
          <h2>Analista de sistemas</h2>
          <p>
            Tengo conocimientos en análisis de sistemas, así como del ciclo de
            vida, Metodologías ágiles, casos de uso y toda la documentación
            necesaria para desarrollar un sistema óptimo y seguro.
          </p>
          <div className="title">
            <img src={system} alt="" />
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "transparent", color: "orange" }}
        >
          <h2>Desarrollo Web</h2>
          <p>
            Trabajo principalmente como programador web fullstack. Creo sitios
            web dinámicos y responsivos, utilizando tecnologías actuales y
            emergentes. He trabajado como desarrollador front-end y back-end.
          </p>
          <div className="title">
            <img src={progra} alt="" />
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "transparent", color: "orange" }}
        >
          <h2>Bases de datos</h2>
          <p>
            Tengo conocimientos laborales con la creación de tablas, vistas,
            joins, funciones, procedimientos almacenados y triggers. En MySQL,
            SQL Server, Oracle y PostgreSQL.
          </p>
          <div className="title">
            <img src={data} alt="" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
