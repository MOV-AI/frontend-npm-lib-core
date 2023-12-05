import RestBase from "./RestBase";
import withAuth from "./WithAuth";

const Rest = withAuth(RestBase);
globalThis.Rest = Rest;

export default Rest;
