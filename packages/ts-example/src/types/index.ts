/**
 * Created by dulin on 2017/6/29.
 */
type onDivElementClick = (e: React.MouseEvent<HTMLDivElement>) => void;

type DecoratorFunction<T> = (target: any, propertyKey: string, decriptor: T) => T;

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

export {
  onDivElementClick,
  DecoratorFunction,
  Readonly
};
