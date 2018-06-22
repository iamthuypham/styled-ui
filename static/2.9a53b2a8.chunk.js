webpackJsonp([2],{1051:function(t,n,e){var a=e(2),o=e(53),l=e(380).PageRenderer;l.__esModule&&(l=l.default);var i=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(1063)}},componentWillMount:function(){},render:function(){return a.createElement(l,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,t.exports=i},1063:function(t,n){t.exports='## Modal with default footer\n\n```react\nshowSource: true\nstate: { modal: false }\n---\n<div  className="container">\n\t<style>\n\t{`\n\t\t.container {\n\t\t\tfont-family: \'Source Sans Pro\';\n\t\t\tcolor: #333333;\n\t\t}\n\t\t.wide-content {\n\t\t\twidth: 600px;\n\t\t}\n\t\t.button-container {\n\t\t\tmargin-right: 16px;\n\t\t}\n\t`}\n\t</style>\n\t<Button primary medium onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Location"\n\t\tsubtitle="Help us locate you"\n\t\tfooterProps={{\n\t\t\tcommitButton: { text: \'Save\', onClick: () => alert(\'Saved\') },\n\t\t\tcancelButton: { text: \'Cancel\', onClick: () => setState({ modal: !state.modal })},\n\t\t\tdeleteButton: { text: \'Delete Forever\', onClick: () => alert(\'Deleted\') }\n\t\t}}\n\t>\n\t\t<div className="wide-content">\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t\tdebounce={200}\n\t\t\t/>\n\t\t</div>\n\t</Modal>\n</div>\n```\n\n## Modal with no delete option\n\n```react\nshowSource: true\nstate: { modal: false }\n---\n<div  className="container">\n\t<style>\n\t{`\n\t\t.container {\n\t\t\tfont-family: \'Source Sans Pro\';\n\t\t\tcolor: #333333;\n\t\t}\n\t\t.wide-content {\n\t\t\twidth: 600px;\n\t\t}\n\t\t.button-container {\n\t\t\tmargin-right: 16px;\n\t\t}\n\t`}\n\t</style>\n\t<Button primary medium onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Location"\n\t\tsubtitle="Help us locate you"\n\t\tfooterProps={{\n\t\t\tcommitButton: { text: \'Save\', onClick: () => alert(\'Saved\') },\n\t\t\tcancelButton: { text: \'Cancel\', onClick: () => setState({ modal: !state.modal })}\n\t\t}}\n\t>\n\t\t<div className="wide-content">\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t\tdebounce={200}\n\t\t\t/>\n\t\t</div>\n\t</Modal>\n</div>\n```\n\n## Modal with only a delete option\n\n```react\nshowSource: true\nstate: { modal: false }\n---\n<div  className="container">\n\t<style>\n\t{`\n\t\t.container {\n\t\t\tfont-family: \'Source Sans Pro\';\n\t\t\tcolor: #333333;\n\t\t}\n\t\t.wide-content {\n\t\t\twidth: 600px;\n\t\t}\n\t\t.button-container {\n\t\t\tmargin-right: 16px;\n\t\t}\n\t`}\n\t</style>\n\t<Button primary medium onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Location"\n\t\tsubtitle="Help us locate you"\n\t\tfooterProps={{\n\t\t\tdeleteButton: { text: \'Delete Forever\', onClick: () => alert(\'Deleted\') }\n\t\t}}\n\t>\n\t\t<div className="wide-content">\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t\tdebounce={200}\n\t\t\t/>\n\t\t</div>\n\t</Modal>\n</div>\n```\n\n## Modal with stacked buttons\n\nModal buttons stack at 320px for 3 buttons configurations and 220px for 1 or 2 button configurations.\n\n```react\nshowSource: true\nstate: { modal: false }\n---\n<div  className="container">\n\t<style>\n\t{`\n\t\t.container {\n\t\t\tfont-family: \'Source Sans Pro\';\n\t\t\tcolor: #333333;\n\t\t}\n\t\t.stacked-content {\n\t\t\twidth: 240px;\n\t\t}\n\t\t.button-container {\n\t\t\tmargin-right: 16px;\n\t\t}\n\t`}\n\t</style>\n\t<Button primary medium onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Location"\n\t\tsubtitle="Help us locate you"\n\t\tfooterProps={{\n\t\t\tcommitButton: { text: \'Save\', onClick: () => alert(\'Saved\') },\n\t\t\tcancelButton: { text: \'Cancel\', onClick: () => setState({ modal: !state.modal })},\n\t\t\tdeleteButton: { text: \'Delete Forever\', onClick: () => alert(\'Deleted\') }\n\t\t}}\n\t>\n\t\t<div className="stacked-content">\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t\tdebounce={200}\n\t\t\t/>\n\t\t</div>\n\t</Modal>\n</div>\n```\n\n## Modal with custom footer\n\n```react\nshowSource: true\nstate: { modal: false }\n---\n<div  className="container">\n\t<style>\n\t{`\n\t\t.container {\n\t\t\tfont-family: \'Source Sans Pro\';\n\t\t\tcolor: #333333;\n\t\t}\n\t\t.content {\n\t\t\twidth: 100%;\n\t\t}\n\t\t.button-container {\n\t\t\tmargin-right: 16px;\n\t\t}\n\t`}\n\t</style>\n\t<Button primary medium onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Location"\n\t\tsubtitle="Help us locate you"\n\t\trenderFooter={() => <ModalFooter>\n\t\t\t\t<div className="button-container">\n\t\t\t\t\t<Button primaryOutline medium onClick={() => setState({ modal: false })}>Option 1</Button>\n\t\t\t\t</div>\n\t\t\t\t<div className="button-container">\n\t\t\t\t\t<Button primaryOutline medium onClick={() => setState({ modal: false })}>Option 2</Button>\n\t\t\t\t</div>\n\t\t\t\t<div className="button-container">\n\t\t\t\t\t<Button primaryOutline medium onClick={() => setState({ modal: false })}>Option 3</Button>\n\t\t\t\t</div>\n\t\t\t\t<Button primary medium onClick={() => {}}>Yes!</Button>\n\t\t\t</ModalFooter>}\n\t>\n\t\t<div className="content">\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t\tdebounce={200}\n\t\t\t/>\n\t\t</div>\n\t</Modal>\n</div>\n```\n'}});
//# sourceMappingURL=2.9a53b2a8.chunk.js.map