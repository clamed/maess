// Utilizing TypeScript's utility types to enforce certain properties

// Making all properties of an object type T required
function makeRequired<T>(obj: Partial<T>): Required<T> {
  return obj as Required<T>;
}

// Making all properties of an object type T readonly
function makeReadonly<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

// Example usage:
interface Example {
  name?: string;
  age?: number;
}

// Creating an object with optional properties
const exampleObj: Partial<Example> = { name: 'Alice' };

// Making the object's properties required
const requiredObj = makeRequired(exampleObj);

// Making the object's properties readonly
const readonlyObj = makeReadonly(requiredObj);

// Now, `readonlyObj` is a readonly version of `requiredObj`, and all properties are guaranteed to exist.
