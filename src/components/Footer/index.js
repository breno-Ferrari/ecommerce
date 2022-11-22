import styles from "./footer.module.scss"
import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa"

const iconsProps = {
    color:"#fff",
    size:24,
}
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div>
                <a href="https://github.com/breno-Ferrari" target="_blank" rel="noreferrer">
                    <FaGithub {...iconsProps}/>
                </a>
                <a href="https://www.linkedin.com/in/breno-velosa/" target="_blank" rel="noreferrer">
                    <FaLinkedin {...iconsProps}/>
                </a>
            </div>
            <span>
                Desenvolvido por Breno
            </span>
        </footer>
    )
}