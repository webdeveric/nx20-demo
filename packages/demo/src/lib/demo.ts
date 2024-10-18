import { common, helloWorld } from '@webdeveric/nx20-demo-common/lib/common';

export function demo(): string {
  return `demo-${common()}`;
}

export function sayHi(): void {
  helloWorld();
}

export function whatYearIsIt(): void {
  console.log(`The current year is ${new Date().getFullYear()}`);
}

export function yetAnotherFunction(): void {
  console.log('This is another function');
}
