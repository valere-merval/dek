import path from "path";

class renamer {
  replace(filePath) {
    const file = path.parse(filePath);
    const newName = file.name.replace("-default", "") + file.ext;
    return path.join(file.dir, newName);
  }
}

export default renamer;
