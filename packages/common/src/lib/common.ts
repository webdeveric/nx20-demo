import { randomUUID } from 'node:crypto';

export function common(): string {
  return 'common';
}

export function helloWorld(): void {
  console.log('Hello, World!');
}

export function now(): number {
  return Date.now();
}

export function getId(): string {
  return randomUUID();
}
