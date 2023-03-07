//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.

module.exports = {
  checkId(id) {
    if (!id) {
      throw "Error: You must provide an id to search for";
    }
    if (/^-?\d+$/.test(id) == false)
      throw "Error: string must contain only numbers";
    if (typeof id !== "string") throw "Error: id must be a string";
    id = id.trim();
    if (id.length === 0)
      throw "Error: id cannot be an empty string or just spaces";

    if (typeof id === "boolean") throw "Error: id must be a string";

    if (id === null) throw "Error: id cannot be null";
    if (id === NaN) throw "Error: id cannot be NaN";

    return id;
  },
};
