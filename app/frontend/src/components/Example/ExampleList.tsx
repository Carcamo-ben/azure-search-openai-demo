import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Que dice el documento XXXXX",
        value: "Que dice el documento XXXXX"
    },
    { text: "Quien es el asesino del Sr Hendricks?", value: "Quien es el asesino del Sr Hendricks?" },
    { text: "Que hace la FACH", value: "Que hace la FACH" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
