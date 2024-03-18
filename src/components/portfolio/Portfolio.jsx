import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Profesional Page",
    img: "https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Se desarrolla una aplicacion para busqueda profesionales. Se trabaja con tecnologias web como React para el frontend, Node js para el backend y PosgretSQL para bases de datos",
  },
  {
    id: 2,
    title: "Preparaciones Magistrales",
    img: "https://images.pexels.com/photos/3825573/pexels-photo-3825573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Se desarrolla la aplicación de preparaciones magistrales para premafarma. Se trabaja con tecnologías web como Angular para el frontend, Microsoft .Net para el backend y SQL para las bases de datos. Además se trabaja con reportes para la obtención de datos y análisis de los mismos.",
  },
  {
    id: 3,
    title: "Crub para Planilla en ASPCore",
    img: "https://images.pexels.com/photos/5561913/pexels-photo-5561913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Crear documentación para desarrollar la aplicación de planillas de la empresa. Casos de uso. Diagramas. Programación de mantenimientos como CRUD para este sistema. Además se realiza investigación sobre las herramientas de programación de Microsoft.",
  },
  {
    id: 4,
    title: "Lista de tareas en react",
    img: "https://images.pexels.com/photos/7213436/pexels-photo-7213436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Como parte del proceso de aprendizaje, se crea una aplicacion tipo todolist, con su respectivo backend y bases de datos",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
   
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer"  ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href="https://drive.google.com/drive/folders/1gMTLK8Ga_M9yT0Ca0vt3Zy1cOkJqHToK?usp=sharingt">
            <button>Ver más</button>
          </a>
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Trabajos destacados</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Portfolio;
