/// <reference path="nonexistent" />
// ↑ @typescript-eslint/triple-slash-reference (must be at file top)
// @ts-nocheck

/**
 * Fixture: base module violations (typescript-eslint recommended + eslint core)
 *
 * Each section intentionally triggers exactly one error-level rule.
 * The test runner asserts that ALL active error rules fire.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

// ---------------------------------------------------------------------------
// @typescript-eslint rules (20)
// ---------------------------------------------------------------------------

// @typescript-eslint/ban-ts-comment
// @ts-ignore
const _tsIgnored = "should use ts-expect-error";

// @typescript-eslint/no-array-constructor
const _arr = new Array();

// @typescript-eslint/no-duplicate-enum-values
enum DuplicateEnum {
  A = 1,
  B = 1,
}

// @typescript-eslint/no-empty-object-type
interface EmptyInterface {}

// @typescript-eslint/no-explicit-any
const _anything: any = 1;

// @typescript-eslint/no-extra-non-null-assertion
function _extraNonNull(x?: { a?: string }) {
  return x!!.a;
}

// @typescript-eslint/no-misused-new
interface MisusedNew {
  constructor(): void;
}

// @typescript-eslint/no-namespace
namespace BadNamespace {
  export const x = 1;
}

// @typescript-eslint/no-non-null-asserted-optional-chain
function _optChainAssert(x?: { a?: string }) {
  return x?.a!;
}

// @typescript-eslint/no-require-imports
const _req = require("fs");

// @typescript-eslint/no-this-alias
class ThisAlias {
  method() {
    const self = this;
    return self;
  }
}

// @typescript-eslint/no-unnecessary-type-constraint
function _unnecessaryConstraint<T extends any>(x: T) {
  return x;
}

// @typescript-eslint/no-unsafe-declaration-merging
class MergedDecl {}
interface MergedDecl {}

// @typescript-eslint/no-unsafe-function-type
const _unsafeFn: Function = () => {};

// @typescript-eslint/no-unused-expressions
("unused expression");

// @typescript-eslint/no-unused-vars
/* eslint-enable @typescript-eslint/no-unused-vars */
const _unusedVar = "this is unused";
/* eslint-disable @typescript-eslint/no-unused-vars */

// @typescript-eslint/no-wrapper-object-types
const _wrappedStr: String = "";

// @typescript-eslint/prefer-as-const
const _asConst: "hello" = "hello" as "hello";

// @typescript-eslint/prefer-namespace-keyword
module BadModule {
  export const x = 1;
}

// ---------------------------------------------------------------------------
// ESLint core rules from typescript-eslint/eslint-recommended (4)
// ---------------------------------------------------------------------------

// no-var
var _oldSchool = "use const or let";

// prefer-const
let _neverReassigned = "should be const";

// prefer-rest-params
function _useArguments() {
  return arguments;
}

// prefer-spread
const _numbers = [1, 2, 3];
Math.max.apply(Math, _numbers);

// ---------------------------------------------------------------------------
// ESLint core rules from eslint:recommended (41)
// ---------------------------------------------------------------------------

// for-direction — loop counter goes wrong direction
for (let i = 0; i < 10; i--) {}

// no-async-promise-executor — async function as Promise executor
const _asyncPromise = new Promise(async (resolve) => {
  resolve(1);
});

// no-case-declarations — declaration in case without block
switch ("a") {
  case "a":
    const _caseDecl = 1;
    break;
  case "b":
    break;
}

// no-compare-neg-zero — comparison with -0
if (_neverReassigned === -0) {
}

// no-cond-assign — assignment in condition
let _condVal: number;
if ((_condVal = 1)) {
}

// no-constant-binary-expression — constant binary expression
const _constBin = "a" ?? "b";

// no-constant-condition — constant in condition
if (true) {
}

// no-control-regex — control character in regex
const _ctrlRegex = /\x00/;

// no-debugger
debugger;

// no-delete-var — delete on a variable
let _deleteMe = 1;
delete _deleteMe;

// no-dupe-else-if — duplicate else-if condition
if (_condVal === 1) {
} else if (_condVal === 2) {
} else if (_condVal === 1) {
}

// no-duplicate-case — duplicate case value
switch (_condVal) {
  case 1:
    break;
  case 2:
    break;
  case 1:
    break;
}

// no-empty — empty block statement
try {
} catch (e) {}

// no-empty-character-class — empty character class in regex
const _emptyCharClass = /^abc[]/;

// no-empty-pattern — empty destructuring pattern
const {} = { a: 1 };

// no-empty-static-block — empty static block
class EmptyStaticBlock {
  static {}
}

// no-ex-assign — assigning to exception parameter
try {
  throw new Error();
} catch (e) {
  e = 10;
}

// no-extra-boolean-cast — unnecessary boolean cast
if (!!true) {
}

// no-fallthrough — switch case fallthrough
switch (_condVal) {
  case 10:
    console.log("ten");
  case 20:
    break;
}

// no-global-assign — assignment to global
undefined = 1;

// no-invalid-regexp — invalid regex
const _badRegex = new RegExp("[");

// no-irregular-whitespace — irregular whitespace (using a literal NBSP \u00A0)
const _irregularWs = 1;

// no-loss-of-precision — numeric literal loses precision
const _bigNum = 9007199254740993;

// no-misleading-character-class — regex character class with combined code points
const _misleading = /^[A\u0301]/u;

// no-nonoctal-decimal-escape — UNTESTABLE: TS parser rejects '\8' before ESLint runs
// no-octal — UNTESTABLE: TS parser rejects legacy octal '071' before ESLint runs

// no-prototype-builtins — direct call on prototype methods
const _hasOwn = {}.hasOwnProperty("foo");

// no-regex-spaces — multiple literal spaces in regex
const _regexSpaces = /foo   bar/;

// no-self-assign — self assignment
let _selfAssign = 1;
_selfAssign = _selfAssign;

// no-shadow-restricted-names — shadow restricted name
const NaN = 42;

// no-sparse-arrays — sparse arrays
const _sparse = [1, , 3];

// no-unsafe-finally — control flow in finally
function _unsafeFinally() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

// no-unsafe-optional-chaining — optional chaining in non-nullable context
function _unsafeOptChain(obj?: { a?: number[] }) {
  const spread = [...obj?.a];
  return spread;
}

// no-unused-labels — unused label
UNUSED_LABEL: for (const x of [1, 2]) {
  break;
}

// no-unused-private-class-members — unused private member
class UnusedPrivate {
  #unused = 1;
}

// no-useless-backreference — backreference appears before its group
const _uselessBackref = /\1(a)/;

// no-useless-catch — catch that only rethrows
try {
  throw new Error();
} catch (e) {
  throw e;
}

// no-useless-escape — unnecessary escape in string/regex
const _uselessEsc = /\a/;

// no-unassigned-vars — let variable read but never assigned
let _unassignedVar: string;
console.log(_unassignedVar);

// preserve-caught-error — re-throw without cause
try {
  throw new Error("original");
} catch (err) {
  throw new Error("wrapped: " + err);
}

// require-yield — generator without yield
function* _emptyGen() {
  return 1;
}

// use-isnan — comparison with NaN
if (_condVal === NaN) {
}

// valid-typeof — invalid typeof comparison
if (typeof _condVal === "strig") {
}
