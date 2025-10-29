import Authentication from "./Authentication";

const unmockedFetch = global.fetch;
const unmockedConsole = global.console;

beforeAll(() => {
  global.console = {
    ...global.console,
    warn: jest.fn(),
  };
});

afterAll(() => {
  (global.fetch as jest.Mock).mockClear();
  global.fetch = unmockedFetch;
  global.console = unmockedConsole;
});

test("Get Providers when fetch is successfull", () => {
  const providers = ["internal", "domain1"];
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          domains: providers,
          success: true,
        }),
    }),
  ) as jest.Mock;

  Authentication.getProviders().then(({ domains }) => {
    expect(domains).toEqual(expect.arrayContaining(providers));
  });
});

test("Get Providers when fetch is not successfull", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: false,
    }),
  ) as jest.Mock;

  expectProvidersToBeTheDefault();
});

test("Get Providers when API is down", () => {
  global.fetch = jest.fn(() => Promise.reject("API is down")) as jest.Mock;
  expectProvidersToBeTheDefault();
});

function expectProvidersToBeTheDefault() {
  Authentication.getProviders().then(({ domains }) =>
    expect(domains).toEqual(
      expect.arrayContaining([Authentication.DEFAULT_PROVIDER]),
    ),
  );
}
