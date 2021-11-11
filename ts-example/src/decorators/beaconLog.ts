/**
 * Created by dulin on 2017/7/4.
 */
import {IkeyOfObject} from 'interfaces/common';
import {DecoratorFunction} from 'types';

type LogMethod<T> = (...args: T[]) => T;

interface ILogOpt {
  data: IkeyOfObject;
  delay?: string | number;
  method?: LogMethod<any>;
}

/** 
 * @desc 打点装饰器。问题：打点的代码混入了业务代码中。目的：将打点代码和业务逻辑代码解耦
 * 
 * 注意：
 * 
 * 1. 无法对依赖于被装饰的方法中的异步回调函数的结果的打点，例如componentDidMount中有异步请求，在异步回调函数中进行打点。
 * 
 * @param opt 装饰器配置
 * @returns {(target:any, propertyKey:string, decriptor:PropertyDescriptor)=>PropertyDescriptor}
 */
function log(opt: ILogOpt): DecoratorFunction<PropertyDescriptor> {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const originalMethod = descriptor.value;
    let ret: any;
    let timeId: number;

    // 不要使用箭头函数，否则originalMethod中this的指向将发生变化
    // https://stackoverflow.com/questions/29775830/how-to-implement-a-typescript-decorator
    descriptor.value = function (...args: any[]): any {

      // -- 打点 --
      const data: IkeyOfObject = opt.data;
      let delay: number = 0;
      if (opt.delay) {
        delay = typeof opt.delay === 'string' ? Number.parseInt(opt.delay, 10) : opt.delay;
      }
      const logMethod: LogMethod<any> = opt.method ? opt.method : window.alert;

      const logData: IkeyOfObject = Object.assign({}, data, args[args.length - 1]);

      if (delay) {
        // ts中，使用setTimeout的返回值是NodeJS.Timer，所以这里要使用window.setTimeout
        timeId = window.setTimeout((): void => {
          logMethod(JSON.stringify(logData));
        }, delay);
      } else {
        logMethod(JSON.stringify(logData));
      }


      ret = originalMethod.apply(this, args);

      clearTimeout(timeId);
      return ret;
    };

    return descriptor;
  };
}

export default log;
