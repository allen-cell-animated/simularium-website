import { expect } from "chai";
import * as React from "react";

import { bindAll, convertToSentenceCase } from "../";

describe("General utilities", () => {
    describe("bindAll", () => {
        it("binds class methods to a class", () => {
            class Foo extends React.Component {
                private message = "Hello from Foo";

                constructor(props: any) {
                    super(props);
                    bindAll(this, [this.bar]);
                }

                public bar() {
                    return this.message;
                }
            }

            const foo = new Foo({});
            const bar = foo.bar;
            expect(foo.bar()).to.equal(bar());
        });

        it("does not bind a method that it was not asked to bind", () => {
            class Foo extends React.Component {
                private message = "Hello from Foo";

                constructor(props: {}) {
                    super(props);
                    bindAll(this, [this.bar]);
                }

                public bar() {
                    return this.message;
                }

                public baz() {
                    return this.message;
                }
            }

            const foo = new Foo({});
            const baz = foo.baz;

            expect(foo.baz()).to.equal("Hello from Foo");
            expect(baz).to.throw(TypeError);
        });
    });
    describe("toSentenceCase", () => {
        it("takes a string and converts it to sentence case", () => {
            const startingString = "all lowercase. all lowercase";
            expect(convertToSentenceCase(startingString)).to.equal(
                "All lowercase. All lowercase"
            );
        });
        it("ignores camelcase", () => {
            const startingString = "all lowercase. has camelCase";
            expect(convertToSentenceCase(startingString)).to.equal(
                "All lowercase. Has camelCase"
            );
        });
        it("fixes mid sentence caps", () => {
            const startingString = "all lowercase. has Mid sentence cap";
            expect(convertToSentenceCase(startingString)).to.equal(
                "All lowercase. Has mid sentence cap"
            );
        });
    });
});
