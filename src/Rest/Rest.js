import RestBase from "./RestBase";
import withAuth from "./WithAuth";

const Rest = withAuth(RestBase);

export default Rest;
