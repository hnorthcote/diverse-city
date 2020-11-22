import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

import styles from './Footer.module.scss'

export default function Footer() {
    return(
        <footer className={styles.Footer}>
            <section> Copyright &copy; {new Date().getFullYear()} </section>
            <section>
                <a href="https://github.com/hnorthcote/"> 
                    <FontAwesomeIcon icon={faGithub} />
                </a>
               
                <a href="https://www.linkedin.com/in/henry-northcote/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
               
            </section>
        </footer>
    );
}