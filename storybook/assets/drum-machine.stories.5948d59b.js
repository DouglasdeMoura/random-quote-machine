import{r as c,j as n,a as i}from"./jsx-runtime.17a86957.js";import"./index.06d2852d.js";import{B as m}from"./button.052ec439.js";import"./iframe.16aac829.js";const o=()=>{const t=c.exports.useRef(null),s=e=>{const r=e.key.toUpperCase(),a=document.querySelector(`button[id="${r}"]`);a&&(a.classList.toggle("bg-blue-800"),a.click(),setTimeout(()=>{a.classList.toggle("bg-blue-800")},100))};return c.exports.useEffect(()=>(document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}),[]),n("div",{id:"drum-machine","data-testid":"drum-machine",className:"flex gap-4 justify-center items-center w-screen h-screen",children:i("div",{className:"flex flex-col gap-4 justify-center items-center p-2 bg-white rounded scale-150",children:[n("div",{id:"display","data-testid":"display",ref:t,"aria-label":"Audio clip",className:"flex justify-center items-center pb-2 w-48 font-bold text-slate-900 border border-x-0 border-t-0 border-t-slate-300 min-h-9",children:n("span",{className:"text-xs text-center",children:"Click on the pads or type the corresponding key to play the sound"})}),n("div",{className:"grid grid-cols-3 gap-2",children:[{name:"Heater 1",audioClip:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",key:"Q"},{name:"Heater 2",audioClip:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",key:"W"},{name:"Heater 3",audioClip:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",key:"E"},{name:"Heater 4",audioClip:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",key:"A"},{name:"Clap",audioClip:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",key:"S"},{name:"Open HH",id:"D",audioClip:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",key:"D"},{name:"Kick n' Hat",audioClip:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",key:"Z"},{name:"Kick",id:"X",audioClip:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",key:"X"},{name:"Closed HH",audioClip:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",key:"C"}].map(e=>i(m,{id:e.key,className:"drum-pad","data-key":e.key,onClick:r=>{var a;(a=r.currentTarget.querySelector("audio"))==null||a.play(),t.current&&(t.current.innerText=e.name)},children:[e.key,n("audio",{id:e.key,src:e.audioClip,"data-name":e.name,className:"hidden clip"})]},e.key))})]})})};try{o.displayName="DrumMachine",o.__docgenInfo={description:"",displayName:"DrumMachine",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/pages/drum-machine/drum-machine.tsx#DrumMachine"]={docgenInfo:o.__docgenInfo,name:"DrumMachine",path:"src/pages/drum-machine/drum-machine.tsx#DrumMachine"})}catch{}const f={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DrumMachine } from './drum-machine'

export default {
  title: 'DrumMachine',
  component: DrumMachine,
} as ComponentMeta<typeof DrumMachine>

const Template: ComponentStory<typeof DrumMachine> = (args) => (
  <DrumMachine {...args} />
)

export const Default = Template.bind({})
`,locationsMap:{default:{startLoc:{col:53,line:10},endLoc:{col:1,line:12},startBody:{col:53,line:10},endBody:{col:1,line:12}}}}},title:"DrumMachine",component:o},d=t=>n(o,{...t}),k=d.bind({}),C=["Default"];export{k as Default,C as __namedExportsOrder,f as default};
//# sourceMappingURL=drum-machine.stories.5948d59b.js.map
