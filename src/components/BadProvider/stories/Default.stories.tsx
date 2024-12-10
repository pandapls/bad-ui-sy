import { makeStyles } from "@griffel/react";
import { tokens, BadProvider, webLightTheme, teamsLightTheme, webDarkTheme, teamsDarkTheme, teamsHighContrastTheme } from 'bad-ui-sy';


const useStyles = makeStyles({
    provider: {
        border: '1px',
        borderRadius: '5px',
        padding: '5px'
    },
    text: {
        backgroundColor: tokens.colorBrandBackground2,
        color: tokens.colorBrandForeground2,
        fontSize: '20px',
        border: '1px',
        borderRadius: '5px',
        padding: '5px',
    }
});


const Default = () => {
    const styles = useStyles();
    return (
        <>
            <div>
                <BadProvider className={styles.provider} theme={webLightTheme}>
                    <div className={styles.text}>Web Light Theme</div>
                </BadProvider>
            </div>

            <div>
                <BadProvider className={styles.provider} theme={teamsLightTheme}>
                    <div className={styles.text}>Teams Light Theme</div>
                </BadProvider>
            </div>
            <div>
                <BadProvider className={styles.provider} theme={webDarkTheme}>
                    <div className={styles.text}>Web Dark Theme</div>
                </BadProvider>
            </div>
            <div>
                <BadProvider className={styles.provider} theme={teamsDarkTheme}>
                    <div className={styles.text}>Teams Dark Theme</div>
                </BadProvider>
            </div>
            <div>
                <BadProvider className={styles.provider} theme={teamsHighContrastTheme}>
                    <div className={styles.text}>Teams High Contrast Theme</div>
                </BadProvider>
            </div>
        </>
    )
}

export default Default;