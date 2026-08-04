// @ts-nocheck
/**
 * Fixture: react module violations (react + react-hooks rules)
 *
 * Each section intentionally triggers exactly one react/react-hooks error rule.
 * The test runner asserts that ALL active react rules fire.
 *
 * Note: react/jsx-uses-vars is a helper rule that never reports errors itself.
 * It is listed as "untestable" in the test runner.
 */

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-require-imports */

import React, { useState } from "react";

// react/display-name
const NoDisplayName = React.forwardRef((props, ref) => <div ref={ref} />);

// react/jsx-key
function MissingKey() {
  const items = [1, 2, 3];
  return (
    <>
      {items.map((i) => (
        <span>{i}</span>
      ))}
    </>
  );
}

// react/jsx-no-comment-textnodes
function CommentTextNode() {
  return <div>/* this looks like a comment */</div>;
}

// react/jsx-no-duplicate-props
function DuplicateProps() {
  return <div id="first" id="second" />;
}

// react/jsx-no-target-blank
function UnsafeBlank() {
  return (
    <a href="https://example.com" target="_blank">
      link
    </a>
  );
}

// react/jsx-no-undef
function UndefinedComponent() {
  return <UndefinedThing />;
}

// react/no-children-prop
function ChildrenAsProp() {
  return <div children="bad" />;
}

// react/no-danger-with-children
function DangerWithChildren() {
  return <div dangerouslySetInnerHTML={{ __html: "hi" }}>children</div>;
}

// react/no-deprecated
import { render } from "react-dom";
function DeprecatedRender() {
  render(<div />, document.getElementById("root"));
}

// react/no-direct-mutation-state
class DirectMutation extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    this.state.count = 1;
  }
  render() {
    return <div />;
  }
}

// react/no-find-dom-node
import ReactDOM from "react-dom";
function FindDomNode() {
  // @ts-expect-error testing deprecated API
  ReactDOM.findDOMNode(document.body);
}

// react/no-is-mounted
class IsMountedUsage extends React.Component {
  check() {
    // @ts-expect-error testing deprecated API
    if (this.isMounted()) return true;
  }
  render() {
    return <div />;
  }
}

// react/no-render-return-value
function RenderReturnValue() {
  // @ts-expect-error testing deprecated API
  const result = ReactDOM.render(<div />, document.getElementById("root"));
}

// react/no-string-refs
class StringRef extends React.Component {
  render() {
    return <div ref="myRef" />;
  }
}

// react/no-unescaped-entities
function UnescapedEntities() {
  return <div>it's a "quote"</div>;
}

// react/no-unknown-property
function UnknownProp() {
  return <div class="wrong" />;
}

// react/prop-types (needs untyped props to trigger)
// @ts-expect-error intentionally untyped props
function NoPropTypes({ name }) {
  return <div>{name}</div>;
}

// react/require-render-return
class NoRenderReturn extends React.Component {
  render() {
    // missing return
  }
}

// react-hooks/rules-of-hooks
function ConditionalHook(props: { show: boolean }) {
  if (props.show) {
    const [val] = useState(0);
  }
  return <div />;
}
