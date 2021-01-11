import DocumentV1 from "./DocumentV1";
import DocumentV2 from "./DocumentV2";

const withDocVersion = function (docVersion) {
  return {
    v1: DocumentV1,
    v2: DocumentV2
  }[docVersion];
};

class Document {
  constructor(args, docVersion = "v1") {
    // create instance of DocumentV1 or DocumentV2
    return new (withDocVersion(docVersion))(args);
  }

  /** Static handlers */

  /**
   * Forward create call to the correct Document version
   * @param {Object} args Object with arguments to forward
   * @param {String} docVersion Document version to use
   */
  static create(args, docVersion = "v1") {
    return withDocVersion(docVersion).create(args);
  }

  /**
   * Forward delete call to the correct version
   * @param {Object} args Object with arguments to forward
   * @param {String} docVersion Document version to use
   */
  static delete(args, docVersion = "v1") {
    return withDocVersion(docVersion).delete(args);
  }

  /**
   * Parse path into an object
   * @param {String} path The path to parse
   * @param {String} dtype Default type
   *
   * @return {Object} An object with workspace, type, name, version
   */

  static parsePath(path, dtype = "Node") {
    // expecting a leading slash
    const [_, _workspace, _type, _name, _version] = path.split("/");

    const workspace = _workspace || "global";
    const type = _type || dtype;
    const name = _name || path;
    const version = _version || "-";

    return { workspace, type, name, version };
  }
}

export default Document;
