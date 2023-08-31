import Image from 'next/image';
import styles from '../styles/components/button.module.scss'

interface ButtonProps {
    name: string;
    type: string;
    color: string;
}


export function Button(props: ButtonProps) {
    return  (
    <span className={styles[props.type]+' '+styles[props.color]}>{props.name}</span>
    )
}