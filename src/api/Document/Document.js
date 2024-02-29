import DocumentV1 from "./DocumentV1";
import DocumentV2 from "./DocumentV2";
import Rest from "../Rest/Rest";

const withDocVersion = function (docVersion) {
  return {
    v1: DocumentV1,
    v2: DocumentV2
  }[docVersion];
};

class Document {
  constructor(args, docVersion = "v1") {
    // create instance of DocumentV1 or DocumentV2
    return Document.factory(args, docVersion);
  }

  //========================================================================================
  /*                                                                                      *
   *                                    Static Methods                                    *
   *                                                                                      */
  //========================================================================================

  /**
   * Create instance of DocumentV1 or DocumentV2
   * Xparam {*} args : Constructor arguments
   * Xparam {string} docVersion : Specify document version
   * @returns
   */
  static factory(args, docVersion = "v1") {
    // create instance of DocumentV1 or DocumentV2
    return new (withDocVersion(docVersion))(args);
  }

  /**
   * Forward create call to the correct Document version
   * Xparam {object} args Object with arguments to forward
   * Xparam {string} docVersion Document version to use
   */
  static create(args, docVersion = "v1") {
    return withDocVersion(docVersion).create(args);
  }

  /**
   * Forward delete call to the correct version
   * Xparam {object} args Object with arguments to forward
   * Xparam {string} docVersion Document version to use
   */
  static delete(args, docVersion = "v1") {
    return withDocVersion(docVersion).delete(args);
  }

  /**
   * Parse path into an object
   * Xparam {string} path The path to parse
   * Xparam {string} dtype Default type
   *
   * @return {object} An object with workspace, type, name, version
   */

  static parsePath(_path, dtype = "Node") {
    if (!_path) {
      return console.warn("Tried to parse an invalid path", _path);
    }

    const spl = _path.split("/");

    const workspace = spl.length > 1 ? spl[0] : "global";
    const type = spl[1] || dtype;
    const name = spl[2] || _path;
    const version = spl[3] || "__UNVERSIONED__";
    const path = `${workspace}/${type}/${name}/${version}`;

    return { workspace, type, name, version, path };
  }

  /**
   * Check if document exists in redis or archive
   *
   * Xparam {*} data
   * {
   *  name      : document name
   *  scope     : document scope (Annotation, Callback, ...)
   *  version   : document version
   *  workspace : workspace (global, user1, user2, ...)
   * }
   * @returns {Boolean} True if document already exists and False otherwise
   */
  static exists({ name, scope, version, workspace = "global" }) {
    const path = `v2/db/${workspace}/${scope}/${name}/${version}`;
    return Rest.get({ path })
      .then(data => {
        return !!data[scope];
      })
      .catch(err => {
        return err.status === 500 ? false : true;
      });
  }
}

export default Document;
