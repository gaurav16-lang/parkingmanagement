import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import style from './About.module.css'
import { Authcontext } from '../context/Authcontext'
const About = () => {
  const { token } = useContext(Authcontext)

  console.log(token)
  return (
    <>
      <Navbar />
      <div className={style.pos}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        perferendis veritatis distinctio at laborum veniam dolorum ducimus dolor
        reiciendis enim vitae, facilis error vero odio non voluptate ea illo
        amet! Laboriosam, repudiandae corrupti placeat laborum non accusamus
        dolore consectetur obcaecati culpa totam sapiente commodi exercitationem
        rerum doloremque vitae molestias unde aut. Numquam et sequi iste.
        Similique nisi ab nam laboriosam. Dicta unde illo inventore
        exercitationem ea, eius laborum iure necessitatibus? Tempore enim
        distinctio vel ipsam odio. Incidunt accusantium soluta eius est sunt,
        necessitatibus magni ducimus vitae nulla assumenda ad consequuntur. Ut
        deserunt reprehenderit earum facilis non ullam rerum unde cumque
        explicabo beatae veniam sapiente soluta, nobis iure est! Perferendis
        iure labore mollitia deleniti numquam natus, asperiores similique
        voluptatum recusandae quaerat. Natus, quae voluptatum labore assumenda
        dolorem distinctio voluptatibus, harum nobis unde, inventore deserunt
        repellendus! Ipsum nostrum veritatis tenetur nihil necessitatibus
        laborum earum voluptatibus sed hic, rem sapiente itaque odit mollitia.
      </div>
    </>
  )
}

export default About
