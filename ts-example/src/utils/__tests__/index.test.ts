/**
 * Created by dulin on 2017/7/6.
 */
/// <reference path="../../../node_modules/@types/jest/index.d.ts"/>

// 这里用import {Mock} from 'jest'想获取Mock interface，结果报错
// Error:(7, 20) TS2306:File '/Users/dulin/workspace/react-ts-webpack2/node_modules/@types/jest/index.d.ts' is not a module.
// jest的index.d.ts不是declare module而是declare namespace jest，所以需要通过/// <references />来引入定义文件

// import {Mock} from 'jest';

import {
  processObjectPropName,
  processArrayObjectPropName,
  getObjValueByStringProperty,
} from "..";
import { IkeyOfObject } from "interfaces/common";

describe("utils test suites", () => {
  describe("processObjectPropName test suites", () => {
    it("t-0", () => {
      expect(jest.isMockFunction(processObjectPropName)).toBeFalsy();
    });

    it("t-1", () => {
      const obj: IkeyOfObject = {
        Total: "1",
        Error: "0",
      };

      // https://github.com/kulshekhar/ts-jest#ts-compiler--error-reporting
      // const s: IkeyOfObject = '';

      const actualValue: IkeyOfObject = processObjectPropName(obj);
      const expectValue: IkeyOfObject = {
        total: "1",
        error: "0",
      };

      expect(actualValue).toEqual(expectValue);
      expect(obj).toEqual({ Total: "1", Error: "0" });
    });
  });

  describe("processArrayObjectPropName test suites", () => {
    let obj: IkeyOfObject = { Total: "1", Error: "0" };

    // const processObjectPropName: jest.Mock<any> = jest.fn(() => {
    //
    // });

    beforeEach(() => {
      obj = { Total: "1", Error: "0" };
    });

    it("t-0", () => {
      expect(jest.isMockFunction(processArrayObjectPropName)).toBeFalsy();
    });

    it("t-1", () => {
      const arrObj: IkeyOfObject[] = [obj, obj];

      const actualValue: IkeyOfObject[] = processArrayObjectPropName(arrObj);
      const expectValue: IkeyOfObject[] = [
        { total: "1", error: "0" },
        { total: "1", error: "0" },
      ];

      expect(actualValue).toHaveLength(2);
      expect(actualValue).toEqual(expectValue);
    });

    it("t-1.5", () => {
      expect(obj).toEqual({ Total: "1", Error: "0" });
    });
  });

  describe("getObjValueByStringProperty test suites", () => {
    it("t-1", () => {
      const obj: IkeyOfObject = {
        pet: {
          name: "cat",
        },
      };

      const actualValue = getObjValueByStringProperty(obj, "obj.pet.name");
      const expectValue = "cat";
      expect(actualValue).toBe(expectValue);
    });
  });
});
