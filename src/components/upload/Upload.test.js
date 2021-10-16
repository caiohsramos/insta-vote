const rewire = require("rewire")
const Upload = rewire("./Upload")
const onSubmit = Upload.__get__("onSubmit")
const sendPost = Upload.__get__("sendPost")
// @ponicode
describe("onSubmit", () => {
    test("0", () => {
        let callFunction = () => {
            onSubmit({ preventDefault: () => false }, "ponicode.com", () => false, true, "1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            onSubmit({ preventDefault: () => false }, "http://www.example.com/route/123?foo=bar", () => true, false, "v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            onSubmit({ preventDefault: () => true }, "https://twitter.com/path?abc", () => true, false, "v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            onSubmit({ preventDefault: () => false }, "https://", () => true, false, "1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            onSubmit({ preventDefault: () => false }, "https://twitter.com/path?abc", () => true, false, "4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            onSubmit(undefined, undefined, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("sendPost", () => {
    test("0", async () => {
        await sendPost("http://www.example.com/route/123?foo=bar", () => true, () => false, () => "^5.0.0")
    })

    test("1", async () => {
        await sendPost("https://croplands.org/app/a/confirm?t=", () => true, () => false, () => "^5.0.0")
    })

    test("2", async () => {
        await sendPost("http://base.com", () => true, () => false, () => "^5.0.0")
    })

    test("3", async () => {
        await sendPost("https://", () => true, () => false, () => "1.0.0")
    })

    test("4", async () => {
        await sendPost("Www.GooGle.com", () => false, () => false, () => "4.0.0-beta1\t")
    })

    test("5", async () => {
        await sendPost(undefined, undefined, undefined, () => "")
    })
})
