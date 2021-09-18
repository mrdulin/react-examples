const testData = [
  {
    date: ["2016-09-0912:00:00", "2015-09-0913:10:00"],
    title: [
      {
        name: "Name 1",
        description: [{ value: 7898 }, { value: 7898 }],
      },
      {
        name: "Name 2",
        description: [{ value: 3244 }, { value: 4343 }],
      },
      {
        name: "Name 3",
        description: [null, null],
      },
    ],
  },
];

const output = testData
  .flatMap((inner) => {
    return inner.title.flatMap((inside) =>
      inside.description.map((point) => point?.value)
    );
  })
  .filter((v) => typeof v !== "undefined");
console.log("output: ", output);
