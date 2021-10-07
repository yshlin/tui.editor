import type { PluginContext, PluginInfo } from '@toast-ui/editor';

export interface PluginOptions {
  rendererURL?: string;
  fontPath?: string;
}

export default function alphaTexPlugin(context: PluginContext, options: PluginOptions): PluginInfo;
