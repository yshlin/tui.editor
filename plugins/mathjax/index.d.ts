import type { PluginContext, PluginInfo } from '@toast-ui/editor';

export interface PluginOptions {
  rendererURL?: string;
}

export default function mathjaxPlugin(context: PluginContext, options: PluginOptions): PluginInfo;
