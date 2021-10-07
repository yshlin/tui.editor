/**
 * @fileoverview Implements uml plugin
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */
import { AlphaTabApi } from '@coderline/alphatab';
import { PluginOptions } from '../index';

import type { MdNode, PluginContext, PluginInfo } from '@toast-ui/editor';
import type { HTMLToken } from '@toast-ui/toastmark';

function generateId() {
  return `alphatex-${Math.random().toString(36).substr(2, 10)}`;
}

function getAlphaTexContainer(id: string) {
  return document.getElementById(id);
}

function createAlphaTexTokens(text: string, options: PluginOptions): HTMLToken[] {
  const id = generateId();

  setTimeout(() => {
    const api = new AlphaTabApi(<HTMLElement>getAlphaTexContainer(id), {
      fontDirectory: options.fontPath || '/font/',
      useWorkers: false,
      enableLazyLoadingJavaScript: false,
      logLevel: 'debug',
      enableUserInteraction: false,
      enablePlayer: false,
      enableCursor: false,
    });

    api.tex(text);
  });

  try {
    if (!AlphaTabApi) {
      throw new Error('alphatex dependency required');
    }
  } catch (err) {
    setTimeout(() => {
      // @ts-ignore
      getAlphaTexContainer(id).textContent = `Error occurred on encoding alphatex: ${err.message}`;
    });
  }

  return [
    {
      type: 'openTag',
      tagName: 'div',
      outerNewLine: true,
      attributes: { id, style: 'pointer-events: none;' },
    },
    { type: 'closeTag', tagName: 'div', outerNewLine: true },
  ];
}

/**
 * alphaTex plugin
 * @param {Object} context - plugin context for communicating with editor
 * @param {Object} options - options for plugin
 */
export default function alphaTexPlugin(_: PluginContext, options: PluginOptions = {}): PluginInfo {
  return {
    toHTMLRenderers: {
      alphatex(node: MdNode) {
        return createAlphaTexTokens(node.literal!, options);
      },
    },
  };
}
