// @ts-nocheck
/**
 * Fixture: a11y module violations (jsx-a11y rules)
 *
 * Each section intentionally triggers exactly one jsx-a11y error rule.
 * The test runner asserts that ALL 31 active a11y rules fire.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

// jsx-a11y/alt-text
function NoAltText() {
  return <img src="photo.jpg" />;
}

// jsx-a11y/anchor-has-content
function EmptyAnchor() {
  return <a href="https://example.com"></a>;
}

// jsx-a11y/anchor-is-valid
function InvalidAnchor() {
  return <a href="#">click</a>;
}

// jsx-a11y/aria-activedescendant-has-tabindex
function AriaActiveDescendant() {
  return <div aria-activedescendant="item-1">content</div>;
}

// jsx-a11y/aria-props
function InvalidAriaProp() {
  return <div aria-invalidprop="true">content</div>;
}

// jsx-a11y/aria-proptypes
function BadAriaValue() {
  return <div aria-hidden="yes">content</div>;
}

// jsx-a11y/aria-role
function InvalidRole() {
  return <div role="invalid-role">content</div>;
}

// jsx-a11y/aria-unsupported-elements
function AriaOnMeta() {
  return <meta aria-hidden="true" />;
}

// jsx-a11y/autocomplete-valid
function BadAutocomplete() {
  return <input type="text" autoComplete="invalid-value" />;
}

// jsx-a11y/click-events-have-key-events
function ClickWithoutKey() {
  return (
    <div onClick={() => {}} role="button">
      clickable
    </div>
  );
}

// jsx-a11y/heading-has-content
function EmptyHeading() {
  return <h1></h1>;
}

// jsx-a11y/html-has-lang
function NoLangHtml() {
  return <html></html>;
}

// jsx-a11y/iframe-has-title
function NoTitleIframe() {
  return <iframe src="https://example.com" />;
}

// jsx-a11y/img-redundant-alt
function RedundantAlt() {
  return <img src="photo.jpg" alt="image of a photo" />;
}

// jsx-a11y/interactive-supports-focus
function NoFocusButton() {
  return (
    <span role="button" onClick={() => {}} onKeyDown={() => {}}>
      click
    </span>
  );
}

// jsx-a11y/label-has-associated-control
function LabelNoControl() {
  return <label>Name</label>;
}

// jsx-a11y/media-has-caption
function NoCaptionVideo() {
  return <video src="movie.mp4" />;
}

// jsx-a11y/mouse-events-have-key-events
function MouseNoKey() {
  return <div onMouseOver={() => {}}>hover</div>;
}

// jsx-a11y/no-access-key
function WithAccessKey() {
  return <div accessKey="h">content</div>;
}

// jsx-a11y/no-autofocus
function WithAutoFocus() {
  return <input autoFocus />;
}

// jsx-a11y/no-distracting-elements
function DistractingElement() {
  return <marquee>scrolling text</marquee>;
}

// jsx-a11y/no-interactive-element-to-noninteractive-role
function InteractiveToNoninteractive() {
  return <button role="presentation">click</button>;
}

// jsx-a11y/no-noninteractive-element-interactions
function NoninteractiveInteraction() {
  return <p onClick={() => {}}>click me</p>;
}

// jsx-a11y/no-noninteractive-element-to-interactive-role
function NoninteractiveToInteractive() {
  return <p role="button">click</p>;
}

// jsx-a11y/no-noninteractive-tabindex
function NoninteractiveTabindex() {
  return <div tabIndex={0}>focusable div</div>;
}

// jsx-a11y/no-redundant-roles
function RedundantRole() {
  return <button role="button">content</button>;
}

// jsx-a11y/no-static-element-interactions
function StaticInteraction() {
  return <div onClick={() => {}}>click</div>;
}

// jsx-a11y/role-has-required-aria-props
function MissingAriaProps() {
  return <span role="checkbox">check</span>;
}

// jsx-a11y/role-supports-aria-props
function UnsupportedAriaProps() {
  return (
    <li role="separator" aria-selected="true">
      item
    </li>
  );
}

// jsx-a11y/scope
function ScopeOnNonTh() {
  return <div scope="row">content</div>;
}

// jsx-a11y/tabindex-no-positive
function PositiveTabindex() {
  return <div tabIndex={5}>content</div>;
}
