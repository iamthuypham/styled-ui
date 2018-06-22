webpackJsonp([6],{1044:function(t,n,e){var o=e(2),a=e(53),r=e(380).PageRenderer;r.__esModule&&(r=r.default);var i=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(1056)}},componentWillMount:function(){},render:function(){return o.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,t.exports=i},1056:function(t,n){t.exports='Buttons allow users to command the computer to take some action. Buttons, like all standard form components, usually have 16 px space between them.\n\n## Component Variations\n\n### Scale Factor\n\n```react\nshowSource: true\n---\n<div className="container"><style>{`.container > * { margin: 8px; }`}</style>\n\t<Button primary small>\n\t\tSmall\n\t</Button>\n\t<Button primary medium>\n\t\tMedium\n\t</Button>\n\t<Button primary large>\n\t\tLarge\n\t</Button>\n\t<Button primary extraLarge>\n\t\tExtra Large\n\t</Button>\n</div>\n```\n\n### Supported style customizations\nDo not use the `style` prop to style this component (it will be ignored). Instead, if there is missing customization that you need for this component, ask to have it added to the theme prop.\n\n```react\nshowSource: true\n---\n<div className="container"><style>{`.container > * { margin: 8px; }`}</style>\n\t<Button primary large theme={{ defaultColor: \'plum\', hoverColor: \'darkslateblue\' }}>\n\t\tPlum\n\t</Button>\n\t<Button primary large theme={{ width: \'200px\' }}>\n\t\t200px Wide\n\t</Button>\n\t<Button primary theme={{ fontSize: \'12px\', padding: \'8px\' }}>\n\t\t12px Font, 8px Padding\n\t</Button>\n</div>\n```\n\n\n* `small` -- used for apps with tight spacing, never for marketing pages.\n* `medium` -- this is the default size for web applications.\n* `large` -- this is the default scale for marketing web pages.\n* `extraLarge` -- extra large inputs and call-to-action buttons for marketing page use.\n\n### Relative Emphasis\n\n\n```react\nshowSource: true\n---\n<div className="container"><style>{`.container > * { margin: 8px; font-family: \'Source Sans Pro\' }`}</style>\n\t<Button primary medium>\n\t\tPrimary\n\t</Button>\n\t<Button primaryOutline medium>\n\t\tPrimary Outline\n\t</Button>\n\t<Button minor medium>\n\t\tMinor\n\t</Button>\n\t<Button link medium>\n\t\tLink\n\t</Button>\n\t<div>\n\t\tHere is some text with an inline <Button link>link button</Button>.\n\t</div>\n</div>\n```\n\n* `primary` -- for the most important or most common action for a user to take in a given context/scope. This button variant grabs the user\'s attention. In marketing pages, this style is for the "call to action" on a page.\n* `primaryOutline` -- for actions related to, or nearby the primary button in terms of visual hieararchy that are less common or less critical. Use this button when you want the user\'s casual attention.\n* `minor` -- for apps, not marketing pages. When there are a lot of common actions that are all of equal weight, consider using minor buttons.\n* `link` -- for situations where a hyperlink is indicated, but must be aligned with a row of buttons. Is very lightweight in terms of visual attention.\n\n## Disabled states\n\n```react\nshowSource: true\n---\n<div className="container"><style>{`.container > * { margin: 8px; }`}</style>\n\t<Button primary medium disabled>\n\t\tPrimary\n\t</Button>\n\t<Button primaryOutline medium disabled>\n\t\tPrimary Outline\n\t</Button>\n\t<Button minor medium disabled>\n\t\tMinor\n\t</Button>\n</div>\n```\n\n## Button Text\n\n* Button text should be as concise as possible, but as long as necessary (for clarity).\n* Buttons are usually verbs (or short phrases that begin with a verb).\n\nButtons are generally interpreted as imperatives, with the computer as agent ("hey computer, do the thing"), the text of the thing to be done as a verb ("frob"), and a direct object to take the action on if needed ("frob widgets"). Thus a button that reads "frob widgets" will normally be interpreted by the user as them issuing the command: "Hey computer, frob the widgets!"\n\nThere are some exceptions, such as "Buy Now" buttons, which are generally interpreted as: "Hey computer, I want to buy [something] now!"\n\nSome buttons are noun phrases, but there should always be an implied verb. For example: a "Settings" button that launches a settings dialog in the current context has an implied verb of "Show" or "Launch" (if the user is thinking of what the computer will do) or "Edit" or "Change" (if they\'re thinking of what they want to do).\n\n## Examples\n\nA product sales page enables three possible user actions: Buy the product, rent the product, or learn more about the product. Appropriate button styles and text would be: "Buy now" (primary), "Rent" (primaryOutline), and "Learn more" (minor). If they are all in a row, they would come in the order: "Learn more", "Rent", and "Buy now" on the right.\n\n\n```react\nshowSource: true\n---\n<div className="container"><style>{`.container > * { margin: 8px; }`}</style>\n\t<Button primary medium>\n\t\tBuy now\n\t</Button>\n\t<Button primaryOutline medium>\n\t\tRent\n\t</Button>\n\t<Button minor medium>\n\t\tLearn more\n\t</Button>\n</div>\n```\n'}});
//# sourceMappingURL=6.f4c01fa5.chunk.js.map