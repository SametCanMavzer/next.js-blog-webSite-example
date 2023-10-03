
import Image from "next/image"
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>@2023 Samet Can Mazver. All rights reserved.</div>
            <div>
                <div className={styles.social}>
                    <Image src="/1.png" className={styles.icon} width={15} height={15} alt="FacebookImage" />
                    <Image src="/2.png" className={styles.icon} width={15} height={15} alt="mage" />
                    <Image src="/3.png" className={styles.icon} width={15} height={15} alt="image" />
                    <Image src="/4.png" className={styles.icon} width={15} height={15} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Footer