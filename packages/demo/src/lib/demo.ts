import { common, helloWorld } from '@webdeveric/nx20-demo-common/lib/common';

export function demo(): string {
  return `demo-${common()}`;
}

export function sayHi(): void {
  helloWorld();
}
