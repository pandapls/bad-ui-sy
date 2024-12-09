import{w as p,e as n,u as B}from"./index-DQLiMaGX.js";import{P as d}from"./Page-Di4HHLdQ.js";import"./jsx-runtime-Cl2eCCBe.js";import"./index-Cqyox1Tj.js";const I={title:"Example/Page",component:d,parameters:{layout:"fullscreen"}},t={},e={play:async({canvasElement:g})=>{const a=p(g),o=a.getByRole("button",{name:/Log in/i});await n(o).toBeInTheDocument(),await B.click(o),await n(o).not.toBeInTheDocument();const l=a.getByRole("button",{name:/Log out/i});await n(l).toBeInTheDocument()}};var c,s,r;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var u,i,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const L=["LoggedOut","LoggedIn"];export{e as LoggedIn,t as LoggedOut,L as __namedExportsOrder,I as default};
