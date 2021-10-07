/**
 * @fileoverview Implements uml plugin
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */
// @ts-ignore
import renderAbc from 'abcjs/src/api/abc_tunebook_svg';

import { PluginOptions } from '../index';

import type { MdNode, PluginContext, PluginInfo } from '@toast-ui/editor';
import type { HTMLToken } from '@toast-ui/toastmark';

function generateId() {
  return `abc-${Math.random().toString(36).substr(2, 10)}`;
}

function getAbcContainer(id: string) {
  return document.querySelector<HTMLElement>(`[data-abc-id=${id}]`)!;
}

function createABCTokens(text: string): HTMLToken[] {
  const id = generateId();

  setTimeout(() => {
    renderAbc(getAbcContainer(id), text); // TODO: add audio
  });

  try {
    if (!renderAbc) {
      throw new Error('abcjs dependency required');
    }
  } catch (err) {
    setTimeout(() => {
      getAbcContainer(id).textContent = `Error occurred on encoding abc: ${err.message}`;
    });
  }

  return [
    { type: 'openTag', tagName: 'div', outerNewLine: true, attributes: { 'data-abc-id': id } },
    { type: 'closeTag', tagName: 'div', outerNewLine: true },
  ];
}

/**
 * ABC plugin
 * @param {Object} context - plugin context for communicating with editor
 * @param {Object} options - options for plugin
 */
export default function abcPlugin(_: PluginContext, options: PluginOptions = {}): PluginInfo {
  return {
    toHTMLRenderers: {
      abc(node: MdNode) {
        return createABCTokens(node.literal!);
      },
    },
  };
}
