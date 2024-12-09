import{f}from"./index-DQLiMaGX.js";import{m as x,B as b}from"./Page-Di4HHLdQ.js";import{j as a}from"./jsx-runtime-Cl2eCCBe.js";import"./index-Cqyox1Tj.js";const k=x({root:{backgroundColor:"pink",padding:"100px"}}),C=()=>{const S=k();return a.jsx("div",{className:S.root,children:a.jsx(b,{label:"Custom Button"})})};C.__docgenInfo={description:"",methods:[],displayName:"Custom"};const j=`import { makeStyles } from '@griffel/react';
import { Button } from 'bad-ui-sy';
const useClasses = makeStyles({
	root: {
		backgroundColor: 'pink',
		padding: '100px'
	}
})
export const Custom = () => {
	const styles = useClasses();
	return (
		<div className={styles.root}>
			<Button label='Custom Button' />
		</div>
	);
};


`,N={title:"Example/Button",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:f()}},r={args:{primary:!0,label:"Button"}},s={args:{label:"Button"}},o={args:{size:"large",label:"Button"}},e={args:{size:"small",label:"Button"}};C.parameters={docs:{source:{code:j}}};var t,n,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,m,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,i,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var g,y,B;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(B=(y=e.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const h=["Primary","Secondary","Large","Small","Custom"];export{C as Custom,o as Large,r as Primary,s as Secondary,e as Small,h as __namedExportsOrder,N as default};
