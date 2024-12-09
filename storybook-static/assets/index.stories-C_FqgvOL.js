import{m as t,c as r,w as n,t as m,d as c,a as h,b as x,e as d}from"./Page-Di4HHLdQ.js";import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import"./index-Cqyox1Tj.js";const v=t({provider:{border:"1px",borderRadius:"5px",padding:"5px"},text:{backgroundColor:d.colorBrandBackground2,color:d.colorBrandForeground2,fontSize:"20px",border:"1px",borderRadius:"5px",padding:"5px"}}),a=()=>{const s=v();return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(r,{className:s.provider,theme:n,children:e.jsx("div",{className:s.text,children:"Web Light Theme"})})}),e.jsx("div",{children:e.jsx(r,{className:s.provider,theme:m,children:e.jsx("div",{className:s.text,children:"Teams Light Theme"})})}),e.jsx("div",{children:e.jsx(r,{className:s.provider,theme:c,children:e.jsx("div",{className:s.text,children:"Web Dark Theme"})})}),e.jsx("div",{children:e.jsx(r,{className:s.provider,theme:h,children:e.jsx("div",{className:s.text,children:"Teams Dark Theme"})})}),e.jsx("div",{children:e.jsx(r,{className:s.provider,theme:x,children:e.jsx("div",{className:s.text,children:"Teams High Contrast Theme"})})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};const p=`import { makeStyles } from "@griffel/react";
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


export const Default = () => {
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
}`,g=`import { makeStyles } from "@griffel/react";
import { BadProvider, tokens } from "bad-ui-sy";
const useStyles = makeStyles({
    example: {
        backgroundColor: tokens.colorBrandBackground2,
        color: tokens.colorBrandForeground2,
        border: \`5px solid \${tokens.colorBrandStroke1}\`,
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

export const Nested = () => {
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
};`,i=t({example:{backgroundColor:d.colorBrandBackground2,color:d.colorBrandForeground2,border:`5px solid ${d.colorBrandStroke1}`,borderRadius:"5px",margin:"5px"},text:{padding:"5px",fontSize:"18px"}});function o(){const s=i();return console.log(s,"styles"),e.jsx("div",{className:s.example,children:e.jsx("div",{className:s.text,children:"Child Nested FishProvider with partial theme"})})}const l=()=>{const s=i();return console.log(s,"Nested styles"),e.jsx(r,{children:e.jsxs("div",{className:s.example,children:[e.jsx("div",{className:s.text,children:"Web Light Theme using brand tokens"}),e.jsx(r,{theme:{colorBrandStroke1:"red",colorBrandBackground2:"green",colorBrandForeground2:"yellow"},children:e.jsx(o,{})}),e.jsx(o,{})]})})};l.__docgenInfo={description:"",methods:[],displayName:"Nested"};const k={title:"组件/BadProvider",component:r};a.parameters={docs:{source:{code:p}}};l.parameters={docs:{description:{story:"FishProvider可以嵌套使用。"},source:{code:g}}};const N=["Default","Nested"];export{a as Default,l as Nested,N as __namedExportsOrder,k as default};
