import { makeStyles } from "@griffel/react";
import { BadProvider, tokens } from "bad-ui-sy";
const useStyles = makeStyles({
    example: {
        backgroundColor: tokens.colorBrandBackground2,
        color: tokens.colorBrandForeground2,
        border: `5px solid ${tokens.colorBrandStroke1}`,
        borderRadius: "5px",
        margin: "5px",
    },
    text: {
        padding: "5px",
        fontSize: "18px",
    },
});
function Child() {
    const styles = useStyles();
    console.log(styles, 'styles')
    return (
        <div className={styles.example}>
            <div className={styles.text}>
                Child Nested FishProvider with partial theme
            </div>
        </div>
    );
}

const Nested = () => {
    const styles = useStyles();
    console.log(styles, 'Nested styles')

    return (
        <BadProvider>
            <div className={styles.example}>
                <div className={styles.text}>Web Light Theme using brand tokens</div>
                <BadProvider
                    theme={{
                        colorBrandStroke1: "red",
                        colorBrandBackground2: "green",
                        colorBrandForeground2: "yellow",
                    }}
                >
                    <Child />
                </BadProvider>
                <Child />
            </div>
        </BadProvider>
    );
};

export default Nested;