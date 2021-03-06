# ๐งฉ ํ๋ฌ๊ทธ์ธ

TOAST UI Editor(์ดํ '์๋ํฐ'๋ผ๊ณ  ๋ช์)๋ ๊ธฐ๋ณธ์ผ๋ก ์ง์ํ์ง ์๋ ๊ธฐ๋ฅ๋ค์ ํ๋ฌ๊ทธ์ธ์ผ๋ก ์ ๊ณตํ๋ค. ์๋ํฐ์์ ์ ๊ณตํ๋ ํ๋ฌ๊ทธ์ธ์ ํ์ฌ 5๊ฐ์ด๋ฉฐ, ์ถํ ์์ฃผ ์ฌ์ฉ๋๋ ๊ธฐ๋ฅ์ ๋ ์ถ๊ฐ๋  ์ ์๋ค.

| ํ๋ฌ๊ทธ์ธ ๋ช | ํจํค์ง ๋ช | ์ค๋ช |
| --- | --- | --- |
| [`chart`](https://github.com/nhn/tui.editor/tree/master/plugins/chart) | [`@toast-ui/editor-plugin-chart`](https://www.npmjs.com/package/@toast-ui/editor-plugin-chart) | ์ฐจํธ๋ฅผ ๋ ๋๋งํ๊ธฐ ์ํ ํ๋ฌ๊ทธ์ธ |
| [`code-syntax-highlight`](https://github.com/nhn/tui.editor/tree/master/plugins/code-syntax-highlight) | [`@toast-ui/editor-plugin-code-syntax-highlight`](https://www.npmjs.com/package/@toast-ui/editor-plugin-code-syntax-highlight) | ์ฝ๋ ํ์ด๋ผ์ดํ์ ์ํ ํ๋ฌ๊ทธ์ธ |
| [`color-syntax`](https://github.com/nhn/tui.editor/tree/master/plugins/color-syntax) | [`@toast-ui/editor-plugin-color-syntax`](https://www.npmjs.com/package/@toast-ui/editor-plugin-color-syntax) | ์ปฌ๋ฌํผ์ปค ์ฌ์ฉ์ ์ํ ํ๋ฌ๊ทธ์ธ |
| [`table-merged-cell`](https://github.com/nhn/tui.editor/tree/master/plugins/table-merged-cell) | [`@toast-ui/editor-plugin-table-merged-cell`](https://www.npmjs.com/package/@toast-ui/editor-plugin-table-merged-cell) | ๋ณํฉ ํ์ด๋ธ ์์ ์ฌ์ฉํ๊ธฐ ์ํ ํ๋ฌ๊ทธ์ธ |
| [`uml`](https://github.com/nhn/tui.editor/tree/master/plugins/uml) | [`@toast-ui/editor-plugin-uml`](https://www.npmjs.com/package/@toast-ui/editor-plugin-uml) | UML ์ฌ์ฉ์ ์ํ ํ๋ฌ๊ทธ์ธ |

## ํ๋ฌ๊ทธ์ธ ์ค์น ๋ฐ ์ฌ์ฉ

๊ฐ ํ๋ฌ๊ทธ์ธ์ npm์ ํตํด ์ค์นํ๊ฑฐ๋ CDN ํํ๋ก ์ฌ์ฉํ  ์ ์๋ค.

### ํจํค์ง ๋งค๋์ (npm)๋ฅผ ํตํ ์ค์น

CLI๋ฅผ ์ฌ์ฉํ์ฌ ๊ฐ ํ๋ฌ๊ทธ์ธ์ ์ค์นํ  ์ ์๋ค. ์ค์นํ  ํ๋ฌ๊ทธ์ธ์ ์ด๋ฆ์ ์๋์ `${pluginName}`์ ์์ฑํ์ฌ ์ค์นํ๋ค. ์๋ฅผ ๋ค์ด `chart` ํ๋ฌ๊ทธ์ธ์ ์ค์นํ  ๊ฒฝ์ฐ `npm install @toast-ui/editor-plugin-chart`๋ก ์ค์นํ๋ค.

```sh
$ npm install --save @toast-ui/editor-plugin-${pluginName} 
$ npm install --save @toast-ui/editor-plugin-${pluginName}@<version>
```

npm์ ํตํด ์ค์นํ  ๊ฒฝ์ฐ ์๋์ฒ๋ผ `node_modules`์ ์ค์น๋๋ค.

```
- node_modules/
   โโ @toast-ui/editor-plugin-${pluginName}
   โ     โโ dist/
   โ     โ    โโ toastui-editor-plugin-${pluginName}.js
   โ     โ    โโ ...
```

์ค์นํ ํ๋ฌ๊ทธ์ธ์ ๋ชจ๋ ํฌ๋งท์ ๋ฐ๋ผ ์๋์ฒ๋ผ ๊ฐ์ ธ์ฌ ์ ์๋ค.

- ES ๋ชจ๋

```js
import pluginFn from '@toast-ui/editor-plugin-${pluginName}';
```

- CommonJS

```js
const pluginFn = require('@toast-ui/editor-plugin-${pluginName}');
```

์๋ฅผ ๋ค์ด `chart` ํ๋ฌ๊ทธ์ธ์ ๋ค์๊ณผ ๊ฐ์ ธ์ฌ ์ ์๋ค.

```js
import chart from '@toast-ui/editor-plugin-chart';
```

### CDN์ ํตํ ์ค์น

๊ฐ ํ๋ฌ๊ทธ์ธ์ [TOAST Cloud](https://www.toast.com)์์ ์ ๊ณตํ๋ CDN์ ํตํด์๋ ์ฌ์ฉํ  ์ ์๋ค.

```html
...
<body>
  ...
  <script src="https://uicdn.toast.com/editor/latest/toastui-editor-plugin-${pluginName}.min.js"></script>
</body>
...
```

ํน์  ๋ฒ์ ์ ์ฌ์ฉํ๋ ค๋ฉด url ๊ฒฝ๋ก์์ `latest` ๋์  ๋ฒ์ ์ ๋ช์ํ๋ฉด ๋๋ค.

CDN ๋๋ ํฐ๋ฆฌ์ ๊ตฌ์กฐ๋ ๋ค์๊ณผ ๊ฐ๋ค.

```
- uicdn.toast.com/
   โโ editor-plugin-${pluginName}/
   โ     โโ latest/
   โ     โ    โโ toastui-editor-plugin-${pluginName}.js
   โ     โ    โโ ...
   โ     โโ 3.0.0/
   โ     โ    โโ ...
```

> ์ฐธ์กฐ: ๊ฐ ํ๋ฌ๊ทธ์ธ์ CDN ํ์ผ์ ์ํฉ์ ๋ฐ๋ผ ๋ชจ๋  ์์กด์ฑ์ ํฌํจํ๊ฑฐ๋ ๋ค๋ฅธ ์ ํ์ ๋ฒ๋ค ํ์ผ์ ์ ๊ณตํ๋ค. ์์ธํ ๋ด์ฉ์ ๊ฐ ํ๋ฌ๊ทธ์ธ ์ ์ฅ์๋ฅผ ํ์ธ๋ฐ๋๋ค.

CDN์ ์ฌ์ฉํด ํ๋ฌ๊ทธ์ธ์ ๊ฐ์ ธ์ฌ ๋๋ `toastui.Editor.plugin`์ ๋ฑ๋ก๋ ๋ค์์คํ์ด์ค๋ฅผ ์ฌ์ฉํ๋ค.

```js
const pluginFn = toastui.Editor.plugin[${pluginName}];
```

์๋ฅผ ๋ค์ด `chart` ํ๋ฌ๊ทธ์ธ์ ๋ค์๊ณผ ๊ฐ์ด ๊ฐ์ ธ์จ๋ค.

```js
const { chart } = toastui.Editor.plugin;
```

### ํ๋ฌ๊ทธ์ธ ์ฌ์ฉ

ES ๋ชจ๋๊ณผ CDN์ ๋ฐ๋ผ ํ๋ฌ๊ทธ์ธ์ ์ค์นํ๊ณ  ๊ฐ์ ธ์ค๋ ๋ฐฉ๋ฒ์ ์ฐจ์ด๊ฐ ์์ง๋ง, ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ ๋์ผํ๋ค.

๊ฐ์ ธ์จ ํ๋ฌ๊ทธ์ธ์ ์ฌ์ฉํ๋ ค๋ฉด ์๋ํฐ์ `plugins` ์ต์์ ํ๋ฌ๊ทธ์ธ ํจ์๋ฅผ ์ถ๊ฐํด์ผ ํ๋ค. `plugins` ์ต์์ ํ์์ `Array.<function>`์ด๋ค.

```js
const editor = new Editor({
  // ...
  plugins: [plugin]
});
```
๋ง์ฝ `chart`์ `uml` ํ๋ฌ๊ทธ์ธ์ ์ฌ์ฉํ๋ค๋ฉด, ES ๋ชจ๋๊ณผ CDN ํ๊ฒฝ์์ ๊ฐ๊ฐ ์๋์ฒ๋ผ ์ฌ์ฉํ  ์ ์๋ค.

- ES ๋ชจ๋

```js
import Editor from '@toast-ui/editor';
import chart from '@toast-ui/editor-plugin-chart';
import uml from '@toast-ui/editor-plugin-uml';

const editor = new Editor({
  // ...
  plugins: [chart, uml]
});
```

- CDN

```js
const { Editor } = toastui;
const { chart, uml } = Editor.plugin;

const editor = new Editor({
  // ...
  plugins: [chart, uml]
});
```

ํ๋ฌ๊ทธ์ธ ํจ์์์ ์ฌ์ฉํ  ์ต์์ด ํ์ํ ๊ฒฝ์ฐ `plugins` ์ต์์ ํํ ํํ์ ๋ฐ์ดํฐ๋ฅผ ์ถ๊ฐํ๋ฉด ๋๋ค.

```js
const pluginOptions = {
  // ...
};

const editor = new Editor({
  // ...
  plugins: [[plugin, pluginOptions]]
});
```

## ํ๋ฌ๊ทธ์ธ ๋ง๋ค๊ธฐ

๊ธฐ๋ณธ์ ์ผ๋ก ์ ๊ณต๋๋ ํ๋ฌ๊ทธ์ธ ์ธ์๋ ์ฌ์ฉ์๊ฐ ์ง์  ํ๋ฌ๊ทธ์ธ ํจ์๋ฅผ ์ ์ํ์ฌ ์ฌ์ฉํ  ์ ์๋ค.

์๋์ฒ๋ผ ํ๋ฌ๊ทธ์ธ ํจ์๋ฅผ ์ ์ํ์ฌ ์ ํด์ง ํฌ๋งท์ ๋ง๋ ๊ฐ์ฒด๋ฅผ ๋ฐํํ๋ค.

```ts
interface PluginInfo {
  toHTMLRenderers?: HTMLConvertorMap;
  toMarkdownRenderers?: ToMdConvertorMap;
  markdownPlugins?: PluginProp[];
  wysiwygPlugins?: PluginProp[];
  wysiwygNodeViews?: NodeViewPropMap;
  markdownCommands?: PluginCommandMap;
  wysiwygCommands?: PluginCommandMap;
  toolbarItems?: PluginToolbarItem[];
}

const pluginResult: PluginInfo = {
  // ...
}

function customPlugin() {
  // ...
  return pluginResult;
}
```

๋ค๋ฅธ ํ๋ฌ๊ทธ์ธ๊ณผ ๋ง์ฐฌ๊ฐ์ง๋ก ์๋ํฐ์ `plugins` ์ต์์ ํตํด ์ง์  ์ ์ํ ํ๋ฌ๊ทธ์ธ ํจ์๋ฅผ ์ถ๊ฐํ์ฌ ์ฌ์ฉํ  ์ ์๋ค.

```js
const editor = new Editor({
  // ...
  plugins: [customPlugin]
});
```

### ํ๋ฌ๊ทธ์ธ ๋ฐํ ๊ฐ์ฒด

ํ๋ฌ๊ทธ์ธ์์ ๋ฐํํ๋ ๊ฐ์ฒด์ ํ๋กํผํฐ์ ๋ํด ์์๋ณด๊ฒ ๋ค. ์๋์ฒ๋ผ ์ด 8๊ฐ์ ํ๋กํผํฐ๊ฐ ์กด์ฌํ๋ฉฐ, ์ปค์คํฐ๋ง์ด์ง์ ์ํ๋ ํ๋กํผํฐ๋ง ์ ์ํ์ฌ ๋ฐํํ๋ค.

```ts
interface PluginInfo {
  toHTMLRenderers?: HTMLConvertorMap;
  toMarkdownRenderers?: ToMdConvertorMap;
  markdownCommands?: PluginCommandMap;
  wysiwygCommands?: PluginCommandMap;
  toolbarItems?: PluginToolbarItem[];
  markdownPlugins?: PluginProp[];
  wysiwygPlugins?: PluginProp[];
  wysiwygNodeViews?: NodeViewPropMap;
}
```

#### toHTMLRenderers, toMarkdownRenderers

`toHTMLRenderers` ๊ฐ์ฒด๋ ์๋ํฐ์ ๋งํฌ๋ค์ด ํ๋ฆฌ๋ทฐ์์ ๋ ๋๋ง๋  ๋ ๋๋ ๋งํฌ๋ค์ด ์๋ํฐ์์ ์์ง์ ์๋ํฐ๋ก ์ปจ๋ฒํ๋  ๋ ์์์ ๋ ๋๋ง ๊ฒฐ๊ณผ๋ฅผ ๋ณ๊ฒฝํ  ์ ์๋ค. ์๋ํฐ์ [customHTMLRenderer](https://github.com/nhn/tui.editor/blob/master/docs/ko/custom-html-renderer.md) ์ต์๊ณผ ๋์ผํ๋ค.

**toMarkdownRenderers**

`toMarkdownRenderers` ๊ฐ์ฒด๋ ์์ง์ ์๋ํฐ์์ ๋งํฌ๋ค์ด ์๋ํฐ๋ก ์ปจ๋ฒํ๋  ๋ ๋ณํ๋๋ ๋งํฌ๋ค์ด ํ์คํธ๋ฅผ ์ฌ์ ์ํ  ์ ์๋ค. `toMarkdownRenderers` ๊ฐ์ฒด์ ์ ์ํ๋ ํจ์๋ `nodeInfo`์ `context` ๋ ๊ฐ์ง ๋งค๊ฐ๋ณ์๋ฅผ ๊ฐ์ง๋ค.

* `nodeInfo`: ์ปจ๋ฒํ ๋์์ด ๋๋ ์์ง์ ๋ธ๋์ ์ ๋ณด์ด๋ค.
  * `node`: ๋์ ๋ธ๋์ ๋ํ ์ ๋ณด๊ฐ ๋ด๊ฒจ ์๋ค.
  * `parent`: ๋์ ๋ธ๋์ ๋ถ๋ชจ ๋ธ๋ ์ ๋ณด๊ฐ ๋ด๊ฒจ ์๋ค.
  * `index`: ๋์ ๋ธ๋๊ฐ ๋ช ๋ฒ์งธ ์์์ธ์ง ์ ์ ์๋ค.
* `context`: ๋ธ๋ ์ ๋ณด ์ธ์ ์ปจ๋ฒํ์ ํ์ํ ์ ๋ณด๋ค์ด ๋ด๊ฒจ์๋ค.
  * `entering`: ํด๋น ๋ธ๋์ ์ต์ด ๋ฐฉ๋ฌธ์ธ์ง, ์์ ๋ธ๋์ ์ํ๋ฅผ ๋ชจ๋ ๋๋ด๊ณ  ๋ฐฉ๋ฌธํ๋ ๊ฒ์ธ์ง ์ ์ ์๋ค.
  * `origin`: ๊ธฐ์กด ์ปจ๋ฒํ ํจ์์ ๋์์ ์คํํ๋ ํจ์์ด๋ค.

`toMarkdownRenderers` ์ ์ ์๋ ํจ์๋ ๊ฒฐ๊ณผ๊ฐ์ผ๋ก ๋งํฌ๋ค์ด ํ์คํธ๋ก ๋ณํํ  ๋ ํ์ํ ํ ํฐ ์ ๋ณด๋ค์ ๋ฐํํ๋ค.

```ts
interface ToMdConvertorReturnValues {
  delim?: string | string[];
  rawHTML?: string | string[] | null;
  text?: string;
  attrs?: Attrs;
}
```

* `delim`: ๋งํฌ๋ค์ด ํ์คํธ์์ ์ฌ์ฉํ  ๊ธฐํธ๋ฅผ ์ ์ํ๋ค. ๋งํฌ๋ค์ด ๋ถ๋ฆฟ ๋ฆฌ์คํธ์ `*`, `-`์ฒ๋ผ ์ฌ๋ฌ ๊ธฐํธ๋ก ๋ณํ๋  ์ ์๋ ๊ฒฝ์ฐ ์ฌ์ฉํ๋ค.
* `rawHTML`: ๋ธ๋๋ฅผ ๋งํฌ๋ค์ด์ HTML ๋ธ๋(HTML ๋ฌธ์์ด)๋ก ๋ณํํ  ๊ฒฝ์ฐ ํ์ํ ๋ฌธ์์ด์ด๋ค.
* `text`: ๋งํฌ๋ค์ด์์ ๋ณด์ฌ์ค ํ์คํธ ์ ๋ณด์ด๋ค.
* `attrs`: ๋ธ๋๋ฅผ ๋งํฌ๋ค์ด ํ์คํธ๋ก ๋ณํํ  ๋ ์ฌ์ฉํ  ์์ฑ ์ ๋ณด์ด๋ค. ์๋ฅผ ๋ค์ด ํ์คํฌ ๋ฆฌ์คํธ์ ์ฒดํฌ ์ฌ๋ถ๋ ์ด๋ฏธ์ง ๋ธ๋์ url ์ ๋ณด๊ฐ ์๋ค.

**์์**
```ts
return {
  toHTMLRenderers: {
    // ...
    tableCell(node: MergedTableCellMdNode, { entering, origin }) {
      const result = origin!();

      // ...
      
      return result;
    },
  },
  toMarkdownRenderers: {
    // ...
    tableHead(nodeInfo) {
      const row = (nodeInfo.node as ProsemirrorNode).firstChild;

      let delim = '';

      if (row) {
        row.forEach(({ textContent, attrs }) => {
          const headDelim = createTableHeadDelim(textContent, attrs.align);

          delim += `| ${headDelim} `;

          // ...
        });
      }
      return { delim };
    },
  },
};
```

์์ ์ฝ๋๋ ๋ณํฉ ํ์ด๋ธ ํ๋ฌ๊ทธ์ธ์ ์์์ด๋ค. `toHTMLRenderers`์ ์ ์๋ `tableCell` ๋ธ๋์ ๋ฐํ ๊ฒฐ๊ณผ๋ ๋งํฌ๋ค์ด ํ๋ฆฌ๋ทฐ์ ์์ง์ ์๋ํฐ๋ก ์ปจ๋ฒํ ์ ์ฌ์ฉ๋๋ฉฐ, `toMarkdownRenderers`์ ์ ์๋ `tableHead` ๋ธ๋์ ํ์คํธ ๊ฒฐ๊ณผ๋ ๋งํฌ๋ค์ด ์๋ํฐ๋ก ์ปจ๋ฒํ ์ ์ฌ์ฉ๋๋ค.

![image](https://user-images.githubusercontent.com/37766175/121026660-4c80a380-c7e1-11eb-9d36-65425b6944da.gif)

#### markdownCommands, wysiwygCommands

ํ๋ฌ๊ทธ์ธ์์๋ `markdownCommands`, `wysiwygCommands` ์ต์์ ์ฌ์ฉํ์ฌ ๋งํฌ๋ค์ด, ์์ง์ ์ปค๋งจ๋๋ฅผ ๋ฑ๋กํ  ์ ์๋ค.

๊ฐ๊ฐ์ ์ปค๋งจ๋ ํจ์๋ `payload`, `state`, `dispatch` ์ธ ๊ฐ์ ๋งค๊ฐ๋ณ์๋ฅผ ๊ฐ์ง๋ฉฐ, ์ด๋ฅผ ์ฌ์ฉํ์ฌ [Prosemirror](https://prosemirror.net/) ๊ธฐ๋ฐ์ ์๋ํฐ ๋ด๋ถ ๋์์ ์ ์ดํ  ์ ์๋ค.

* `payload`: ์ปค๋งจ๋ ์คํํ  ๋ ํ์ํ `payload`์ด๋ค.
* `state`: ์๋ํฐ์ ๋ด๋ถ ์ํ๋ฅผ ๋ํ๋ด๋ ์ธ์คํด์ค๋ก [prosemirror-state](https://prosemirror.net/docs/ref/#state)์ ๋์ผํ๋ค.
* `dispatch`: ์ปค๋งจ๋ ์คํ์ ํตํด ์๋ํฐ์ ์ฝํ์ธ ๋ฅผ ๋ณ๊ฒฝํ๊ณ  ์ถ์ ๊ฒฝ์ฐ `dispatch` ํจ์๋ฅผ ์คํํด์ผ ํ๋ค. Prosemirror์ [dispatch](https://prosemirror.net/docs/ref/#view.EditorView.dispatch) ํจ์์ ๋์ผํ๋ค.

๋ง์ฝ ์ปค๋งจ๋ ํจ์๋ฅผ ์คํํ์ฌ ์๋ํฐ์ ์ฝํ์ธ ์ ๋ณ๊ฒฝ ์ฌํญ์ด ๋ฐ์ํ๋ค๋ฉด ๋ฐ๋์ `true`๋ฅผ ๋ฐํํด์ผ ํ๋ค. ๋ฐ๋์ ๊ฒฝ์ฐ์๋ `false`๋ฅผ ๋ฐํํด์ผ ํ๋ค.

```js
return {
  markdownCommands: {
    myCommand: (payload, state, dispatch) => {
      // ...
      return true;
    },
  },
  wysiwygCommands: {
    myCommand: (payload, state, dispatch) => {
      // ...
      return true;
    },
  },
};
```

์์ ์์ ์ฝ๋์ฒ๋ผ ํ๋ฌ๊ทธ์ธ์์ ์ปค๋งจ๋ ํจ์๋ฅผ ์ ์ํ์ฌ ๋ฐํํ๋ฉด, ํด๋น ์ปค๋งจ๋๋ฅผ ์๋ํฐ์์ ์ฌ์ฉํ  ์ ์๋ค.

#### toolbarItems

ํ๋ฌ๊ทธ์ธ์์ ์๋ํฐ์ ํด๋ฐ ์์ดํ์ ๋ฑ๋กํ  ์๋ ์๋ค.

```js
return {
  // ...
  toolbarItems: [
    {
      groupIndex: 0,
      itemIndex: 3,
      item: toolbarItem,
    },
  ],
};
```

์์ ์ฝ๋์ฒ๋ผ `toolbarItems` ๋ฐฐ์ด์ ์ด๋ค ์์ดํ์ ์ถ๊ฐํ ์ง ์ค์ ํ  ์ ์๋ค. ๊ฐ ์ต์ ๊ฐ์ฒด๋ `groupIndex`, `itemIndex`, `item` ์ธ ๊ฐ์ง ํ๋กํผํฐ๊ฐ ์์ผ๋ฉฐ ๋ค์๊ณผ ๊ฐ๋ค.

* `groupIndex`: ํด๋ฐ ์์ดํ์ ์ถ๊ฐํ  ๊ทธ๋ฃน์ ์ธ๋ฑ์ค๋ฅผ ์ง์ ํ๋ค.
* `itemIndex`: ์ง์ ํ ๊ทธ๋ฃน ๋ด์์ ๋ช ๋ฒ์งธ๋ก ์ถ๊ฐํ ์ง ์ธ๋ฑ์ค๋ฅผ ์ง์ ํ๋ค.
* `item`: ์ถ๊ฐํ  ํด๋ฐ ์์ดํ ์์๋ฅผ ์ง์ ํ๋ค. [ํด๋ฐ](https://github.com/nhn/tui.editor/blob/master/docs/ko/toolbar.md)์ ํด๋ฐ ์ปค์คํฐ๋ง์ด์ง์์ ์ฌ์ฉ๋๋ ๊ฐ์ฒด์ ๋์ผํ ํํ์ด๋ค.

๋ง์ฝ ์์  ์ฝ๋์ฒ๋ผ `toolbarItems` ์ต์์ ์ค์ ํ๋ค๋ฉด, 1๋ฒ์งธ ํด๋ฐ ๊ทธ๋ฃน์ 4๋ฒ์งธ ์ธ๋ฑ์ค๋ก ํด๋ฐ ์์ดํ์ ๋ฑ๋กํ  ๊ฒ์ด๋ค.

#### markdownPlugins, wysiwygPlugins

์๋ํฐ๋ ๋ด๋ถ์ ์ผ๋ก Prosemirror๋ฅผ ์ฌ์ฉํ๋ค. Prosemirror๋ ๋ด๋ถ์ ์ผ๋ก ์์ฒด์ ์ธ ํ๋ฌ๊ทธ์ธ ์์คํ์ ์ ๊ณตํ๋ค. ์๋ํฐ์ ํ๋ฌ๊ทธ์ธ์์๋ ์๋ํฐ์ ๋ด๋ถ ๋์์ ์ ์ดํ๊ธฐ ์ํด ์ด๋ฌํ Prosemirror ํ๋ฌ๊ทธ์ธ์ ์ง์  ์ ์ํ  ์ ์๋ค. ๋๋ถ๋ถ์ ๊ฒฝ์ฐ ์ด๋ฌํ ์ต์์ ํ์์์ง๋ง, ์ข์ข ํ์ํ ๊ฒฝ์ฐ๊ฐ ์๋ค. ์๋ฅผ ๋ค์ด ์ฝ๋ ํ์ด๋ผ์ดํ ํ๋ฌ๊ทธ์ธ์์๋ ์์ง์ ์๋ํฐ์ `codeBlock`์ ํ์๋๋ ์ฝ๋๋ฅผ ํ์ด๋ผ์ดํํ  ๋ ์ฌ์ฉํ๋ค.

```js
return {
  wysiwygPlugins: [() => codeSyntaxHighlighting(context, prism)],
};
```

์ด ์ต์ ๊ฐ์ฒด๋ฅผ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ Prosemirror์ ํ๋ฌ๊ทธ์ธ ์ ์ ๋ฐฉ๋ฒ๊ณผ ๋์ผํ๋, [์ฌ๊ธฐ](https://prosemirror.net/docs/ref/#state.Plugin)๋ฅผ ์ฐธ์กฐ ๋ฐ๋๋ค.

#### wysiwygNodeViews

๋งํฌ๋ค์ด ์๋ํฐ๋ ์ผ๋ฐ ํ์คํธ์ด์ง๋ง, ์์ง์ ์๋ํฐ์ ์ฝํ์ธ ๋ ํน์ ํ ๋ธ๋๋ก ๊ตฌ์ฑ๋๋ค. ์ด๋ฌํ ๋ธ๋๋ค์ `customHTMLRenderer` ์ต์์ ์ฌ์ฉํ์ฌ ์์ฑ์ด๋ ํด๋์ค๋ฅผ ์ถ๊ฐํ๋ ์ปค์คํฐ๋ง์ด์ง์ด ๊ฐ๋ฅํ๋ค. ํ์ง๋ง ๊ทธ ์ธ์ ์ด๋ฒคํธ๋ฅผ ๋ฑ๋กํ์ฌ ๋ฌด์ธ๊ฐ๋ฅผ ์ ์ดํ๊ฑฐ๋, ๋ ๋ณต์กํ ์ํธ ์์ฉ์ ์ํ๋ ๊ฒฝ์ฐ `customHTMLRenderer` ์ต์๋ง์ผ๋ก๋ ํ๊ณ๊ฐ ์๋ค. ์ด๋ฐ ๊ฒฝ์ฐ ํ๋ฌ๊ทธ์ธ์ `wysiwygNodeViews` ์ต์์ ์ฌ์ฉํ์ฌ ์์ง์ ์๋ํฐ์์ ๋ ๋๋ง๋๋ ๋ธ๋๋ฅผ ์ํ๋ ๋๋ก ์ปค์คํฐ๋ง์ด์งํ  ์ ์๋ค. 
์ด ์ต์ ์ญ์ ๋๋ถ๋ถ์ ๊ฒฝ์ฐ์๋ ํ์๊ฐ ์์ ๊ฒ์ด๋ค. `wysiwygPlugins` ํ๋กํผํฐ์ ๋ง์ฐฌ๊ฐ์ง๋ก `wysiwygNodeViews` ํ๋กํผํฐ๋ ์ฝ๋ ํ์ด๋ผ์ดํ ํ๋ฌ๊ทธ์ธ์์ ์ฌ์ฉ๋๋ค.

```js
return {
  wysiwygNodeViews: {
    codeBlock: createCodeSyntaxHighlightView(registerdlanguages),
  },
};
```

์ด ์ต์ ๊ฐ์ฒด๋ฅผ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ Prosemirror์ `nodeView` ์ ์ ๋ฐฉ๋ฒ๊ณผ ๋์ผํ๋, [์ฌ๊ธฐ](https://prosemirror.net/docs/ref/#view.NodeView)๋ฅผ ์ฐธ์กฐ ๋ฐ๋๋ค.

### ํ๋ฌ๊ทธ์ธ ํจ์์ `context` ๋งค๊ฐ๋ณ์
ํ๋ฌ๊ทธ์ธ ํจ์๋ ์์์ ์ดํด๋ณธ ๋ค์ํ ํ๋กํผํฐ๋ฅผ ์ ์ํ๊ธฐ ์ํด `context` ๋งค๊ฐ๋ณ์๋ก ํ์์ ์ธ ์ ๋ณด๋ค์ ์ฌ์ฉํ  ์ ์๋ค. `context` ๋งค๊ฐ๋ณ์๋ ์๋์ ๊ฐ์ ์ ๋ณด๋ค์ ๊ฐ์ง๊ณ  ์๋ค.

* `eventEmitter`: ์๋ํฐ์ `eventEmitter`์ ๋์ผํ๋ค. ์๋ํฐ์์ ํต์ ์ ์ํด ์ฌ์ฉํ๋ค.
* `usageStatistics`: ํด๋น ํ๋ฌ๊ทธ์ธ์ `@toast-ui/editor`์ GA๋ก ์์งํ ์ง ๊ฒฐ์ ํ๋ค.
* `i18n`: ๋ค๊ตญ์ด ์ถ๊ฐ๋ฅผ ์ํ ์ธ์คํด์ค์ด๋ค.
* `pmState`: [prosemirror-state](https://prosemirror.net/docs/ref/#state)์ ์ผ๋ถ ๋ชจ๋์ ๊ฐ์ง ํ๋กํผํฐ์ด๋ค.
* `pmView`: [prosemirror-view](https://prosemirror.net/docs/ref/#view)์ ์ผ๋ถ ๋ชจ๋์ ๊ฐ์ง ํ๋กํผํฐ์ด๋ค.
* `pmModel`: [prosemirror-model](https://prosemirror.net/docs/ref/#model)์ ์ผ๋ถ ๋ชจ๋์ ๊ฐ์ง ํ๋กํผํฐ์ด๋ค.
