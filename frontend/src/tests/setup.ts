import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { rest } from "msw";

const transactionMockResponse = {
  message: [
    {
      id: 1,
      date: "2022-01-15T22:20:30.000Z",
      product: "CURSO 1",
      value: 60000,
      seller: "SELLER 1",
        typeId: 1,
        type: {
          id: 1,
          description: "Venda produtor",
          nature: "INPUT",
          signal: "POSITIVE"
        }
    },
  ]  
};

export const restHandlers = [
  rest.get("http://localhost:3000/", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(transactionMockResponse));
  }),
];

export const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());