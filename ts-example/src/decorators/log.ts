/**
 * Created by dulin on 2017/7/10.
 */
import { DecoratorFunction } from 'types';

type LogMode = 'args' | 'count';

function LogFactory(mode: LogMode = 'args'): DecoratorFunction<PropertyDescriptor> {

  return function log(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {

    const originalMethod = descriptor.value;

    const componentClassName: string = target.constructor.displayName || target.constructor.name;

    descriptor.value = function (...args: any[]): any {

      const result: any = originalMethod.apply(this, args);

      if (process.env.NODE_ENV !== 'production') {
        switch (mode) {
          case 'count':
            countLogMode(componentClassName, propertyKey);
            break;
          default:
            argsLogMode(args, result);
        }
      }
      return result;
    };

    return descriptor;
  };

}

function argsLogMode(args: any[], result: any) {
  console.group('Log arguments and result of method: ');
  console.log('The method args are: ' + JSON.stringify(args));
  console.log('The return value is: ' + result);
  console.groupEnd();
}

function countLogMode(componentClassName: string, propertyKey: string) {
  console.count(`[${componentClassName} - ${propertyKey}] method has been execute `);
}


export default LogFactory;
