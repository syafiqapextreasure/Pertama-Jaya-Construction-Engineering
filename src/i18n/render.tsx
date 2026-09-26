import React from 'react';

/** Localise presentational text while preserving keys, handlers, URLs and form values.
 * Each page/component localises its own rendered tree. Custom child components
 * remain responsible for their own output; user-entered form data is never changed.
 */
export function localizeTree(node: React.ReactNode, t: (text: string) => string): React.ReactNode {
  if (typeof node === 'string') return t(node);
  if (Array.isArray(node)) return node.map(child => localizeTree(child, t));
  if (!React.isValidElement<Record<string, unknown>>(node)) return node;
  if (typeof node.type !== 'string' && node.type !== React.Fragment) return node;
  const props: Record<string, unknown> = {};
  for (const attribute of ['alt', 'title', 'aria-label', 'placeholder']) {
    const value = node.props[attribute];
    if (typeof value === 'string') props[attribute] = t(value);
  }
  if ('children' in node.props && node.type !== 'textarea' && node.type !== 'script' && node.type !== 'style') {
    props.children = localizeTree(node.props.children as React.ReactNode, t);
  }
  return React.cloneElement(node, props);
}
