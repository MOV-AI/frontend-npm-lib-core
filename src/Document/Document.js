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
}

export default Document;
