import Authentication from "./Authentication";

const providers = ["internal", "domain1"];

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        domains: providers,
        success: true
      })
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test("Get Providers when fetch is successfull", () => {
  Authentication.getProviders().then(result => {
    expect(result.domains).toEqual(expect.arrayContaining(providers));
  });
});

test("Get Providers when API is not successfull", () => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: false
    })
  );
  Authentication.getProviders().catch(error =>
    expect(result.domains).toEqual(
      expect.arrayContaining([Authentication.DEFAULT_PROVIDER])
    )
  );
});

test("Get Providers when API is down", () => {
  fetch.mockImplementationOnce(() => Promise.reject("API is down"));
  Authentication.getProviders().catch(error =>
    expect(result.domains).toEqual(
      expect.arrayContaining([Authentication.DEFAULT_PROVIDER])
    )
  );
});
