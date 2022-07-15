import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './About.scss';

const abouts = [
  { title: "Data Engineer", description: "I am a good Data Engineer.", imgUrl: images.about01},
  { title: "Data Scientist", description: "I am a good Data Scientist.", imgUrl: images.about02},
  { title: "Web Developer", description: "I am a good Web Developer.", imgUrl: images.about03},
  { title: "Mobile Developer", description: "I am a good Mobile Developer.", imgUrl: images.about04}
]

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know that <span>Good Development</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About