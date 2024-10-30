import { common, helloWorld } from '@webdeveric/nx20-demo-common/lib/common';

export function demo(): string {
  return `demo-${common()}`;
}

export function sayHi(): void {
  helloWorld();
}

export function sayBye(): void {
  console.log('Bye');
}

export function printEnv(): void {
  console.table(process.env);
}
