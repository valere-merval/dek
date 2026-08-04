const propTypesTemplate = (
  { componentName, props, interfaces, imports, exports, jsx },
  { tpl },
) => {
  const componentNameWithoutPrefix = componentName.replace("Svg", "");
  return tpl`
  ${imports};
  import { SVGRProps } from "../../types";
  
  const ${componentName} = (${props}) => (
    ${jsx}
  );
  ${componentName}.displayName='${componentNameWithoutPrefix}';
   
  ${exports};
  `;
};

module.exports = propTypesTemplate;
