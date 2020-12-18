import {
  buildUrl,
  logoParams,
  markdownImage,
  markdownImageWithLink,
  markdownLink,
  _dashShieldPath,
  _decodeAngleBrackets,
  _encodeParam,
  _encodeSeparators,
  _formatTitle,
  _staticDashUrl,
  _staticParamsUrl,
} from "@/core/badges";

describe("#markdownLink", () => {
  it("returns a valid markdown link", () => {
    expect(markdownLink("Alt text", "foo.md")).toBe("[Alt text](foo.md)");

    expect(markdownLink("Example", "https://example.com")).toBe(
      "[Example](https://example.com)"
    );
  });
});

describe("#markdownImage", () => {
  it("returns a valid markdown image", () => {
    expect(markdownImage("Alt text", "foo.png")).toBe("![Alt text](foo.png)");

    expect(markdownImage("Example", "https://example.com/foo.png")).toBe(
      "![Example](https://example.com/foo.png)"
    );
  });

  it("returns a valid markdown image with hover text", () => {
    expect(markdownImage("Alt text", "foo.png", "My hover text")).toBe(
      '![Alt text](foo.png "My hover text")'
    );

    expect(markdownImage("Example", "https://example.com", "My example")).toBe(
      '![Example](https://example.com "My example")'
    );
  });
});

describe("#markdownImageWithLink", () => {
  it("returns a valid tag using all parameters set", () => {
    expect(
      markdownImageWithLink(
        "Alt text",
        "foo.png",
        "https://example.com",
        "My foo"
      )
    ).toBe('[![Alt text](foo.png "My foo")](https://example.com)');

    expect(
      markdownImageWithLink("My title", "/example.png", "https://example.com")
    ).toBe("[![My title](/example.png)](https://example.com)");
  });
  it("Does not encode special characters", () => {
    expect(
      markdownImageWithLink(
        "My title",
        "/example.png",
        "https://example.com?foo=bar&fizz_buzz=baz&x>=2"
      )
    ).toBe(
      "[![My title](/example.png)](https://example.com?foo=bar&fizz_buzz=baz&x>=2)"
    );
  });
});

describe("#_encodeSeparators", () => {
  it("converts a space to an underscore", () => {
    expect(_encodeSeparators("Foo Bar", true)).toBe("Foo_Bar");
  });
  it("will ignore transforming a space", () => {
    expect(_encodeSeparators("Foo Bar", false)).toBe("Foo Bar");
  });

  it("converts a single dash to two", () => {
    expect(_encodeSeparators("Foo-Bar", true)).toBe("Foo--Bar");
  });

  it("converts a single underscore to two", () => {
    expect(_encodeSeparators("Foo_Bar", true)).toBe("Foo__Bar");
  });

  it("converts a mix of space, underscore and a dash correctly", () => {
    expect(_encodeSeparators("Foo Bar_Baz-Buzz", true)).toBe(
      "Foo_Bar__Baz--Buzz"
    );
  });
});

describe("#_decodeAngleBrackets", () => {
  it("decodes a left angle bracket", () => {
    expect(_decodeAngleBrackets("%3E%3D1")).toBe(">%3D1");
  });

  it("decodes a right angle bracket", () => {
    expect(_decodeAngleBrackets("foo%3C1")).toBe("foo<1");
  });
});

describe("#_encodeParam", () => {
  it("converts a space to an underscore", () => {
    expect(_encodeParam("Foo Bar")).toBe("Foo_Bar");
  });

  it("converts a single dash to two", () => {
    expect(_encodeParam("Foo-Bar")).toBe("Foo--Bar");
  });

  it("converts a single underscore to two", () => {
    expect(_encodeParam("Foo_Bar")).toBe("Foo__Bar");
  });

  it("converts a mix of space, underscore and a dash correctly", () => {
    expect(_encodeParam("Foo Bar_Baz-Buzz")).toBe("Foo_Bar__Baz--Buzz");
  });

  // These could appear when putting a URL as a value in the path, so need to be escaped.
  it("encodes special characters correctly", () => {
    expect(_encodeParam("&")).toBe("%26");
    expect(_encodeParam("/")).toBe("%2F");
    expect(_encodeParam("?")).toBe("%3F");
  });

  it("encodes a string correctly without converting angle brackets", () => {
    expect(_encodeParam(">=3")).toBe(">%3D3");
    expect(_encodeParam("<2")).toBe("<2");
  });
});

describe("#buildUrl", () => {
  it("handles empty query params", () => {
    expect(buildUrl("http://example.com", {})).toBe("http://example.com/");
  });

  it("ignores a param which is null", () => {
    expect(buildUrl("http://example.com", { foo: "" })).toBe(
      "http://example.com/"
    );
  });

  it("adds a single query param", () => {
    expect(buildUrl("http://example.com", { foo: "bar" })).toBe(
      "http://example.com/?foo=bar"
    );
  });

  it("adds two query params", () => {
    expect(buildUrl("http://example.com", { foo: "bar", bar: "bazz" })).toBe(
      "http://example.com/?foo=bar&bar=bazz"
    );
  });
});

describe("#_formatTitle", () => {
  it("formats a message alone", () => {
    expect(_formatTitle("", "foo")).toBe("foo");
  });

  it("formats a label and message together", () => {
    expect(_formatTitle("bar", "foo")).toBe("bar - foo");
  });
});

describe("#_dashShieldPath", () => {
  it("combines 2 fields", () => {
    expect(_dashShieldPath({ message: "Foo", color: "green" })).toBe(
      "Foo-green"
    );
  });

  it("combines 2 fields", () => {
    expect(
      _dashShieldPath({ message: "Foo", color: "green", label: "Bar" })
    ).toBe("Bar-Foo-green");
  });

  it("combines 2 fields and applies encoding", () => {
    expect(
      _dashShieldPath({ message: "Foo Bar", color: "green", label: "Baz" })
    ).toBe("Baz-Foo_Bar-green");

    expect(
      _dashShieldPath({ message: "Foo", color: "green", label: "Baz-Buzz" })
    ).toBe("Baz--Buzz-Foo-green");

    expect(
      _dashShieldPath({ label: "Foo", message: ">=1.0.0", color: "green" })
    ).toBe("Foo->%3D1.0.0-green");
  });
});

describe("#logoParams", () => {
  it("returns null params", () => {
    expect(logoParams(false)).toStrictEqual({});
  });

  it("returns a large badge", () => {
    expect(logoParams(true)).toStrictEqual({ style: "for-the-badge" });
  });

  it("returns a logo name", () => {
    expect(logoParams(false, "foo")).toStrictEqual({ logo: "foo" });
  });

  it("returns a logo name and logo color", () => {
    expect(logoParams(false, "foo", "white")).toStrictEqual({
      logo: "foo",
      logoColor: "white",
    });
  });

  it("returns a logo name and logo color for a large badge", () => {
    expect(logoParams(true, "foo", "white")).toStrictEqual({
      style: "for-the-badge",
      logo: "foo",
      logoColor: "white",
    });
  });

  it("ignores a logo color with no logo name", () => {
    expect(logoParams(false, "", "white")).toStrictEqual({});
  });
});

describe("#_staticParamsUrl", () => {
  it("returns a valid params URL with empty style params", () => {
    expect(
      _staticParamsUrl(
        {
          label: "Foo",
          message: "Bar",
          color: "green",
        },
        {}
      )
    ).toBe(
      "https://img.shields.io/static/v1?label=Foo&message=Bar&color=green"
    );
  });

  it("returns a valid params URL with style params", () => {
    expect(
      _staticParamsUrl(
        {
          label: "Foo",
          message: "Bar",
          color: "green",
        },
        { fizz: "buzz" }
      )
    ).toBe(
      "https://img.shields.io/static/v1?label=Foo&message=Bar&color=green&fizz=buzz"
    );
  });
});

describe("#_staticDashUrl", () => {
  it("returns a valid dash URL with empty style params", () => {
    expect(
      _staticDashUrl(
        {
          label: "Foo",
          message: "Bar",
          color: "green",
        },
        {}
      )
    ).toBe("https://img.shields.io/badge/Foo-Bar-green");
  });

  it("returns a valid dash URL with style params", () => {
    expect(
      _staticDashUrl(
        {
          label: "Foo",
          message: "Bar",
          color: "green",
        },
        { fizz: "buzz" }
      )
    ).toBe("https://img.shields.io/badge/Foo-Bar-green?fizz=buzz");
  });
});