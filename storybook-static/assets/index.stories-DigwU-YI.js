import{j as t}from"./jsx-runtime-Cl2eCCBe.js";import{m as j,t as W}from"./Page-Di4HHLdQ.js";import"./index-Cqyox1Tj.js";const s=W,d=j({propGrid:{display:"grid",gridTemplateColumns:"auto 1fr",gridTemplateRows:"1fr",rowGap:"10px",columnGap:"10px",fontFamily:s.fontFamilyBase,alignContent:"center",alignItems:"center"}}),o=()=>{const n=d(),i=Object.keys(s).filter(e=>e.startsWith("fontFamily"));return t.jsx("div",{className:n.propGrid,children:i.map(e=>[t.jsx("div",{children:e},e),t.jsx("div",{style:{fontFamily:`${s[e]}`},children:s[e]},`${e}-value`)])})},r=()=>{const n=d(),i=Object.keys(s).filter(e=>e.startsWith("fontSize"));return t.jsx("div",{className:n.propGrid,children:i.map(e=>t.jsxs(t.Fragment,{children:[t.jsx("div",{children:e},e),t.jsx("div",{style:{fontSize:s[e],lineHeight:s[e]},children:e},`${e}-value`)]}))})},a=()=>{const n=d(),i=Object.keys(s).filter(e=>e.startsWith("lineHeight"));return t.jsx("div",{className:n.propGrid,children:i.map(e=>[t.jsx("div",{children:e},e),t.jsx("div",{style:{lineHeight:s[e],backgroundColor:"#eee"},children:e},`${e}-value`)])})},l=()=>{const n=d(),i=Object.keys(s).filter(e=>e.startsWith("fontWeight"));return t.jsx("div",{className:n.propGrid,children:i.map(e=>[t.jsx("div",{children:e},e),t.jsxs("div",{style:{fontWeight:s[e]},children:["Font weight ",e]},`${e}-value`)])})},z={title:"主题/fonts",parameters:{docs:{canvas:{sourceState:"none",withToolbar:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"FontFamily"};r.__docgenInfo={description:"",methods:[],displayName:"FontSize"};a.__docgenInfo={description:"",methods:[],displayName:"LineHeight"};l.__docgenInfo={description:"",methods:[],displayName:"FontWeight"};var c,m,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const styles = useStyles();
  const fontFamilies = Object.keys(theme).filter(tokenName => tokenName.startsWith("fontFamily")) as (keyof FontFamilyTokens)[];
  return <div className={styles.propGrid}>
      {fontFamilies.map(fontFamily => [<div key={fontFamily}>{fontFamily}</div>, <div key={\`\${fontFamily}-value\`} style={{
      fontFamily: \`\${theme[fontFamily]}\`
    }}>
          {theme[fontFamily]}
        </div>])}
    </div>;
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var y,p,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const styles = useStyles();
  const fontSizes = Object.keys(theme).filter(tokenName => tokenName.startsWith("fontSize")) as (keyof FontSizeTokens)[];
  return <div className={styles.propGrid}>
      {fontSizes.map(fontSize => <>
          <div key={fontSize}>{fontSize}</div>
          <div key={\`\${fontSize}-value\`} style={{
        fontSize: theme[fontSize],
        lineHeight: theme[fontSize]
      }}>
            {fontSize}
          </div>
        </>)}
    </div>;
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,v,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const styles = useStyles();
  const lineHeightKeys = Object.keys(theme).filter(tokenName => tokenName.startsWith("lineHeight")) as (keyof LineHeightTokens)[];
  return <div className={styles.propGrid}>
      {lineHeightKeys.map(lineHeight => [<div key={lineHeight}>{lineHeight}</div>, <div key={\`\${lineHeight}-value\`} style={{
      lineHeight: theme[lineHeight],
      backgroundColor: "#eee"
    }}>
          {lineHeight}
        </div>])}
    </div>;
}`,...(u=(v=a.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var k,F,S;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const styles = useStyles();
  const fontWeights = Object.keys(theme).filter(tokenName => tokenName.startsWith("fontWeight")) as (keyof FontWeightTokens)[];
  return <div className={styles.propGrid}>
      {fontWeights.map(fontWeight => [<div key={fontWeight}>{fontWeight}</div>, <div key={\`\${fontWeight}-value\`} style={{
      fontWeight: theme[fontWeight]
    }}>
          Font weight {fontWeight}
        </div>])}
    </div>;
}`,...(S=(F=l.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const b=["FontFamily","FontSize","LineHeight","FontWeight"];export{o as FontFamily,r as FontSize,l as FontWeight,a as LineHeight,b as __namedExportsOrder,z as default};
