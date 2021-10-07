/**
 * @fileoverview Implements uml plugin
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */
import { PluginOptions } from '../index';

import type { MdNode, PluginContext, PluginInfo } from '@toast-ui/editor';
import type { HTMLToken } from '@toast-ui/toastmark';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html';
import { TeX } from 'mathjax-full/js/input/tex';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages';
import { mathjax } from 'mathjax-full/js/mathjax';
import { SVG } from 'mathjax-full/js/output/svg';

function generateId() {
  return `mathjax-${Math.random().toString(36).substr(2, 10)}`;
}

function getMathJaxContainer(id: string) {
  return document.querySelector<HTMLElement>(`[data-mathjax-id=${id}]`)!;
}

function createTexTokens(text: string): HTMLToken[] {
  const id = generateId();

  setTimeout(() => {
    const adaptor = liteAdaptor();
    // eslint-disable-next-line new-cap
    const handler = RegisterHTMLHandler(adaptor);

    const tex = new TeX(AllPackages);
    const svg = new SVG();
    const html = mathjax.document('', { InputJax: tex, OutputJax: svg });
    const node = html.convert(text);

    // @ts-ignore
    getMathJaxContainer(id).innerHTML = adaptor.outerHTML(node);
  });

  try {
    if (!mathjax) {
      throw new Error('mathjax dependency required');
    }
  } catch (err) {
    setTimeout(() => {
      getMathJaxContainer(id).textContent = `Error occurred on encoding mathjax: ${err.message}`;
    });
  }

  return [
    { type: 'openTag', tagName: 'div', outerNewLine: true, attributes: { 'data-mathjax-id': id } },
    { type: 'closeTag', tagName: 'div', outerNewLine: true },
  ];
}

/**
 * MathJax plugin
 * @param {Object} context - plugin context for communicating with editor
 * @param {Object} options - options for plugin
 */
export default function mathjaxPlugin(_: PluginContext, options: PluginOptions = {}): PluginInfo {
  return {
    toHTMLRenderers: {
      tex(node: MdNode) {
        return createTexTokens(node.literal!);
      },
    },
  };
}
